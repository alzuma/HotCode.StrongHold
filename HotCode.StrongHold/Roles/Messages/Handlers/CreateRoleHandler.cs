using System;
using System.Threading.Tasks;
using Dapper;
using HotCode.StrongHold.DB.interfaces;
using HotCode.StrongHold.Roles.Messages.Commands;
using HotCode.StrongHold.Roles.Messages.Events;
using HotCode.StrongHold.Systems;
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
        private readonly IStrongHoldDataBase _strongHoldDataBase;

        public CreateRoleHandler(ILogger<CreateRoleHandler> logger, IBusPublisher busPublisher,
            IStrongHoldDataBase strongHoldDataBase)
        {
            _logger = logger;
            _busPublisher = busPublisher;
            _strongHoldDataBase = strongHoldDataBase;
        }

        public async Task HandleAsync(CreateRole command, CorrelationContext context)
        {
            using (var connection = _strongHoldDataBase.Get())
            {
                const string sql = @"
                    INSERT INTO [dbo].[Role]
                               ([id], [parentId], [name], [description], [roleContextId], [created], [createdBy], [modified], [modifiedBy])
                         VALUES
                               (@id, @parentId, @name, @description, @roleContextId, @created, @createdBy, @modified, @modifiedBy)";

                await connection.ExecuteAsync(sql, new
                {
                    id = command.Id,
                    parentId = command.ParentId.IfEmptyThenEmptyId(),
                    name = command.Name,
                    description = command.Description,
                    roleContextId = command.RoleContextId.IfEmptyThenEmptyId(),
                    created = DateTime.UtcNow.GetUxTime(),
                    createdBy = context.UserId,
                    modified = DateTime.UtcNow.GetUxTime(),
                    modifiedBy = context.UserId
                });
            }

            _logger.LogInformation($"Creating role {command.Id} - {command.Name}");
            await _busPublisher.PublishAsync(new RoleCreated {Id = command.Id, Name = command.Name}, context);
        }
    }
}