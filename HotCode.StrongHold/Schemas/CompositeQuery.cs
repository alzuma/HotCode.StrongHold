using System.Collections.Generic;
using GraphQL.Types;
using HotCode.StrongHold.Schemas.interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace HotCode.StrongHold.Schemas
{
    [ServiceLocator.Service(ServiceLifetime.Scoped)]
    public class CompositeQuery : ObjectGraphType<object>
    {
        public CompositeQuery(IEnumerable<IGraphQueryMarker> graphQueryMarkers)
        {
            Name = "CompositeQuery";
            foreach(var marker in graphQueryMarkers)
            {
                var objectGraphType = marker as ObjectGraphType<object>;
                foreach(var fieldType in objectGraphType.Fields)
                {
                    AddField(fieldType);
                }
            }
        }
    }
}