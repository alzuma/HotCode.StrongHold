using HotCode.StrongHold.Systems.Messaging.interfaces;

namespace HotCode.StrongHold.Roles.Messages.Commands
{
    public class CreateRole : ICommand
    {
        public string Id { get; set; }
        public string Name { get; set; }
    }
}