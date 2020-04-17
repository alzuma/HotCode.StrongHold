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

        public async Task<IEnumerable<RoleEntity>> RolesAsync()
        {
            using var connection = _strongHoldDataBase.Get();
            const string sql = "select * from dbo.Role where id != '00000000-0000-0000-0000-000000000000'";
            return await connection.QueryAsync<RoleEntity>(sql);
        }

        public async Task<RoleEntity> RoleByIdAsync(string roleId)
        {
            using var connection = _strongHoldDataBase.Get();
            const string sql = "select * from dbo.Role where id = @id";
            return (await connection.QueryAsync<RoleEntity>(sql, new {id = roleId})).FirstOrDefault();
        }

        private async Task<IEnumerable<RoleEntity>> GetByIdsAsync(List<string> ids)
        {
            if (ids == null || !ids.Any()) return new List<RoleEntity>();
            using var connection = _strongHoldDataBase.Get();
            const string sql = @"select * from dbo.Role where id in @ids";
            return await connection.QueryAsync<RoleEntity>(sql, new {ids = ids.ToArray()});
        }

        public async Task<IDictionary<string, RoleEntity>> GetByIdsLookupAsync(IEnumerable<string> roleIds)
        {
            var request = roleIds.ToList();
            var result = new List<RoleEntity>();

            while (request.Count > 0)
            {
                var roleLimit = request.Count > 50 ? 50 : request.Count;
                var roles = request.GetRange(0, roleLimit);
                var roleEntities = await GetByIdsAsync(roles);
                result.AddRange(roleEntities);
                request.RemoveRange(0, roleLimit);
            }

            return result.ToDictionary(x => x.Id.ToString(), x => x);
        }
    }
}