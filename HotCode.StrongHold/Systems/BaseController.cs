using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace HotCode.StrongHold.Systems
{
    [ApiController]
    [Produces("application/json")]
    [Route( "api/v{version:apiVersion}/[controller]" )]
    public class BaseController : ControllerBase
    {
        private const string AcceptLanguageHeader = "accept-language";
        private const string DefaultCulture = "en-us";

        protected string Culture
            => Request.Headers.ContainsKey(AcceptLanguageHeader) ?
                Request.Headers[AcceptLanguageHeader].First().ToLowerInvariant() :
                DefaultCulture;
    }
}