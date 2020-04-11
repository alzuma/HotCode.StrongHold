using GraphQL.Types;
using HotCode.StrongHold.Roles.Repositories.interfaces;
using HotCode.StrongHold.Roles.Schemas.Types;
using HotCode.StrongHold.Schemas.interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace HotCode.StrongHold.Roles.Schemas
{
    [ServiceLocator.Service(ServiceLifetime.Scoped)]
    public class RolesQuery : ObjectGraphType, IGraphQueryMarker
    {
        public RolesQuery(IRoleRepository roleRepository)
        {
            FieldAsync<ListGraphType<RoleType>>("roles",
                resolve: async context => await roleRepository.RolesAsync());
        }
    }
}