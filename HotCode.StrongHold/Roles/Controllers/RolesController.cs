using System.Threading.Tasks;
using HotCode.StrongHold.Roles.Messages.Commands;
using HotCode.System;
using HotCode.System.Messaging;
using HotCode.System.Messaging.interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotCode.StrongHold.Roles.Controllers
{
    [ApiVersion("1.0")]
    public class RolesController : BaseController
    {
        public RolesController(IBusPublisher busPublisher) : base(busPublisher)
        {
        }

        /// <summary>
        /// Create new role
        /// </summary>
        /// <param name="createRole">Role body</param>
        /// <returns code="202">Command accepted</returns>
        [HttpPost]
        [ProducesResponseType(typeof(CorrelationContext), StatusCodes.Status202Accepted)]
        public async Task<IActionResult> Post(CreateRole createRole)
        {
            return await SendAsync(createRole.BindId(c => c.Id), createRole.Id);
        }
    }
}