using System.Threading.Tasks;

namespace HotCode.StrongHold.Systems.Messaging.interfaces
{
    public interface ICommandHandler<in T> where T : ICommand
    {
        Task HandleAsync(T command);
    }
}