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
            Field(x => x.Id, false).Description("Unique Role Id");
            Field(x => x.Name, false).Description("Role name");
            Field(x => x.Description).Description("Role description");
            Field(x => x.ParentId, true).Description("Parent Id");

            Field<RoleType, RoleEntity>()
                .Name("Parent")
                .Description("Parent role")
                .ResolveAsync(context =>
                {
                    var loader =
                        dataLoader.Context.GetOrAddBatchLoader<string, RoleEntity>(
                            "HotCode.StrongHold.Roles.Schemas.Types.RoleType",
                            roleRepository.GetByIdsLookupAsync);
                    
                    return loader.LoadAsync(context.Source.ParentId ?? "-1");
                });
        }
    }
}