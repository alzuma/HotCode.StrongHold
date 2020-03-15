using System.Threading.Tasks;
using HotCode.StrongHold.Roles.Messages.Events;
using HotCode.StrongHold.Systems.Messaging;
using HotCode.StrongHold.Systems.Messaging.interfaces;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace HotCode.StrongHold.Roles.Messages.Handlers
{
    [ServiceLocator.Service(ServiceLifetime.Scoped)]
    public class RoleCreatedHandler : IEventHandler<RoleCreated>
    {
        private readonly ILogger<RoleCreated> _logger;

        public RoleCreatedHandler(ILogger<RoleCreated> logger)
        {
            _logger = logger;
        }

        public Task HandleAsync(RoleCreated @event, CorrelationContext context)
        {
            _logger.LogInformation($"Role with ID: {@event.Id} was created");
            return Task.CompletedTask;
        }
    }
}