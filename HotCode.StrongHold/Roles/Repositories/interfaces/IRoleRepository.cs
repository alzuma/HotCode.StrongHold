using System.Collections.Generic;
using System.Threading.Tasks;

namespace HotCode.StrongHold.Roles.Repositories.interfaces
{
    public interface IRoleRepository
    {
        Task<IEnumerable<string>> RolesAsync();
    }
}