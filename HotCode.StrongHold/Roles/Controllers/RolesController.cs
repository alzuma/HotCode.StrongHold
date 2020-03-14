using System.Threading.Tasks;
using HotCode.StrongHold.Roles.Services.interfaces;
using HotCode.StrongHold.Systems;
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

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _roleService.RolesAsync());
        }
    }
}