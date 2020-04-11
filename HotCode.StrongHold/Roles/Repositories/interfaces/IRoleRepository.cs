using System.Collections.Generic;
using System.Threading.Tasks;
using HotCode.StrongHold.Roles.Repositories.Entities;

namespace HotCode.StrongHold.Roles.Repositories.interfaces
{
    public interface IRoleRepository
    {
        Task<IEnumerable<RoleEntity>> RolesAsync();
        Task<RoleEntity> RoleByIdAsync(string roleId);
        Task<IDictionary<string, RoleEntity>> GetByIdsLookupAsync(IEnumerable<string> roleIds);
    }
}