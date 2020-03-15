using System.Linq;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using StackExchange.Redis;

namespace HotCode.StrongHold.Systems
{
    public static class Extensions
    {
        public static T GetOptions<T>(this IConfiguration configuration, string section) where T : new()
        {
            var model = new T();
            configuration.GetSection(section).Bind(model);
            return model;
        }
        
        public static string Underscore(this string value)
            => string.Concat(value.Select((x, i) => i > 0 && char.IsUpper(x) ? "_" + x : x.ToString()));

        public static string ToJson<T>(this T value) => JsonConvert.SerializeObject(value);
        public static T FromJson<T>(this RedisValue value) => JsonConvert.DeserializeObject<T>(value);
        public static T FromJson<T>(this string value) => JsonConvert.DeserializeObject<T>(value);
    }
}