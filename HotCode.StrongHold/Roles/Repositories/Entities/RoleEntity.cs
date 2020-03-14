namespace HotCode.StrongHold.Roles.Repositories.Entities
{
    public class RoleEntity
    {
        public string Id { get; set; }
        public string ParentId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string RoleContextId { get; set; }
        public long Created { get; set; }
        public string CreatedBy { get; set; }
        public long Modified { get; set; }
        public string ModifiedBy { get; set; }
    }
}