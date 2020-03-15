using System.Collections.Generic;
using System.Threading.Tasks;
using HotCode.StrongHold.Roles.Services.interfaces;
using HotCode.StrongHold.Systems;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotCode.StrongHold.Roles.Controllers
{
    [ApiVersion("1.0")]
    public class RolesController : BaseController
    {
        private readonly IRoleService _roleService;

        public RolesController(IRoleService roleService)
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
    }
}