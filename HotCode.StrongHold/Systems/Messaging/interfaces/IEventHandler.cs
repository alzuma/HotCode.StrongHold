using System.Threading.Tasks;

namespace HotCode.StrongHold.Systems.Messaging.interfaces
{
    public interface IEventHandler<in T> where T : IEvent
    {
        Task HandleAsync(T @event, CorrelationContext context);
    }
}