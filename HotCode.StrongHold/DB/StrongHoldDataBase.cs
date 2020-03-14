using System.Data;
using HotCode.StrongHold.DB.interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace HotCode.StrongHold.DB
{
    [ServiceLocator.Service(ServiceLifetime.Singleton)]
    public class StrongHoldDataBase : IStrongHoldDataBase
    {
        public string Name => "StrongHold";
        private readonly IDataBaseContext _dataBaseContext;

        public StrongHoldDataBase(IDataBaseContext dataBaseContext)
        {
            _dataBaseContext = dataBaseContext;
        }

        public IDbConnection Get() => _dataBaseContext.GetConnection(Name);
    }
}