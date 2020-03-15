using System.Threading.Tasks;

namespace HotCode.StrongHold.Systems.Messaging.interfaces
{
    public interface IBusPublisher
    {
        Task PublishAsync<T>(T @event) where T : IEvent;
        Task SendAsync<T>(T command) where T : ICommand;
    }
}