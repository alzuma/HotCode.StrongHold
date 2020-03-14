using System.Collections.Generic;
using System.Threading.Tasks;
using HotCode.StrongHold.Roles.Repositories.interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace HotCode.StrongHold.Roles.Repositories
{
    [ServiceLocator.Service(ServiceLifetime.Scoped)]
    public class RoleRepository : IRoleRepository
    {
        public async Task<IEnumerable<string>> RolesAsync()
        {
            var roles = new List<string>{"admin", "user"};
            return await Task.FromResult(roles);
        }
    }
}