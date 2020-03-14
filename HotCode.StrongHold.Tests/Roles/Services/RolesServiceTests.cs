using System.Linq;
using System.Threading.Tasks;
using HotCode.StrongHold.Roles.Repositories.interfaces;
using HotCode.StrongHold.Roles.Services;
using HotCode.StrongHold.Roles.Services.interfaces;
using Moq;
using NUnit.Framework;
using Shouldly;

namespace HotCode.StrongHold.Tests.Roles.Services
{
    public class RolesServiceTests
    {
        private Mock<IRoleRepository> _roleRepository;
        private IRoleService _roleService;
        
        [SetUp]
        public void SetUp()
        {
            _roleRepository = new Mock<IRoleRepository>();
            _roleService = new RoleService(_roleRepository.Object);
        }
        
        [Test]
        public async Task Roles_GetsAllRoles_ShouldReturnTwoRoles()
        {
            _roleRepository.Setup(s => s.RolesAsync()).ReturnsAsync(new[] {"admin", "user"});
            
            var roles = await _roleService.RolesAsync();
            
            roles.Count().ShouldBe(2);
        }
    }
}