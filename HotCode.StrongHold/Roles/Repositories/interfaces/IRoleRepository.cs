using System.Collections.Generic;
using System.Threading.Tasks;
using HotCode.StrongHold.Roles.Repositories.Entities;

namespace HotCode.StrongHold.Roles.Repositories.interfaces
{
    public interface IRoleRepository
    {
        Task<IEnumerable<RoleEntity>> RolesAsync();
        Task<IEnumerable<RoleEntity>> RoleByIdAsync(string roleId);
        Task<IDictionary<string, RoleEntity>> GetByIdsLookupAsync(IEnumerable<string> roleIds);
    }
}