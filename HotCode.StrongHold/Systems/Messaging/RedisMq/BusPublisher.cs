using System.Reflection;
using System.Threading.Tasks;
using HotCode.StrongHold.Systems.Messaging.interfaces;
using StackExchange.Redis;

namespace HotCode.StrongHold.Systems.Messaging.RedisMq
{
    public class BusPublisher : IBusPublisher
    {
        private readonly IConnectionMultiplexer _connectionMultiplexer;
        private readonly string _defaultNamespace;

        public BusPublisher(IConnectionMultiplexer connectionMultiplexer, RedisMqOptions redisMqOptions)
        {
            _connectionMultiplexer = connectionMultiplexer;
            _defaultNamespace = redisMqOptions.Namespace;
        }

        public async Task PublishAsync<T>(T @event) where T : IEvent
        {
            await _connectionMultiplexer.GetSubscriber().PublishAsync(ChanelName(@event), @event.ToJson());
        }

        public async Task SendAsync<T>(T command) where T : ICommand
        {
            await _connectionMultiplexer.GetSubscriber().PublishAsync(ChanelName(command), command.ToJson());
        }

        private string ChanelName<T>(T message)
        {
            var @namespace = message.GetType().GetCustomAttribute<MessageNamespaceAttribute>()?.Namespace ??
                             _defaultNamespace;
            var chanelName = $"{@namespace}{typeof(T).Name.Underscore()}".ToLowerInvariant();
            return chanelName;
        }
    }
}