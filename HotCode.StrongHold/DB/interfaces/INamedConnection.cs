using System.Data;

namespace HotCode.StrongHold.DB.interfaces
{
    public interface INamedConnection
    {
        string Name { get; }
        IDbConnection Get();
    }
}