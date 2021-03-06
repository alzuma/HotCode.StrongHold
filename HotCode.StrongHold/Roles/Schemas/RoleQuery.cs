﻿using System.Collections.Generic;
using GraphQL;
using GraphQL.Types;
using HotCode.StrongHold.Roles.Repositories.interfaces;
using HotCode.StrongHold.Roles.Schemas.Types;
using HotCode.StrongHold.Schemas.interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace HotCode.StrongHold.Roles.Schemas
{
    [ServiceLocator.Service(ServiceLifetime.Scoped)]
    public class RoleQuery: ObjectGraphType, IGraphQueryMarker
    {
        public RoleQuery(IRoleRepository roleRepository)
        {
            FieldAsync<RoleType>("role",
                resolve: async context =>
                {
                    var id = context.GetArgument<string>("id");

                    if (!string.IsNullOrEmpty(id))
                    {
                        return await roleRepository.RoleByIdAsync(id);
                    }

                    return null;
                },
                arguments: new QueryArguments(new List<QueryArgument>
                {
                    new QueryArgument<IdGraphType>
                    {
                        Name = "id"
                    },
                })
            );
        }
    }
}