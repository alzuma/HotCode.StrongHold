namespace HotCode.StrongHold.Systems.Messaging.RedisMq
{
    public class RedisMqOptions
    {
        public string Namespace { get; set; }
        public string Host { get; set; }
        public int Retries { get; set; }
        public int RetryInterval { get; set; }
    }
}