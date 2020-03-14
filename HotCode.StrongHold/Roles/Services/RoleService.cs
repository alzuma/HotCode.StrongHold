using System.Collections.Generic;
using System.Threading.Tasks;
using HotCode.StrongHold.Roles.Repositories.interfaces;
using HotCode.StrongHold.Roles.Services.interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace HotCode.StrongHold.Roles.Services
{
    [ServiceLocator.Service(ServiceLifetime.Scoped)]
    public class RoleService : IRoleService
    {
        private readonly IRoleRepository _roleRepository;

        public RoleService(IRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }

        public async Task<IEnumerable<string>> RolesAsync()
        {
            return await _roleRepository.RolesAsync();
        }
    }
}