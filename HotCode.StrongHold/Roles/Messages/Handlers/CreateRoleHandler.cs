using System.Threading.Tasks;
using HotCode.StrongHold.Roles.Messages.Commands;
using HotCode.StrongHold.Roles.Messages.Events;
using HotCode.StrongHold.Systems.Messaging;
using HotCode.StrongHold.Systems.Messaging.interfaces;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace HotCode.StrongHold.Roles.Messages.Handlers
{
    [ServiceLocator.Service(ServiceLifetime.Scoped)]
    public class CreateRoleHandler : ICommandHandler<CreateRole>
    {
        private readonly ILogger<CreateRoleHandler> _logger;
        private readonly IBusPublisher _busPublisher;

        public CreateRoleHandler(ILogger<CreateRoleHandler> logger, IBusPublisher busPublisher)
        {
            _logger = logger;
            _busPublisher = busPublisher;
        }

        public async Task HandleAsync(CreateRole command, CorrelationContext context)
        {
            _logger.LogInformation($"Creating role {command.Id} - {command.Name}");
            await _busPublisher.PublishAsync(new RoleCreated {Id = command.Id,}, context);
        }
    }
}