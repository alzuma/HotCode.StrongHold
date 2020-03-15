using System.Collections.Generic;
using System.Threading.Tasks;
using HotCode.StrongHold.Roles.Messages.Commands;
using HotCode.StrongHold.Roles.Services.interfaces;
using HotCode.StrongHold.Systems;
using HotCode.StrongHold.Systems.Messaging;
using HotCode.StrongHold.Systems.Messaging.interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotCode.StrongHold.Roles.Controllers
{
    [ApiVersion("1.0")]
    public class RolesController : BaseController
    {
        private readonly IRoleService _roleService;

        public RolesController(IBusPublisher busPublisher, IRoleService roleService) : base(busPublisher)
        {
            _roleService = roleService;
        }

        /// <summary>
        /// Retrieve all roles within the system
        /// </summary>
        /// <returns>List of roles</returns>
        /// <response code="200">Returns all roles</response>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<string>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get()
        {
            return Ok(await _roleService.RolesAsync());
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