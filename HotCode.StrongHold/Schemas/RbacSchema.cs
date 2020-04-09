using System;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;

namespace HotCode.StrongHold.Schemas
{
    public class RbacSchema : Schema
    {
        public RbacSchema(IServiceProvider resolver) : base(resolver)
        {
            Query = resolver.GetService<CompositeQuery>();
        }
    }
}