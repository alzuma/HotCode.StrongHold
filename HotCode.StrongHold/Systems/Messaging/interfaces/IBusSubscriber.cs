using System;

namespace HotCode.StrongHold.Systems.Messaging.interfaces
{
    public interface IBusSubscriber
    {
        IBusSubscriber SubscribeEvent<T>(Func<T, HotCodeException, IRejectedEvent> onError = null) where T : IEvent;
        IBusSubscriber SubscribeCommand<T>(Func<T, HotCodeException, IRejectedEvent> onError = null)
            where T : ICommand;
    }
}