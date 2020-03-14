using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using HotCode.StrongHold.DB.interfaces;
using HotCode.StrongHold.Roles.Repositories.Entities;
using HotCode.StrongHold.Roles.Repositories.interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace HotCode.StrongHold.Roles.Repositories
{
    [ServiceLocator.Service(ServiceLifetime.Scoped)]
    public class RoleRepository : IRoleRepository
    {
        private readonly IStrongHoldDataBase _strongHoldDataBase;

        public RoleRepository(IStrongHoldDataBase strongHoldDataBase)
        {
            _strongHoldDataBase = strongHoldDataBase;
        }

        public async Task<IEnumerable<string>> RolesAsync()
        {
            using var connection = _strongHoldDataBase.Get();
            const string sql = "select * from dbo.Role";
            var result = await connection.QueryAsync<RoleEntity>(sql);
            return result.Select(s => s.Name);
        }
    }
}