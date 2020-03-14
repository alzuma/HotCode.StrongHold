using System.Data;

namespace HotCode.StrongHold.DB.interfaces
{
    public interface IDataBaseContext
    {
        IDbConnection GetConnection(string database);
    }
}