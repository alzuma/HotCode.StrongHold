namespace HotCode.StrongHold.Systems.Messaging.interfaces
{
    public interface IRejectedEvent : IEvent
    {
        string Reason { get; }
        string Code { get; }
    }
}