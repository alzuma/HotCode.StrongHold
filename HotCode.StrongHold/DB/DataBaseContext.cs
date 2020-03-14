using System.Data;
using System.Data.SqlClient;
using HotCode.StrongHold.DB.interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace HotCode.StrongHold.DB
{
    [ServiceLocator.Service(ServiceLifetime.Singleton)]
    public class DataBaseContext : IDataBaseContext
    {
        private readonly IConfiguration _configuration;

        public DataBaseContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IDbConnection GetConnection(string database)
        {
            var connectionConfiguration = _configuration.GetSection(database);
            var connectionString = connectionConfiguration.GetValue<string>("connectionString");
            return new SqlConnection(connectionString);
        }
    }
}