using HotCode.System.Messaging.interfaces;

namespace HotCode.StrongHold.Roles.Messages.Commands
{
    public class CreateRole : ICommand
    {
        public string Id { get; set; }
        public string ParentId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string RoleContextId { get; set; }
    }
}