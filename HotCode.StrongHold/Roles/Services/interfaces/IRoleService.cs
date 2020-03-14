using System.Collections.Generic;
using System.Threading.Tasks;

namespace HotCode.StrongHold.Roles.Services.interfaces
{
    public interface IRoleService
    {
        Task<IEnumerable<string>> RolesAsync();
    }
}