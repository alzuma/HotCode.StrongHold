using System;
using System.IO;
using System.Reflection;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using HotCode.StrongHold.Roles.Messages.Commands;
using HotCode.StrongHold.Roles.Messages.Events;
using HotCode.StrongHold.Schemas;
using HotCode.System.Messaging.RedisMq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using ServiceLocator;

namespace HotCode.StrongHold
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<RbacSchema>();

            services.AddGraphQL(x => { x.ExposeExceptions = true; })
                .AddGraphTypes(ServiceLifetime.Scoped)
                .AddSystemTextJson()
                .AddDataLoader();

            services.AddServiceLocator<Program>();
            services.AddControllers();
            services.AddApiVersioning(options =>
            {
                options.ReportApiVersions = true;
                options.AssumeDefaultVersionWhenUnspecified = true;
                options.DefaultApiVersion = new ApiVersion(1, 0);
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1.0", new OpenApiInfo {Title = "RBAC", Version = "v1.0"});
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });

            services.AddRedisMessaging();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1.0/swagger.json", "RBAC v1.0");
                c.RoutePrefix = string.Empty;
            });


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

            app.UseRedisMessaging()
                .SubscribeEvent<RoleCreated>()
                .SubscribeCommand<CreateRole>();
            
            app.UseGraphQL<RbacSchema>();
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions());
        }
    }
}