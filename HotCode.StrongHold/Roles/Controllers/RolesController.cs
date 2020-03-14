using System.Collections.Generic;
using HotCode.StrongHold.Systems;
using Microsoft.AspNetCore.Mvc;

namespace HotCode.StrongHold.Roles.Controllers
{
    [ApiVersion("1.0")]
    public class RolesController : BaseController
    {
        [HttpGet]
        public IActionResult Get()
        {
            var roles = new List<string>{"admin", "user"};
            return Ok(roles);
        }
    }
}