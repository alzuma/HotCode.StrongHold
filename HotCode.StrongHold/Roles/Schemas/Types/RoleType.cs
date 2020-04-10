using GraphQL.DataLoader;
using GraphQL.Types;
using HotCode.StrongHold.Roles.Repositories.Entities;
using HotCode.StrongHold.Roles.Repositories.interfaces;

namespace HotCode.StrongHold.Roles.Schemas.Types
{
    public sealed class RoleType : ObjectGraphType<RoleEntity>
    {
        public RoleType(IDataLoaderContextAccessor dataLoader, IRoleRepository roleRepository)
        {
            Field(x => x.Id).Description("Unique Role Id");
            Field(x => x.Name).Description("Role name");
            Field(x => x.Description).Description("Role description");
            Field(x => x.ParentId).Description("Parent Id");

            Field<RoleType, RoleEntity>()
                .Name("Parent")
                .Description("Parent role")
                .ResolveAsync(context =>
                {
                    var loader =
                        dataLoader.Context.GetOrAddBatchLoader<string, RoleEntity>(
                            "HotCode.StrongHold.Roles.Schemas.Types.RoleType",
                            roleRepository.GetByIdsLookupAsync);
                    
                    return loader.LoadAsync(context.Source.ParentId);
                });
        }
    }
}