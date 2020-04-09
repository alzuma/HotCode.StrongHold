using HotCode.StrongHold.Systems.Messaging;
using HotCode.StrongHold.Systems.Messaging.interfaces;

namespace HotCode.StrongHold.Roles.Messages.Events
{
    public class RoleCreated : IEvent
    {
        public string Id { get; set; }
        public string Name { get; set; }
    }
}