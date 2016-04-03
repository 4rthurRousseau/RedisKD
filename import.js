var redis = require('redis');
var host = "172.17.0.2";
var port = "6379";

var client = redis.createClient(port, host);

var reading = [
  {
	"href": "http://learninglaravel.net/how-to-use-redis-for-queuing-in-laravel-5/link",
	"description": "How To Use Redis For Queuing In Laravel 5",
	"extended": "",
	"meta": "e522822fa501bee02844240d09aeca1d",
	"hash": "e06355d283f6b63be55cbdb02f5bd402",
	"time": "2016-02-18T21:13:56Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-laravel redis-queue"
  },
  {
	"href": "http://www.paluch.biz/blog/161-redis-transactions.html",
	"description": "Redis transactions what they are how they work",
	"extended": "",
	"meta": "26995ede1341de16f56b7741e1020936",
	"hash": "35143a6ae64562cb07156522168f7179",
	"time": "2016-02-18T21:09:27Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-transaction redis-nl-reading"
  },
  {
	"href": "https://storify.com/martinkl/redlock-discussion",
	"description": "Redlock discussion",
	"extended": "Martin did a storify summary of the online discussion about Redlock.",
	"meta": "0d97fa3246e1918daaf835f62dbb1b1c",
	"hash": "a96455f8d1666b649a8a9653da3b0ee4",
	"time": "2016-02-16T06:03:17Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-redlock redis-nl-reading"
  },
  {
	"href": "http://antirez.com/news/101",
	"description": "Is Redlock safe? Answer from @antirez to @martinkl",
	"extended": "The counter-analysis from Redis creator about Martin Kleppmann analysis saying RedisLock algorithm is safe.",
	"meta": "cd58053c5f49d622dc49af318f1bac3b",
	"hash": "4594f4d44f57a22f94596f006caa4aca",
	"time": "2016-02-09T20:37:10Z",
	"shared": "no",
	"toread": "no",
	"tags": "fg redis redis-nl-reading redis-lock"
  },
  {
	"href": "http://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html",
	"description": "How to do distributed locking - Redis Redlock issues /by @martinkl",
	"extended": "Martin Kleppmann's take on the issues regarding Redlock algorithm <img src=\"http://martin.kleppmann.com/2016/02/fencing-tokens.png\">",
	"meta": "a4eb8a08714ec5281c4dee233daaf520",
	"hash": "2d458886cca3b1284d1c930828efab69",
	"time": "2016-02-09T18:53:08Z",
	"shared": "no",
	"toread": "no",
	"tags": "fg redis redis-redlock redis-nl-reading redis-lock"
  },
  {
	"href": "https://medium.com/appaloosa-store-engineering/you-should-revise-your-redis-max-connections-setting-8136f063c916",
	"description": "You should revise your Redis max connections setting /by @appaloosastore",
	"extended": "A post-mortem by Appaloosa team on how they handled the unfamous \"ERR max number of clients reached\" error.",
	"meta": "0ea49b0cd0d2898ce6bca652a623045f",
	"hash": "f968fb6b9485a38f1bd98cf5f4f36aa6",
	"time": "2016-02-05T07:24:04Z",
	"shared": "no",
	"toread": "no",
	"tags": "fg redis redis-nl-reading redis-heroku redis-max-connections"
  },
  {
	"href": "https://github.com/redis/redis-rcp/pulls",
	"description": "RCP10 - add two new sub-commands to Redis CONFIG",
	"extended": "This RCP propose to add two new options to the config command. \r\nThe first is to enable the user to pull the default values for all of the configuration directives. The second for pulling all directive/value pairs which are *not* the default.",
	"meta": "0c37c3260aceafe82ee38ef9d1575075",
	"hash": "24013d24dfd6caff9169ce64b48e5dfb",
	"time": "2016-01-27T21:52:40Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://www.codeproject.com/Articles/1072137/Indexing-Columns-in-Redis?fid=1898835&df=90&mpp=50&prof=False&sort=Position&view=Expanded&spc=Tight",
	"description": "Indexing Columns in Redis",
	"extended": "",
	"meta": "31e6ca6eaeae47310597d4bc516313dd",
	"hash": "d0a13cad0acadd9f82f30ff3fcee0319",
	"time": "2016-01-22T10:03:58Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "https://aws.amazon.com/fr/about-aws/whats-new/2016/01/amazon-elastiCache-now-supports-redis-version-2-8-24/",
	"description": "Amazon ElastiCache now supports Redis version 2.8.24",
	"extended": "",
	"meta": "32d476d3cfae316184843c948cd0fa43",
	"hash": "9ef2e2c23a4f49f76e4358e626c39f86",
	"time": "2016-01-22T10:01:04Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-elasticache"
  },
  {
	"href": "http://techblog.netflix.com/2016/01/dynomite-with-redis-on-aws-benchmarks_14.html",
	"description": "Benchmark: Dynomite with Redis on AWS",
	"extended": "Dynomite, with Redis is now utilized as a production system within Netflix. In this post, Netflix tech team show performance results using Amazon Web Services (AWS) with and without the recently added consistency feature.",
	"meta": "c01303e9159d709c4415541f391daa90",
	"hash": "66e41225bc8fd109fdbd0ebe7a6f92b0",
	"time": "2016-01-15T07:51:08Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-benchmark redis redis-nl-reading redis-dynomite"
  },
  {
	"href": "https://github.com/plpawsaw/Logstash-FilterPlugin-Redis",
	"description": "Logstash-FilterPlugin-Redis - A Logstash filter plugin which connects to Redis",
	"extended": "",
	"meta": "b26e722dc2f3fbe04f0badec90e0fb6a",
	"hash": "21f4cf814bc4950baa73b7a7dbf2775d",
	"time": "2016-01-15T07:40:44Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-logstash"
  },
  {
	"href": "https://github.com/slfs007/pp-redis/commit/65ac9246ce8ea623eea6f2679186062b4372b492",
	"description": "Implementing the Ping Pong algorithm into Redis",
	"extended": "A fork of redis that implements the Ping Pong algorithm. I did not know about this one, I would be glad if anyone could share their use-case with me! :)",
	"meta": "8754ec699b9e34deb1b7f3e54ebf6386",
	"hash": "ac5536f8a8ac88818e4680673b5d995c",
	"time": "2016-01-15T07:33:42Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-nl-reading redis-ping-pong redis"
  },
  {
	"href": "http://code.tutsplus.com/articles/understanding-the-magic-of-bloom-filters-with-nodejs-redis--cms-25397",
	"description": "Understanding the Magic of Bloom Filters With Node.js & Redis",
	"extended": "",
	"meta": "0426416002f724ddc86b971253a0d062",
	"hash": "5763a621c271e71ed6ec88f2fcc654f5",
	"time": "2016-01-14T16:32:47Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://marios.io/2016/01/01/how-we-increased-our-click-through-rates-using-bandits-in-python-and-redis/",
	"description": "How we increased our click-through rates using bandits in Python and Redis",
	"extended": "",
	"meta": "57ee6bbb72fe31f66a765e997db2deb1",
	"hash": "67a3d221019aeb7492f1b8841d3ab316",
	"time": "2016-01-14T16:29:33Z",
	"shared": "no",
	"toread": "no",
	"tags": "bandit redis redis-nl-reading"
  },
  {
	"href": "http://gotsomething.com/2016/01/11/how-to-scale-your-web-socket-server-wss-using-redis-cache/",
	"description": "How to scale your web socket server (WSS) using Redis Cache",
	"extended": "The classical way to scale SocketIO with Redis :)",
	"meta": "01dfbb8d8f0fc5ad792a9d7df831423a",
	"hash": "eacbc61aa4892b831006c255e2b2677c",
	"time": "2016-01-14T15:50:02Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-socketio"
  },
  {
	"href": "https://medium.com/@paydro/hacking-redis-to-save-money-6472332697e4",
	"description": "Hacking Redis To Save Money",
	"extended": "An interesting sorry that ends with forking and hacking Redis",
	"meta": "5cea405861702fa995465db0674b8769",
	"hash": "642e91105552fb533e71ea411407401e",
	"time": "2016-01-08T10:00:54Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-fork"
  },
  {
	"href": "http://danoyoung.blogspot.fr/2015/12/lua-scripting-with-redis.html",
	"description": "Lua scripting with Redis for generic analytics",
	"extended": "TL:DR; A key per day per action, loop a day-range using scan, predefine calculations and run them against each keys.",
	"meta": "413a114557c3f8e0e25da175e8094ba9",
	"hash": "bd6bdf8d06cb6079cd886d59329121fa",
	"time": "2016-01-01T11:48:18Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lua"
  },
  {
	"href": "http://redis.io/commands",
	"description": "Redis 3.2 upcoming GEO* commands",
	"extended": "GEOADD, GEOHASH, GEOPOS, GEODIST, GEORADIUS and GEORADIUSBYMEMBER.",
	"meta": "26b0376eb2765938a2af544319b0d318",
	"hash": "d16d5c27b8c4ff34ccb335d0557bee1f",
	"time": "2015-12-25T10:01:11Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-geo redis-localisation"
  },
  {
	"href": "https://community.mellanox.com/docs/DOC-2117",
	"description": "VMA Improves Redis Transaction Rate and Latency (Memtier Benchmark)",
	"extended": "This post demonstrates latency and throughput  benchmark using RedisLabs memtier benchmark over VMA (Virtual Memory Area).",
	"meta": "18ac66d933ac39d1a8d5922eb7aacd48",
	"hash": "feb443a081623fdafea87cbc4cf123ff",
	"time": "2015-12-23T10:23:43Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-vma redis-rdma"
  },
  {
	"href": "https://marioharvey.com/restoring-elasticache-redis-instance-you-cant-snapshot/",
	"description": "Restoring an Elasticache Redis Instance You Can't Snapshot",
	"extended": "... using redis-cli and S3 seed feature.",
	"meta": "97de0bf8b90760223274bcbd77468c91",
	"hash": "d4f229f83b90ba8ad3d61e2571736b7e",
	"time": "2015-12-18T07:41:10Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-snapshot"
  },
  {
	"href": "https://msdn.microsoft.com/en-us/magazine/mt595755",
	"description": "How Azure, Web API and Redis Helped Deliver Data Faster",
	"extended": "This article is a use case in which the Azure team helped a client implement Redis and Web API. It discusses their implementation approach, the challenges they encountered and how they ultimately achieved the performance requirements. ",
	"meta": "b79d84f444f7a206624e91cefdfcb6a2",
	"hash": "09c4a96bfd9b5b57b2427d10c5127e77",
	"time": "2015-12-18T07:29:07Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-azure redis-usecase"
  },
  {
	"href": "https://medium.com/hacking-and-gonzo/bitmapist-analytics-and-cohorts-for-redis-44be43458ef6#.k6tz2f2k4",
	"description": "bitmapist: Analytics and cohorts for Redis",
	"extended": "Here’s a guide of why it’s useful and how to get started.",
	"meta": "71f69a559670989e23efca376aa7c333",
	"hash": "94f30d8b2f4a27bb18a84ede335af8d7",
	"time": "2015-12-18T07:08:23Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cohort redis-retention redis-setbit"
  },
  {
	"href": "http://kevinchen.co/blog/postmortem-server-compromised/",
	"description": "Postmortem: Server compromised due to publicly accessible Redis",
	"extended": "",
	"meta": "8bbb75d28b59a521d40b8c769c722d83",
	"hash": "9e14dee913ad0eac6f3c096c939f1fc5",
	"time": "2015-12-11T09:17:29Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-security redis-nl-reading"
  },
  {
	"href": "http://www.bennadel.com/blog/2965-redis-doesn-t-store-empty-sets-or-hashes-and-will-delete-empty-sets-and-hashes.htm?&_=0.9303211085498333#comments_47503",
	"description": "Redis Doesn't Store Empty Sets Or Hashes (And Will Delete Empty Sets And Hashes)",
	"extended": "Yes Redis doesn't store empty sets or empty hashes :)",
	"meta": "cbbe7247731611812ae46f2f96af9f71",
	"hash": "cd3fdcc397c60d3092e787f6e5c31e21",
	"time": "2015-12-04T10:05:39Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-newbe"
  },
  {
	"href": "http://www.infoworld.com/article/3008052/nosql/mongodb-and-redis-pair-volume-with-velocity.html",
	"description": "MongoDB and Redis pair volume with velocity",
	"extended": "",
	"meta": "005b45507b4098b4412c6941f7d220ff",
	"hash": "b01b1ac3952681d14847d1d22a2a6b27",
	"time": "2015-12-04T09:45:13Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-mongodb"
  },
  {
	"href": "http://www.binwang.me/2015-11-22-use-redis-instead-of-spark-streaming-to-count-statistics.html",
	"description": "Why I used Redis instead of Spark Streaming to count statistics /by @Bingo_Wang •",
	"extended": "",
	"meta": "465c907c20d0ce73fc916b8bb53a515b",
	"hash": "9990dabd9e849aec8f9c507ce5e884d2",
	"time": "2015-11-27T12:51:41Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-count redis-spark redis-statistics fg"
  },
  {
	"href": "http://www.toptal.com/go/going-real-time-with-redis-pubsub",
	"description": "Going Real-Time with Redis Pub/Sub",
	"extended": "This article walk through the architecture of a simple real-time image sharing and messaging web app. It focuses on the various components, such as Redis Pub/Sub, involved in building a real-time app and see how they all play their role in the overall architecture.",
	"meta": "34470b48c8ddb1e771ca3a5316b3e663",
	"hash": "b2cf319f0a7df07850393841960c811d",
	"time": "2015-11-26T18:44:10Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-pubsub redis-nl-reading redis-go"
  },
  {
	"href": "https://aws.amazon.com/fr/about-aws/whats-new/2015/11/amazon-elasticache-now-supports-redis-version-2-8-23/",
	"description": "Amazon ElastiCache now supports Redis version 2.8.23",
	"extended": "",
	"meta": "57ab6d83ba09cdd4dc33e0ebf7748460",
	"hash": "ef74d1e4ced1934a37f73aef302d6baf",
	"time": "2015-11-20T08:59:10Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-elasticache"
  },
  {
	"href": "http://antirez.com/news/97",
	"description": "Recent improvements to Redis Lua scripting /by @antirez",
	"extended": "1. A proper debugger for Redis Lua scripts.<br/>\r\n2. Replication, and storage on the AOF, of Lua scripts as a set of write commands materializing the *effects* of the script, instead of replicating the script itself as we normally do.",
	"meta": "c3fd1bdbd42528c4f4834ffe67fe5004",
	"hash": "a53aff3d2520f0f46610cf94a9b4c77c",
	"time": "2015-11-20T08:56:37Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lua redis-lua-debugging"
  },
  {
	"href": "https://github.com/nanopack/redundis",
	"description": "redundis - Redis HA cluster using sentinel to transparently proxy connections to the active primary member",
	"extended": "Redundis is a smart sentinel aware proxy for redis that allows redis clients to not care about failover of the redis master node. Connections are automatically forwarded to the master redis node, and when the master node fails over, clients are disconnected and reconnected to the new master node.",
	"meta": "afe985a0c297bea830cf92709f54e0aa",
	"hash": "3ad5c4818148f2b7b0b9db173583e1b6",
	"time": "2015-11-20T08:51:42Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-ha redis-cluster"
  },
  {
	"href": "http://www.devbattles.com/en/sand/post-1937-\"Stored_Procedures\"_in_Redis",
	"description": "\"Stored Procedures\" in Redis /by @vitol_l",
	"extended": "",
	"meta": "f9a3b1311563ec61c338645e26c3d055",
	"hash": "b5d611edbc430889c276dce022a00b58",
	"time": "2015-11-13T07:56:03Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lua"
  },
  {
	"href": "https://docs.docker.com/engine/examples/running_redis_service/",
	"description": "Dockerizing a Redis service",
	"extended": "How to dockerize a Redis service and link it to a web application",
	"meta": "8b090086670c8575951644117e882c8b",
	"hash": "fe367ff96f8f97a81c524e90d1e7d6a5",
	"time": "2015-11-06T11:02:34Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-docker"
  },
  {
	"href": "http://julienblanchard.com/2015/using-resque-with-rust/",
	"description": "Using Resque with Rust /by @julienXX",
	"extended": "How to write a fully functional Resque worker in Rust.",
	"meta": "51634df723bca7af947e5558e2906f92",
	"hash": "eed43fef7d65c4cb073df609005463aa",
	"time": "2015-10-30T10:11:38Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "https://berezovskiy.me/2015/10/redis-on-arm/",
	"description": "Installing Redis from source on ARM /by @berezovskiy",
	"extended": "",
	"meta": "cd98d7a55c0a9878fbe6abd57b22335b",
	"hash": "0e261a4eb0f38d2936072b79718fff0c",
	"time": "2015-10-30T10:08:07Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://www.javacodegeeks.com/2015/10/run-1000-docker-redis-containers-in-less-than-15-minutes-on-a-cluster-of-5-cloud-servers-with-2gb-of-memory-each.html",
	"description": "Run 1,000 Docker Redis Containers In Less Than 15 Minutes On A Cluster Of 5 Cloud Servers With 2GB Of Memory Each",
	"extended": "",
	"meta": "18191df8fe50f600bbbdcc477893a151",
	"hash": "049d4e5e5a7b9dfb2dcd65ac98dae9fd",
	"time": "2015-10-30T10:05:37Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-nl-reading redis redis-docker"
  },
  {
	"href": "https://dimuthublog.wordpress.com/2015/10/20/configuring-redis-session-state-provider-with-azure/",
	"description": "Configuring Redis Session State Provider With Azure",
	"extended": "How to configure Redis to store session data in .NET with the aid of couple of nugget packages using the Redis windows port",
	"meta": "621818f1cfe7789a335e42f86e0d7847",
	"hash": "bf019d08ba28cb0bdd59fc32fa7942c2",
	"time": "2015-10-23T14:38:22Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-azure"
  },
  {
	"href": "http://blog.mongodirector.com/introduction-to-redis-data-structures-sets/",
	"description": "Introduction to Redis Data Structures: Sets",
	"extended": "",
	"meta": "eea9027eb672a4b1dcdf12afa3e2ed33",
	"hash": "e068199f9f58210be3a0c04e0f393cd5",
	"time": "2015-10-10T17:38:40Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-sets"
  },
  {
	"href": "https://dzone.com/articles/recipe-rsyslog-redis-logstash-1",
	"description": "Recipe: rsyslog + Redis + Logstash",
	"extended": "ee how to install and configure the needed components so you can send your local syslog (or tail files with rsyslog) to be buffered in Redis so you can use Logstash to ship them to Elasticsearch.",
	"meta": "1ef4515388d3c9e2a6422e2f828fcb53",
	"hash": "46e14a8011a7705f26efdc5d7ec33a11",
	"time": "2015-10-09T14:53:30Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-logstash redis-rsyslog"
  },
  {
	"href": "https://quickleft.com/blog/multi-tenant-applications-redis/",
	"description": "Multi-Tenant Applications: Redis",
	"extended": "How to setup multi-tenant applications with Redis using compound keys.",
	"meta": "d66201199fb3c6ae7b9d4f9729ec2261",
	"hash": "7956efcf3810192718c7c1d188c4c27c",
	"time": "2015-10-09T14:52:46Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-multi-tenant"
  },
  {
	"href": "http://www.datanami.com/2015/10/06/why-redis-needs-enterprise-developers/",
	"description": "Why Redis Needs Enterprise Developers",
	"extended": "A feedback by Salvatore Sanfilippo about Redis usage in large enterprise.",
	"meta": "507ecbdbe261580019ac3d37e49a07c2",
	"hash": "ff1dcdf984e8bde97c26a6b7d59c487a",
	"time": "2015-10-09T14:39:33Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-enterprise"
  },
  {
	"href": "https://github.com/sebleier/django-redis-cache",
	"description": "Redis Django Cache Backend v1.5.0",
	"extended": "A Redis cache backend for Django, last version v1.5.0 adds the ability to compress/decompress cache values using pluggable compressors.",
	"meta": "761a87e59dc24a740578e43435a6badc",
	"hash": "bc5e892a9285a48115c164a15d6917cf",
	"time": "2015-10-09T13:32:23Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-python"
  },
  {
	"href": "https://dzone.com/articles/heroku-data-links-with-postgres-and-redis",
	"description": "Heroku Data Links With Postgres and Redis /by @moritzplassnig",
	"extended": "Learn how to use Foreign Data Wrappers (FDW) in Heroku with Redis and PostgreSQL. Heroku has made it a whole lot simpler.",
	"meta": "c09fe41e5ddcf868cf14bde56db951b6",
	"hash": "f67cf994b36aae1cea16430ae4a6b0e9",
	"time": "2015-10-02T06:46:18Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-postgresql-fdw redis redis-nl-reading"
  },
  {
	"href": "https://azure.microsoft.com/en-us/pricing/details/cache/",
	"description": "Microsoft Azure Redis Cache pricing page",
	"extended": "It's always interesting to see what a PaaS like Microsoft Azure can offer.",
	"meta": "ca206568040a9f38955b5a7909102132",
	"hash": "2d4d86f8dc577341d4f4a9294922d2ff",
	"time": "2015-10-02T06:33:42Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-azure"
  },
  {
	"href": "http://toreaurstad.blogspot.no/2015/09/synchronizing-redis-local-caches-for.html",
	"description": "Synchronizing Redis local caches for distributed multi-subscriber scenarios using C#",
	"extended": "",
	"meta": "1fa564849500b7a90f602d5ca08756f9",
	"hash": "9969ac44133e78d69bb868adbf8c1138",
	"time": "2015-10-01T22:06:34Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-net redis-pubsub"
  },
  {
	"href": "http://www.javacodegeeks.com/2015/09/redis-clustering.html",
	"description": "Redis Clustering",
	"extended": "A crash course on how to setup a Redis cluster",
	"meta": "cf11b9ccfa2f8f32ecb1acaf4fbaea10",
	"hash": "b76ffb9a2afdf2013103811b84983127",
	"time": "2015-09-25T08:13:50Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cluster"
  },
  {
	"href": "http://www.javacodegeeks.com/2015/09/spring-data-and-redis.html",
	"description": "Spring Data and Redis",
	"extended": "A crash course on how to find the right Java client, how to setup and use it with Eclipse and Sprint Data Redis.",
	"meta": "0f8a46de01e4115ba23a4c5822b4d23e",
	"hash": "57e29c37b232e387ef25796d1c042f13",
	"time": "2015-09-25T08:12:07Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-java redis-sprint"
  },
  {
	"href": "http://www.mikeperham.com/2015/09/24/storing-data-with-redis/",
	"description": "Storing Data with Redis //by @mperham",
	"extended": "Would you stuff all of your data into one database table? That’s crazy, Mike, don’t be silly! What if I told you most people do just that with Redis?",
	"meta": "a72715fda363f4d3c78ee27da4612de3",
	"hash": "19851fa990ccd79a9272fc3a4c914c7a",
	"time": "2015-09-25T08:04:19Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-nl-reading redis redis-modelisation"
  },
  {
	"href": "http://averagesecurityguy.info/2015/09/17/pentesting-redis-servers/",
	"description": "Pentesting Redis Servers",
	"extended": "",
	"meta": "21c637bffa54a97e284a68c1afde34db",
	"hash": "cda5dae17b07a27bfc1daf870a5e1ca9",
	"time": "2015-09-19T11:20:07Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-security"
  },
  {
	"href": "http://www.jeroenreijn.com/2015/09/testing-session-replication-with-docker-compose-redis-spring-session.html",
	"description": "Testing session replication with Docker, Spring Session and Redis /by @jreijn",
	"extended": "",
	"meta": "a2ac465ea4f4488710074533358245a9",
	"hash": "dcdf2574897f38a9b6cbe79fcf010e05",
	"time": "2015-09-18T08:29:01Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-docker"
  },
  {
	"href": "https://redislabs.com/blog/redis-wins-at-the-polls#.VfvHPGTtmko",
	"description": "Redis Wins At the Polls! /by @leena_joshi2015",
	"extended": "Redis won hands down as the top scoring software in the NoSQL database category and # 4 overall among all databases.",
	"meta": "c91f23a928210926eb38e906d6aa5238",
	"hash": "6ea0c4578060d3a8329aa21b649a5a7a",
	"time": "2015-09-18T08:24:00Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-nl-reading redis redis-poll"
  },
  {
	"href": "https://www.digitalocean.com/community/tutorials/how-to-back-up-your-redis-data-on-ubuntu-14-04",
	"description": "How To Back Up Your Redis Data on Ubuntu 14.04 /by @captainshar",
	"extended": "Read how to back up a Redis database on an Ubuntu 14.04 server using rdiff-backup and cron.",
	"meta": "559a0748262db795bb2885977bba5f2c",
	"hash": "caae871f075beaab6c8e8ee0b0a3df05",
	"time": "2015-09-18T08:20:01Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-backup redis-ubuntu"
  },
  {
	"href": "http://sorentwo.com/2015/09/15/migrating-redis-data.html",
	"description": "Migrating Redis Data /by @sorentwo",
	"extended": "Think of this post as a verbose migration constraint solver. It will start with the ideal means of migration and gradually add constraints. Eventually, it'll arrive at the last resort and see how to work with it.",
	"meta": "0c450183521b2c30dcab752f3ac396f4",
	"hash": "9f54f02a2057998838f9733ddce1e287",
	"time": "2015-09-18T08:13:09Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-migration redis-backup"
  },
  {
	"href": "http://blog.codeship.com/heroku-data-links-postgres-redis/",
	"description": "Heroku Data Links with Postgres and Redis /via @codeship",
	"extended": "PostgreSQL has a great feature called Foreign Data Wrappers (FDW) that allows it to connect directly to outside systems. Heroku has dramatically simplified the process of using FDW with PostgreSQL and Redis thanks to Data Links. Let’s try it out.",
	"meta": "8edee620a7d4576f8b2ca208326704a5",
	"hash": "9439f2c4862bcb086c05bd609f1e4fba",
	"time": "2015-09-16T16:18:39Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-nl-reading redis-postgresql redis-fdw redis"
  },
  {
	"href": "https://github.com/dwyl/learn-redis",
	"description": "learn-redis - Learn Redis! Beginners Tutorial using Node.js",
	"extended": "A really deep tutorial on how to start using Redis with NodeJS, full of links and ressources...",
	"meta": "4337d28f24a3474d37c3e1116f7b1f19",
	"hash": "7b45262e3a30f0d220dbeff7e95ea011",
	"time": "2015-09-14T15:12:47Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-nodejs redis-learn redis-docs"
  },
  {
	"href": "https://honza.ca/2015/09/building-a-redis-clone-in-haskell",
	"description": "Building a Redis clone in Haskell",
	"extended": "",
	"meta": "2d6de339a2b2a4554ddd97709e81f1dd",
	"hash": "9e03e24197901262a0c2292bea451362",
	"time": "2015-09-11T22:14:21Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-haskell"
  },
  {
	"href": "http://benwilber.github.io/nginx/syslog/redis/logging/static/blog/hit/counter/2015/08/31/hitcountme-live-website-popularity.html",
	"description": "Hitcount.me: Live Website Popularity",
	"extended": "How to use nginx, syslog-ng and redis to implement an automatic upvoting.",
	"meta": "69ac9cb039bd400989cb0d9db70c127d",
	"hash": "ea6e9d2fb133fbfafddc13e8964dba40",
	"time": "2015-08-31T19:41:58Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-nginx"
  },
  {
	"href": "http://antirez.com/news/92",
	"description": "About Redis Sets memory efficiency /by @antirez",
	"extended": "A nice post by Antirez about how Redis is optimized to store efficiently lists of number, strings, hashes and so on...",
	"meta": "9486f7936df615645b86b5f4eebd732f",
	"hash": "f6a25fadfc3c469d593a8c632bea8b1d",
	"time": "2015-08-29T16:37:44Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-nl-reading redis redis-set"
  },
  {
	"href": "https://www.compose.io/articles/why-and-how-to-redis-with-your-mongodb/",
	"description": "Why (and how to) Redis with your MongoDB",
	"extended": "",
	"meta": "f53f6422238d83fc794ea63798063a1f",
	"hash": "cab5b9bcc206b0fc7b780b194278c29a",
	"time": "2015-08-28T07:58:09Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://milhouseonsoftware.com/2015/07/27/writing-a-redis-client-in-pure-bash-part-1/",
	"description": "Writing a Redis client in pure bash, part 1 · Milhouse",
	"extended": "",
	"meta": "b0feeea95db7ff964ac554604086c74a",
	"hash": "34a15966829c55f186f2e272218da4e0",
	"time": "2015-07-30T17:09:10Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-bash redis-client"
  },
  {
	"href": "http://sorentwo.com/2015/07/27/optimizing-redis-usage-for-caching.html",
	"description": "Optimizing Redis Usage For Caching /by @sorentwo",
	"extended": "",
	"meta": "d0c1a21712b8b779e4ab3813bf45d5cd",
	"hash": "d4190ef7185d6d6f2750c3c916d8f621",
	"time": "2015-07-30T17:07:34Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cache"
  },
  {
	"href": "http://gigi.nullneuron.net/gigilabs/setting-up-a-connection-with-stackexchange-redis/",
	"description": "Setting up a Connection with StackExchange.Redis",
	"extended": "",
	"meta": "6a6451a4ff300deea4f5a823a3919037",
	"hash": "12b016624fa104e8e259223f1bfd6ae8",
	"time": "2015-07-20T07:41:47Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-net"
  },
  {
	"href": "http://www.nateberkopec.com/2015/07/15/the-complete-guide-to-rails-caching.html",
	"description": "Speed Up Your Rails App by 66% - The Complete Guide to Rails Caching",
	"extended": "Caching in a Rails app is a little bit like that one friend you sometimes have around for dinner, but should really have around more often. Nearly every Rails app that's serious about performance could use more caching, but most Rails apps eschew it entirely! And yet, intelligent use of caching is usually the only path to achieving fast server response times in Rails - easily speeding up ~250ms response times to 50-100ms.",
	"meta": "2f4815ac96f57241cf4ac5156b40d387",
	"hash": "5b62543ea2473aa07e809e29c3f3e06a",
	"time": "2015-07-20T07:41:20Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-rails redis-ruby redis-nl-reading redis"
  },
  {
	"href": "https://scotch.io/tutorials/building-a-real-time-markdown-viewer",
	"description": "Build a Real-Time Markdown Editor with Node.js",
	"extended": "",
	"meta": "a8efd09515df4b9c69727a11f13f5736",
	"hash": "b0c8cb244b8f6e9af0cfa2d6a77f9af5",
	"time": "2015-07-10T09:23:41Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-realtime redis-collaboration redis-nodejs redis-socket"
  },
  {
	"href": "https://medium.com/@stockholmux/redis-spop-culture-800cf306cbe6",
	"description": "Redis SPOP Culture",
	"extended": "Censored Lua vs Atomic Transactions with Node.js and Redis",
	"meta": "a869a3c96f1dd1b3b41de20672a1ed1a",
	"hash": "a97b7aee4eb8ed4d5795e7958d6fec64",
	"time": "2015-07-10T09:16:40Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-nl-reading redis-nodejs redis-atomic redis"
  },
  {
	"href": "http://engineering.bloomreach.com/the-evolution-of-fault-tolerant-redis-cluster/",
	"description": "The Evolution of Fault Tolerant Redis Cluster",
	"extended": "An article from BloomReach that is a massive user of Redis. They use it to store 16 billion URLs in their massive parallel crawlers in. They use it to store/compute Cassandra clients’ access rate for rate limiting purpose in another instance. And this article is focused on yet another particular application — real-time personalization, in which they use Redis to store in-session user activities.",
	"meta": "7a8d0f55ac0db14c01c59feefba5e9d9",
	"hash": "d27c87017066f842f7fda9c6a6ccd3c9",
	"time": "2015-06-26T08:12:24Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-scaling redis-cluster"
  },
  {
	"href": "http://blog.commando.io/redis-is-easy-trivial-hard/",
	"description": "Redis is easy. Redis is trivial. Redis is HARD!",
	"extended": "Single server Redis is easy, Primary/slave replication is trivial, Automatic service discovery and failover is HARD",
	"meta": "55e76e595dc3e8aa5189712dd63b7977",
	"hash": "e82dd644f1bf6a2ebd2f09b2b96ed1df",
	"time": "2015-06-26T08:04:18Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cluster"
  },
  {
	"href": "https://medium.com/@stockholmux/redis-set-node-23e1abe21faf",
	"description": "Redis, set, node - Finding sets with the same members in Redis with Node.js /by @stockholmux",
	"extended": "",
	"meta": "324fdadfeb59546f3976a3134349d269",
	"hash": "353645be5cf3126a26bf9060752af350",
	"time": "2015-06-19T06:10:26Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-nodejs redis-set"
  },
  {
	"href": "http://www.terlici.com/2015/06/15/redis-node-express.html",
	"description": "Using Redis as Your Main Superfast Persistent Database in Node & Express /by @fidanov",
	"extended": "",
	"meta": "569545820a30a5d144c44c1f15efa9b8",
	"hash": "a771ac3c393761cf4e7d02864efcb68b",
	"time": "2015-06-19T06:08:59Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-nodejs"
  },
  {
	"href": "http://www.aeracode.org/2015/6/17/beyond-request-response/",
	"description": "Beyond Request-Response /by @andrewgodwin",
	"extended": "Implementing a new pattern in Django, using Redis as a state repository.",
	"meta": "a6e489e379f476b6f74bb3862fbbe93d",
	"hash": "720e5516bbdea579b8408022bfeabeeb",
	"time": "2015-06-19T06:05:24Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-django redis-python"
  },
  {
	"href": "http://robertocalderon.ca/blog/flask-and-redis-is-fun/",
	"description": "Prototyping fun with Flask and Redis",
	"extended": "",
	"meta": "7c9fe26869b76f66db58f55414c77b8d",
	"hash": "34a75c54bf3c37275081267910123ed0",
	"time": "2015-06-19T06:01:40Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-flask"
  },
  {
	"href": "http://benmmurphy.github.io/blog/2015/06/09/redis-hot-patch/",
	"description": "Redis Hot Patch - Using the LUA vulnerability to patch itself /by @benmmurphy",
	"extended": "",
	"meta": "55c18b782f71b459451f0f552a34ae43",
	"hash": "93190cb98490077b286c6fc5c244e36d",
	"time": "2015-06-19T06:00:16Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lua redis-security"
  },
  {
	"href": "http://antirez.com/news/89",
	"description": "Plans for Redis 3.2 /by @antirez",
	"extended": "",
	"meta": "259476e656b699fa8ec58e24087e0261",
	"hash": "d42223cf1318f7bdad5f125e5c2d9c86",
	"time": "2015-06-13T16:34:06Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-release"
  },
  {
	"href": "https://vividcortex.com/blog/2015/06/05/parsing-redis-tcp-protocol/",
	"description": "Parsing the Redis TCP Protocol",
	"extended": "",
	"meta": "95928aaab2bacb4777afd40e4cc10e85",
	"hash": "5170041666634c8cb2bb10ab0e00f396",
	"time": "2015-06-12T20:30:46Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-protocol redis-nl-reading"
  },
  {
	"href": "https://medium.com/@stockholmux/untangling-redis-sort-results-with-node-js-and-lodash-4166584e7b86",
	"description": "Untangling Redis sort results with Node.js and lodash. /by @stockholmux",
	"extended": "Redis sort command result can be a PITA to use, this post explain how to use lodash.",
	"meta": "b04723b5efca38c0658728f16ff0f09b",
	"hash": "34620ad455111013cbfe6b640e36fb6f",
	"time": "2015-06-07T09:07:16Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-nodejs"
  },
  {
	"href": "http://opensolitude.com/2015/06/02/nifty-redis-tricks.html",
	"description": "Nifty redis tricks /by @jbgo",
	"extended": "Throttle alert emails, aggregate and flush metrics, lock operations",
	"meta": "a56a8f1325207afb3393564e8bde8818",
	"hash": "9cca202fabcf8281e5973d1801755d57",
	"time": "2015-06-07T09:03:07Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-throttling redis-lock redis-metrics redis-ruby"
  },
  {
	"href": "http://fnordig.de/2015/06/01/redis-sentinel-and-redis-cluster/",
	"description": "Redis Sentinel & Redis Cluster - what? /by @badboy_",
	"extended": "",
	"meta": "79888ee61987f3d5106d0a0ec72898ba",
	"hash": "e4365ab7dafe64c07bc0fe3778875fa8",
	"time": "2015-06-07T08:57:57Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-nl-reading redis"
  },
  {
	"href": "http://www.iamtherealbill.com/2015/05/sentinel-recovery/",
	"description": "Recovering A Sentinel Configuration",
	"extended": "Sentinel configuration and configuration management systems don't play well together, and neither do package management systems and the config file. As a result it is possible to have your sentinel configuration file wiped clean under a running sentinel. Here are some ways you might be able to recover your running configuration.",
	"meta": "177d9544e0db4103ad43c306d4fa22bd",
	"hash": "40ab25f21e8c7f212ccdc5818e8afa90",
	"time": "2015-05-28T18:01:34Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-sentinel redis-nl-reading redis"
  },
  {
	"href": "https://medium.com/@stockholmux/redis-express-and-streaming-with-node-js-and-classic-literature-d00f13368db3",
	"description": "Redis, Express and Streaming with Node.js and Classic Literature",
	"extended": "Node is fast. Redis is fast. Streaming is efficient.",
	"meta": "9cdab02ab9d49d47436ca9766c66b023",
	"hash": "1f4f234c103d40e36377c201be01a250",
	"time": "2015-05-28T18:00:05Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-nodejs"
  },
  {
	"href": "https://matt.sh/redis-architecture-diagram",
	"description": "Redis Architecure Diagram (April 2015) /by @mattsta",
	"extended": "Ever wonder what Redis internals look like? They look something like this diagram from Mattsta.",
	"meta": "31eeb74d60fff3b766d68f8d2d2767fd",
	"hash": "1c695b244048cebe3554ffc8d55e28ea",
	"time": "2015-05-28T17:50:01Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-architecture"
  },
  {
	"href": "https://www.airpair.com/javascript/posts/data-and-query-caching-using-redis",
	"description": "Faster Responses: Data and Query Caching using Redis /by @airpair",
	"extended": "",
	"meta": "abad912017d4bf7c43e1704448414592",
	"hash": "6658cc6ae4fd53f2a895065e92efae39",
	"time": "2015-05-24T17:15:20Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "https://github.com/citrusbyte/redis-comparison",
	"description": "redis-comparison - Redis benchmark against other databases",
	"extended": "Simple comparison: Redis vs. MongoDB vs. Riak. ",
	"meta": "b99d179d468f870176ddccae18704e61",
	"hash": "3295bba245584e8eebdf190d53eda372",
	"time": "2015-05-24T16:14:54Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-benchmark"
  },
  {
	"href": "http://bigeng.io/post/118963807718/recovering-redis-data-with-gdb",
	"description": "Really impressive writing // Recovering Redis Data with GDB /by @bigeng",
	"extended": "",
	"meta": "592e88995991df9453f80e5599f3335b",
	"hash": "d4cc594cc2c4410c2a0c1a20e8015123",
	"time": "2015-05-15T17:42:28Z",
	"shared": "no",
	"toread": "no",
	"tags": "fg redis redis-nl-reading"
  },
  {
	"href": "http://product.voxmedia.com/2015/4/30/8522041/adventures-with-docker-at-vox-product",
	"description": "Adventures With Redis PubSub, SSE and Docker At Vox Product",
	"extended": "",
	"meta": "7aa0c58df46c9b285d451b5d44f1fd50",
	"hash": "88f791b55d37a8227f991fa73c278eaa",
	"time": "2015-05-15T08:47:14Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-usecase"
  },
  {
	"href": "https://pushshift.io/twitter-ingest-status/",
	"description": "Using Redis as a Twitter Ingest buffer",
	"extended": "",
	"meta": "02ff5bc5edb7f12c2add5568318926b3",
	"hash": "d353c84aeed07743fb8b87ce9655effd",
	"time": "2015-05-15T08:44:27Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-twitter redis-buffer"
  },
  {
	"href": "https://medium.com/@stockholmux/keeping-track-of-account-subscriptions-with-redis-and-node-js-4c27e814553e",
	"description": "Keeping track of account subscriptions with Redis and Node.js /by @stockholmux",
	"extended": "",
	"meta": "f3597caea1d1258c17b89a65474c179f",
	"hash": "d42ca0f069d772886b3a097c266e1fa4",
	"time": "2015-05-15T08:41:21Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-nodejs redis-api"
  },
  {
	"href": "http://www.blrice.net/blog/2015/04/24/take-a-swim-in-the-connection-pool/",
	"description": "Take a Swim in the Connection Pool",
	"extended": "",
	"meta": "ce66bcbf43b0fa49dfcef05134116fe5",
	"hash": "eafdaa9511eb58a5ddea22c1e71fb8c2",
	"time": "2015-05-02T09:31:42Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://gigi.nullneuron.net/gigilabs/double-buffering-in-redis/",
	"description": "Double Buffering in Redis",
	"extended": "This article deals with a specific situation. You have a program that is continuously building a data structure from scratch. This data structure takes long (i.e. several seconds) to build, but is continuously accessed by clients. While it is being built, clients will end up retrieving partial data. ",
	"meta": "83717b5e3dacf2f2ac207feb579e3c6b",
	"hash": "31767c2ea110b3388280079aad7abd1d",
	"time": "2015-05-02T09:04:38Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "https://medium.com/@stockholmux/using-the-redis-multi-object-in-node-js-for-fun-and-profit-daf8cb62b86b",
	"description": "Using the Redis multi object in Node.js for fun and profit",
	"extended": "",
	"meta": "15bbeae713c4870590aefca72c744980",
	"hash": "c4c1d0aaf4dd852c35e537e1ce2656ff",
	"time": "2015-05-02T09:03:50Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-nodejs"
  },
  {
	"href": "http://soom.la/redis-hyperloglog",
	"description": "How we boosted counting performance by 7410x with Redis /by @gurdotan",
	"extended": "This is the second of a 2 part post about how Soomla improved query performance of their analytics dashboard by over 7000x. ",
	"meta": "268852a4136157c28dc61aa4442229f9",
	"hash": "c77f111ebfe430325facbbbd013f6a66",
	"time": "2015-04-27T12:36:45Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-performance redis-hyperloglog redis-mysql"
  },
  {
	"href": "https://medium.com/@stockholmux/store-javascript-objects-in-redis-with-node-js-the-right-way-1e2e89dbbf64",
	"description": "Store Javascript objects in Redis with Node.js the right way",
	"extended": "TL;DR: use redis hash + flatten object attributes",
	"meta": "4bcd1b41c908cf6b113d25b33756fc1f",
	"hash": "cc77d27177fbf24ff9349a078da2ba4c",
	"time": "2015-04-24T08:41:04Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-nodejs redis-object"
  },
  {
	"href": "https://medium.com/@stockholmux/dancing-around-strings-in-node-js-and-redis-2a8f91ebe0bf#8257--newNote",
	"description": "Dancing around strings in Node.js and Redis /by @stockholmux",
	"extended": "How to efficiently manage Redis key names in NodeJS/JavaScript",
	"meta": "ae9d80bb949ae80b9ca0a0bd13e377bb",
	"hash": "f145c671cb60e647c66812560bc767b3",
	"time": "2015-04-19T13:25:39Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nodejs redis-nl-reading"
  },
  {
	"href": "http://www.yzuzun.com/2015/04/some-architectural-design-concepts-for-redis/",
	"description": "Some Architectural Design Concepts For Redis",
	"extended": "",
	"meta": "3e35215480075c82561f9302d37b3a46",
	"hash": "6129002bc7dd87edefac4cc8d64f1226",
	"time": "2015-04-19T10:35:04Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://blog.soom.la/2015/04/installing-redis-master-slave-amazon-ec2.html",
	"description": "Installing Redis Master-Slave on Amazon EC2 /via @gurdotan",
	"extended": "... including semi-auto failover setup",
	"meta": "30d6a3a17b7da1a1d12f5bce4974157b",
	"hash": "a0b2b7d7d768f51bb2dbec9b57cbd1c3",
	"time": "2015-04-09T12:17:16Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://engineering.intenthq.com/2015/03/icicle-distributed-id-generation-with-redis-lua/",
	"description": "Distributed ID generation with Redis and Lua /by @nathankleyn",
	"extended": "Inteent is open-sourcing a distributed k-sortable ID generation project called “Icicle”, which generates IDs using Lua scripting within distributed Redis hosts.",
	"meta": "7387183aed382b9ea7a11906df7847ec",
	"hash": "b8b579e9238856fdc1d11723d34253cb",
	"time": "2015-04-02T17:41:28Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-id"
  },
  {
	"href": "http://anandmanisankar.com/posts/docker-container-nginx-node-redis-example/",
	"description": "A sample Docker workflow with Nginx, Node.js and Redis",
	"extended": "",
	"meta": "ee4ed2d65b335f9cc57677d5a8fa33d2",
	"hash": "5251cbb205958820b20234422b4ee0eb",
	"time": "2015-04-02T16:45:58Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-docker"
  },
  {
	"href": "http://lzone.de/Redis%20Performance%20Debugging",
	"description": "Redis Performance Debugging /by @llindnerr",
	"extended": "Simple hints on debugging Redis performance issues.",
	"meta": "9a9c030a8dcd3a4f6c90dbb69d4accac",
	"hash": "c1584b4a78e565e885cf3342d4a30626",
	"time": "2015-03-20T06:45:53Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-performance redis-nl-reading redis"
  },
  {
	"href": "http://thenewstack.io/why-the-redis-ecosystem-is-flourishing/",
	"description": "Why the Redis Ecosystem is Flourishing",
	"extended": "Redis continues to consolidate its market position as more applications seek to use the open source project as a data structure server for on-the-spot, real-time application processing.",
	"meta": "3354efd4b1c43db7e7ab65703e4e1fc9",
	"hash": "9d6e060bfa7124e92ceeef7f30413f71",
	"time": "2015-03-19T23:30:07Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-nl-reading redis redis-ecosystem redis-usecase"
  },
  {
	"href": "https://catdevmind.wordpress.com/2015/03/17/redis-development/",
	"description": "RedisConf 2015 - Matt Stancliff talk analysis /by @catdevmind",
	"extended": "This post is an analysis of the talk The Secrets Behind Redis Development by Matt Stancliff during RedisConf 2015.",
	"meta": "e518c0d75c6ea36f7c5f978c56da76eb",
	"hash": "c7f3c34f4614c1dbc0a455034e0a7221",
	"time": "2015-03-19T23:27:44Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-nl-reading redis"
  },
  {
	"href": "https://cloud.google.com/solutions/real-time/kubernetes-redis-bigquery",
	"description": "Real-time data analysis with Kubernetes, Redis, and BigQuery on Google Cloud Platform",
	"extended": "In this tutorial, you'll perform real-time data analysis of Twitter data using a pipeline built on Google Compute Engine, Kubernetes, Redis and BigQuery. This type of analysis has a number of useful applications, including: Performing sentiment analysis; Identifying general patterns and trends in data; Monitoring the performance and reach of campaigns; Crafting responses in real time.",
	"meta": "13e4734d0fb61dac2c63b46bab3d531d",
	"hash": "a9076a570f38c3f9f8a5704cb5f6ea2c",
	"time": "2015-02-20T06:46:08Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-nl-reading redis redis-kubernetes"
  },
  {
	"href": "https://charlesleifer.com/blog/building-markov-chain-irc-bot-python-and-redis/",
	"description": "Building a markov-chain IRC bot with python and Redis",
	"extended": "",
	"meta": "398945401c38a20386389a3acd492caf",
	"hash": "5a5d66d9a3443888162fd42094a57d95",
	"time": "2015-02-19T23:46:14Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-nl-reading redis redis-pyhon redis-markov-chain"
  },
  {
	"href": "http://product.reverb.com/2015/01/31/a-simple-priority-queue-with-redis-in-ruby/",
	"description": "A Simple Priority Queue With Redis in Ruby",
	"extended": "",
	"meta": "6fafb551d00f38bc71e4e8e6b389b3e4",
	"hash": "9c9c35451cc04c9cb8d1bca7cc567daa",
	"time": "2015-02-02T22:09:31Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-nl-reading redis-queue redis-ruby redis-priority-queue redis"
  },
  {
	"href": "http://www.corytaylor.ca/api-throttling-with-servicestack/?mkt_tok=3RkMMJWWfF9wsRonvKTJZKXonjHpfsX56uouWaWylMI%2F0ER3fOvrPUfGjI4DT8NjI%2BSLDwEYGJlv6SgFQ7HAMa5m3rgMWRk%3D",
	"description": "API Throttling with ServiceStack",
	"extended": "How to write a plugin to enable throttling on any of your .NET api endpoints. ",
	"meta": "6a02801a9b90b8f40c4aa7a48bcd8c2d",
	"hash": "d0772800f9f16edf1e005b2d81796e01",
	"time": "2015-01-30T09:23:55Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-rate-limiting redis-throttling redis-nl-reading"
  },
  {
	"href": "http://antirez.com/news/85",
	"description": "Why we don’t have benchmarks comparing Redis with other DBs /by @antirez",
	"extended": "",
	"meta": "58b2488debde7812b5456b8ecd039ea5",
	"hash": "816284b89fc90bc6ac259cfe265b866f",
	"time": "2015-01-30T08:19:01Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-benchmark"
  },
  {
	"href": "http://key-value-stories.blogspot.it/2015/01/redis-core-implementation.html",
	"description": "Redis core implementation analysis /by @leventov",
	"extended": "Roman Leventov posted an interesting analysis of Redis fundamental top-level data structures, memory management. There is also some light analysis of other aspects of the design, basically limited to stating that Redis is single threaded.",
	"meta": "a0942c5fc894f45f568fb889c0416b5a",
	"hash": "54dc172020b81d4be3e9daf123765092",
	"time": "2015-01-25T18:02:38Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-analysis"
  },
  {
	"href": "http://simulmedia.com/insights/blog/modifying-redis-fun-and-profit/",
	"description": "Modifying Redis for Fun and Profit /via @simulmedia",
	"extended": "Why Simulmedia engineering team forked Redis to improve ZUNIONSTORE performance. Nice use-case.",
	"meta": "141cb27b73745c5ecbf87f9e9e0eb7e3",
	"hash": "bc7452887ffe14a1fa3c03806c10524e",
	"time": "2015-01-21T11:18:10Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-usecase redis-fork"
  },
  {
	"href": "http://nacho-martin.com/a-better-pubsub-in-redis-with-erlang.html",
	"description": "A better PubSub with Redis in Erlang",
	"extended": "In this this post Nacho explains how to work with publish-subscribe pattern with Redis in Erlang using the recommended client eredis, the design restrictions it imposes, and how to overcome them.",
	"meta": "e606a7905881970b703f0ca69cda776a",
	"hash": "959a14b3519fcb8fb3935fca018168a7",
	"time": "2015-01-20T15:35:48Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-nl-reading redis redis-erlang redis-eredis"
  },
  {
	"href": "http://www.everybodyhertz.co.uk/creating-a-distributed-redis-setup-using-docker/",
	"description": "Creating a distributed Redis system using Docker /by @vcolonel",
	"extended": "",
	"meta": "fbeac58e6461a58f98592325f81e9d64",
	"hash": "f98a8eda4259b0f1a679e12bc8ead39e",
	"time": "2015-01-13T21:34:41Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "https://cloud.google.com/solutions/real-time-analysis/kubernetes-redis-bigquery",
	"description": "Real-time data analysis with Kubernetes, Redis, and BigQuery on Google Cloud Platform",
	"extended": "How to perform real-time data analysis of Twitter data using a pipeline built on Google Compute Engine, Kubernetes, Redis and BigQuery.",
	"meta": "0444e8c3643b6c61940961540c50ddcb",
	"hash": "3f2ffab2e366e386bdb3881a631f9022",
	"time": "2015-01-12T14:31:28Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://db-engines.com/en/blog_post/41",
	"description": "Db-engines - DBMS of the year",
	"extended": "TL;DR: 1/ Mongodb, 2/ Redis, 3/ Elasticsearch",
	"meta": "07f2fe7b11a0f50aa795d219832a1639",
	"hash": "c7915ef65f0467980228c6176d298623",
	"time": "2015-01-09T09:19:10Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://jimmyislive.tumblr.com/post/107077553355/exporting-data-from-aws-redis-elasticache",
	"description": "Are we there yet? — Exporting data from AWS Redis Elasticache",
	"extended": "",
	"meta": "503c35c4a4199200b9e47a2a9e5055cd",
	"hash": "7fc15af723e54e0c66f1c326743d56f3",
	"time": "2015-01-09T09:13:34Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-aws redis-elasticache"
  },
  {
	"href": "https://techusearch.com/blog/4/how-techu-leverages-redis",
	"description": "How Techu leverages Redis /by @techusearch",
	"extended": "",
	"meta": "e2b0da7ddaccfd99a5f81999f8fc04db",
	"hash": "60ba8d5d8fcaacf83677bd78e471f5bc",
	"time": "2014-12-14T20:02:51Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "https://gist.github.com/thomasdarimont/fff68191d45a001b2d84",
	"description": "PoC for approximating the median of a Stream via stochastic averaging in Redis with Lua",
	"extended": "",
	"meta": "d922bb9a602b0078e815a1016183d80d",
	"hash": "474da951f491e77a643263070c321ab0",
	"time": "2014-12-05T09:25:29Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lua redis-stream redis-statistics redis-median"
  },
  {
	"href": "https://redislabs.com/blog/5-methods-for-tracing-and-debugging-redis-lua-scripts",
	"description": "5 Methods For Tracing and Debugging Redis Lua Scripts /by @itamarhaber",
	"extended": "TL;DR : either use redis.log, return a lua table, send log to a redis list, publish log to pub/sub or use a lua debugger.",
	"meta": "1a4f1edac0edcd8f23ac975a1a366272",
	"hash": "9a0c6e7ab290d19937f394d2240ac5ce",
	"time": "2014-12-02T19:16:51Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lua"
  },
  {
	"href": "http://www.trikoder.net/blog/make-lua-debugging-easier-in-redis-87/",
	"description": "Make LUA debugging easier in Redis /by @trikoder",
	"extended": "Have you ever had trouble debugging Redis LUA script? After you read this post, all of that will change.",
	"meta": "42ff532744a24861d7bc50606df80d50",
	"hash": "25c4a137bcaf473ba044347b7e3be9fc",
	"time": "2014-12-02T19:14:00Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lua"
  },
  {
	"href": "http://shokunin.co/blog/2014/11/11/operational_redis.html",
	"description": "Running Redis in production /by @shokunin_co",
	"extended": "Redis is an excellent key/value cache that is used across many of Shokunin's customers. While redis is an great piece of software it is often difficult to obtain information about actually running it in production from an operational perspective. This article aims to discuss the necessary steps that ops teams should take before running redis in a production environment.",
	"meta": "98f53add11b52dcdb967ddb188c194f5",
	"hash": "16e1d9d47fea4f0beef97ca45d2b1ac9",
	"time": "2014-11-21T11:16:49Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-production redis-configuration"
  },
  {
	"href": "http://tylerstroud.com/2014/11/18/storing-and-querying-objects-in-redis/",
	"description": "Storing and Querying Objects in Redis – \"I think it might work\"",
	"extended": "A really quick introduction to Redis.",
	"meta": "0a62c8933cb3678a93480ea980fdec29",
	"hash": "685a83d79264c2e01a6a31fd82ad4f7a",
	"time": "2014-11-21T11:16:04Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "https://matt.sh/redis-quicklist",
	"description": "Redis Quicklist - From a More Civilized Age /by @mattsta",
	"extended": "Benchmarking linked list (fat) and ziplists (compact).",
	"meta": "9af5159394fa8afb7ca6a3ca332e25bc",
	"hash": "f3e3ecb718a6d22e0a26b113d98ad24a",
	"time": "2014-11-18T19:05:52Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-encoding redis-structure"
  },
  {
	"href": "http://www.binpress.com/tutorial/introduction-to-rate-limiting-with-redis-part-2/166",
	"description": "Introduction to rate limiting with Redis [Part 2] /by @dr_josiah",
	"extended": "The second part talk about and address some problems with the previous methods (from part 1), while also introducing sliding window functionality and-cost requests.",
	"meta": "c757bd01a7379c7ab6185c2ca39ee8c3",
	"hash": "50b3fd28c39290eba3eb79d9faa03773",
	"time": "2014-11-13T21:18:56Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-rate-limiting"
  },
  {
	"href": "http://fnordig.de/2014/11/11/review-redis-applied-design-patterns/",
	"description": "Review: Redis Applied Design Patterns /by @badboy_",
	"extended": "TL;DR : It's a bad idea to recommend this book.",
	"meta": "1f7f129baeb2c4b331b439679ca88c05",
	"hash": "6ba22805d47510ab8c144d75cbeb2d28",
	"time": "2014-11-11T11:48:00Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-review redis-book"
  },
  {
	"href": "http://engineering.objectrocket.com/2014/11/04/thoughts-redis-performance/",
	"description": "Thoughts on Redis Performance - ObjectRocket Blog /by @ucntcme",
	"extended": "TL;DR : Don't slow down Redis. Two metrics are key : ops/sec and command latency. Use LUA only when necessary.",
	"meta": "816280d13f7187146f70dcfc7ed7bc65",
	"hash": "0f79a7e78593ae963a5dc9352216c802",
	"time": "2014-11-10T20:45:57Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-performance"
  },
  {
	"href": "http://fr.slideshare.net/robfrankie/redis-40964451",
	"description": "Redis for duplicate detection on real time stream",
	"extended": "Caching + Atomic Counters + Atomic LUA scripting.",
	"meta": "a2ef7588917a8a2f2ff43326dbb1b3e5",
	"hash": "a350706bf47b0cccb0aaf07b32ef5e1e",
	"time": "2014-11-07T10:04:51Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-duplicate"
  },
  {
	"href": "http://willschenk.com/how-to-track-your-coworkers",
	"description": "How to track your coworkers",
	"extended": "... using ping and redis.",
	"meta": "ac528509b3adc90e5d19cc3f10971c4e",
	"hash": "45313b5c03ff6f59778aaa7280b1b87d",
	"time": "2014-11-07T10:03:06Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-ping"
  },
  {
	"href": "http://code.tutsplus.com/tutorials/multi-instance-nodejs-app-in-paas-using-redis-pubsub--cms-22239",
	"description": "Multi-Instance Node.js App in PaaS Using Redis Pub/Sub",
	"extended": "",
	"meta": "beb9245bb7d1397d31d57d59793b203e",
	"hash": "a07b5d0bda771ee84954cc8dc2f68d6f",
	"time": "2014-11-07T09:57:40Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-paas redis-pubsub"
  },
  {
	"href": "http://es.slideshare.net/eugef/redis-persistence-in-practice-1",
	"description": "Redis persistence in practice /by @EugeneFidelin",
	"extended": "Practical advices on how to achieve persistence in Redis. Detailed overview of all cons and pros of RDB snapshots and AOF logging. Tips and tricks for proper persistence configuration with Redis pools and master/slave replication.",
	"meta": "978af761e544fe608d8668f486348fa3",
	"hash": "6715adba5cbd30881a5aed3f3116dfc2",
	"time": "2014-11-02T10:20:29Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-persistence"
  },
  {
	"href": "http://antirez.com/news/81",
	"description": "Diskless replication: a few design notes",
	"extended": "Antirez notes on Redis diskless replication: how replication used to work, serving multiple slaves at the same time, handling partial failures and how this feature will change Redis in a deep way.",
	"meta": "86339c5f4315b47ad61b6dbc8996c648",
	"hash": "b4b5214e7fb23f645225533c1009cc1b",
	"time": "2014-10-31T09:54:30Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-replication"
  },
  {
	"href": "http://kronometrix.blogspot.fi/2014/10/raspberry-pi-and-redis.html",
	"description": "Kronometrix: Raspberry Pi and Redis",
	"extended": "Yep, they made it work on Raspberry PIs.",
	"meta": "23693467245b52449c3dfc5018f0038c",
	"hash": "b5e828b09c2e686d78917ff2322ac901",
	"time": "2014-10-31T09:49:40Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-raspberrypi"
  },
  {
	"href": "http://mac-dev-env.patrickbougie.com/redis/",
	"description": "Redis — Compiling a Web Development Environment on Mac OS X Yosemite",
	"extended": "",
	"meta": "014e46c743eecf1e46d54fbf86840bdb",
	"hash": "82d36dc3a3df4fa6b8e384ab90700905",
	"time": "2014-10-31T09:47:47Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-compiling"
  },
  {
	"href": "https://redislabs.com/blog/new-redis-cloud-clusters-with-regular-expression-sharding",
	"description": "NEW: Redis Cloud Clusters with Regular Expression Sharding",
	"extended": "RedisLabs announced regular expression support for customizing Redis key sharding.",
	"meta": "bda62a127df242eac11a33748ff69644",
	"hash": "c86a5dbf02d50481b8ce9f49ab798501",
	"time": "2014-10-31T09:46:04Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cluster redis-sharding"
  },
  {
	"href": "http://www.cheatography.com/tasjaevan/cheat-sheets/redis/#comment29724",
	"description": "Redis Cheat Sheet /by @tasjaevan",
	"extended": "",
	"meta": "2671cad414356c5dae36c69dad6caf87",
	"hash": "36d314b16b9e6807f257c0c4bf699bfa",
	"time": "2014-10-23T14:28:22Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-cheatsheet redis redis-nl-reading"
  },
  {
	"href": "http://danielstjules.com/2014/08/05/benchmarking-redisgreen-a-redis-hosting-service/",
	"description": "Benchmarking RedisGreen: A Redis Hosting Service /by @danielstjules",
	"extended": "",
	"meta": "4f9ceb99c96054084941d23ebd183533",
	"hash": "237df57e2c68d186979fee5b1c6d872a",
	"time": "2014-10-20T17:16:26Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-redisgreen"
  },
  {
	"href": "http://www.trikoder.net/blog/make-lua-debugging-easier-in-redis-87/?mkt_tok=3RkMMJWWfF9wsRonvaXKZKXonjHpfsX56uouWaWylMI%2F0ER3fOvrPUfGjI4DTcJgI%2BSLDwEYGJlv6SgFQ7HAMa5m3rgMWRk%3D",
	"description": "Make LUA debugging easier in Redis",
	"extended": "Have you ever had trouble debugging Redis LUA script? After you read this post, all of that will change.",
	"meta": "225a0e3e3abd4a6942a02ec142b58d45",
	"hash": "bdc8e053a53676def60b6810c474187f",
	"time": "2014-10-16T22:20:37Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lua"
  },
  {
	"href": "http://www.binpress.com/tutorial/introduction-to-rate-limiting-with-redis/155",
	"description": "Introduction to rate limiting with Redis [Part 1] /by @dr_josiah",
	"extended": "This two-part tutorial intends to cover two different but related methods of performing rate limiting in Redis using standard Redis commands and Lua scripting. Each method expands the number of use-cases for rate limiting, and cleans up some of the rougher edges of previous rate limiters.",
	"meta": "62c6d493d086512afbf047739f713b07",
	"hash": "5d5e44a00f49edcdecf305b253f11272",
	"time": "2014-10-16T22:08:17Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-rate-limiting redis-python redis-lua"
  },
  {
	"href": "http://www.agileweboperations.com/supporting-millions-of-pretty-url-rewrites-in-nginx-with-lua-and-redis",
	"description": "Supporting Millions of Pretty URL Rewrites in Nginx with Lua and Redis",
	"extended": "Because file based, nginx rewrites were becoming a performance bottleneck...",
	"meta": "53e3ca68a9b8bc9bc292b51b4a227ed3",
	"hash": "46d52b9398a7e6472ceff2525c529c6a",
	"time": "2014-10-16T07:32:07Z",
	"shared": "no",
	"toread": "no",
	"tags": "fg redis redis-nl-reading redis-nginx redis-lua"
  },
  {
	"href": "http://www.infoworld.com/article/2825890/application-development/why-redis-beats-memcached-for-caching.html",
	"description": "Why Redis beats Memcached for caching",
	"extended": "Redis is more powerful and more flexible and usually the right choice, but Memcached still has its place.",
	"meta": "797828f7633ceb1dac0fbb7258e8ec92",
	"hash": "6ed5ee173602908e291cb925b43a42b0",
	"time": "2014-10-15T11:03:36Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-memcached"
  },
  {
	"href": "http://sametmax.com/redis-pourquoi-et-comment/",
	"description": "[Fr] Redis : pourquoi et comment ? /by @sam_et_max",
	"extended": "(In french) Introduction à Redis en français",
	"meta": "0bc93874ecec6d241e3cafc61c4336c7",
	"hash": "d454e28ad4e5bbf38b9e808aee50768f",
	"time": "2014-10-14T12:26:16Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-fr"
  },
  {
	"href": "http://weblogs.asp.net/scottgu/azure-redis-cache-disaster-recovery-to-azure-tagging-support-elastic-scale-for-sqldb-docdb",
	"description": "Azure: Redis Cache, Disaster Recovery to Azure, Tagging Support, Elastic Scale for SQLDB, DocDB",
	"extended": "Microsoft Azure had some great enhancements recently one of them is Azure Redis Cache. The Azure Redis Cache service provides the ability for you to use a secure/dedicated Redis cache, managed as a service by Microsoft.",
	"meta": "f76f61f17a244c6b5980cf7e243778ec",
	"hash": "877659f8303dd26350785ec2fc9c72c1",
	"time": "2014-10-08T09:48:01Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cache redis-microsoft redis-azure"
  },
  {
	"href": "https://redislabs.com/blog/redis-developers-day-october-2nd-2014-london#.VDLyhSl_s9w",
	"description": "Report from last week's Redis Developers Day",
	"extended": "A nice sum up by the guys from Redis Labs of the Redis event in Pivotal offices.",
	"meta": "438a6c43720821ca82520727de462b83",
	"hash": "00a8639d44f9c6e779a80f3812ad225c",
	"time": "2014-10-06T19:56:32Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-event"
  },
  {
	"href": "http://labs.opendns.com/2014/10/01/redesigning-dns-database-low-latency/?mkt_tok=3RkMMJWWfF9wsRonvaTKZKXonjHpfsX56uUsUaeylMI%2F0ER3fOvrPUfGjI4DTMthI%2BSLDwEYGJlv6SgFQ7HAMa5m3rgMWRk%3D",
	"description": "Speeding up a DNS database with Redis",
	"extended": "",
	"meta": "0490969bf18c9608cee3746301f86f50",
	"hash": "74790151ca85c1d8464eb569ad15f25c",
	"time": "2014-10-03T09:37:24Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "https://redislabs.com/blog/redis-running-slowly-heres-what-you-can-do-about-it#.VC1i7yl_s9w",
	"description": "Redis Running Slowly? Here’s What You Can Do About it",
	"extended": "Itamar Haber from Redis Labs explain what to look at when fixing a slow Redis server.",
	"meta": "2cf40648c631f90ed95f7a29e135e389",
	"hash": "ff4c98ed5817386e854dedc2c64090f1",
	"time": "2014-10-02T17:43:01Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-slowlog"
  },
  {
	"href": "https://engineering.groupon.com/2014/misc/optimizing-redis-storage/",
	"description": "Optimizing Redis Storage at Groupon from 96GB to 9GB /by @drbobbeaty",
	"extended": "TL;DR: They switched from using KEYS to HASHES (more more memory efficient) and used EXPIRE. CPU Usage doubled but memory dropped.",
	"meta": "b5ca556fcf28694396f67b86384774e7",
	"hash": "180766238e3f2f838b3e24ccbb673a2f",
	"time": "2014-09-25T15:47:11Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-usecase redis-feedback redis-groupon redis-optimization"
  },
  {
	"href": "http://www.redisgreen.net/blog/missing-keys-on-redis-slave/",
	"description": "\"Missing\" Keys on Redis Slaves /by @rad_fax",
	"extended": "If you use expiring (also known as “volatile”) keys in Redis, you may be in for a surprise when you attach a new Redis slave to your Redis master: the key count on your slave may be up to 25% lower than the key count on your master. This post simply explains why.",
	"meta": "3a5bc04eb9c64e076c78db6490a43efb",
	"hash": "0988808adeda78a201268ae6311d6c96",
	"time": "2014-09-23T19:49:26Z",
	"shared": "no",
	"toread": "no",
	"tags": "fg redis redis-nl-reading"
  },
  {
	"href": "http://www.tobez.org/presentations/2011-NPW-redis.html#1",
	"description": "Replacing Relational DB with Redis: a Case Study /by @tobez",
	"extended": "How Anton replaced the backend storage of a DHCP server with Redis.",
	"meta": "73f48db3a7c0e12536b96c70a81ba71b",
	"hash": "e003936c79ca203fc68531982cb990cb",
	"time": "2014-09-21T18:14:58Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-dhcp redis-modelisation"
  },
  {
	"href": "http://screen6.github.io/blog/2014/09/18/lua-scripts-in-redis-within-nodejs.html",
	"description": "Building a tree-like structure that propagates it changes to all parents with LUA, Redis & Node",
	"extended": "Deep article about managing a tree-like structure in Redis with LUA, from implementation to unit-testing.",
	"meta": "30fcf44822298a62387f49812f1db15b",
	"hash": "35e5dc5ecbb57e8d30698336289f86f2",
	"time": "2014-09-18T14:03:56Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-tree redis-lua"
  },
  {
	"href": "http://mattbell.me/distributed-rate-limiting-with-redis/",
	"description": "Distributed Rate Limiting With Redis /by @mattbell",
	"extended": "Rate limiting with Redis and Python using a key and an expire.",
	"meta": "d009c5591f5748e49632bf3c34e511dc",
	"hash": "610e5526b51ff9563e1f93b82c703a65",
	"time": "2014-09-10T13:05:11Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-python redis-rate-limiting"
  },
  {
	"href": "http://joeywhelan.blogspot.fr/2014/08/synchronization-constructs-with-node.html",
	"description": "Synchronization Constructs with #NodeJS + Redis",
	"extended": "How to create basic synchronization objects using a combination of Node and Redis:  semaphores, mutex locks, condition variables, and by a combination of locks and conditions - monitors.",
	"meta": "923b574bdcaaa733a7d91de9785fa08a",
	"hash": "23f5bf21e069722da1fa2efa48a22943",
	"time": "2014-09-10T13:02:59Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis fg redis-nl-reading redis-synchronization locking"
  },
  {
	"href": "http://highscalability.com/blog/2014/9/8/how-twitter-uses-redis-to-scale-105tb-ram-39mm-qps-10000-ins.html",
	"description": "How Twitter Uses Redis to Scale - 105TB RAM, 39MM QPS, 10,000+ Instances",
	"extended": "A summary of Yao Yo talk on how Twitter uses Redis at scale. Yao Yo is core Infrastructure at Twitter Inc.",
	"meta": "85e9c611b092a420004196d2a6322bd9",
	"hash": "5d3d7bc05e6f3c8dace068e385b9883e",
	"time": "2014-09-08T20:02:12Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-twitter"
  },
  {
	"href": "https://medium.com/brigade-engineering/high-availability-sidekiq-with-redis-sentinel-2c562e65ecd2",
	"description": "High availability Sidekiq with Redis Sentinel /by @johnthrall",
	"extended": "Setting up a Sidekiq queue tolerant of Redis failure has never been easier. This post will help you get your Ruby application connecting properly so you can reap the uptime benefits.",
	"meta": "7c8cb9eadf3a3b3d5ef18817b287fd34",
	"hash": "9a14985f58067ece581e0c77596fbdbc",
	"time": "2014-09-02T19:57:33Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-sentinel redis-ruby"
  },
  {
	"href": "http://128bit.io/2014/08/31/RPC-using-Redis/",
	"description": "RPC using Redis /by @amscotti",
	"extended": "",
	"meta": "9e48062470fc225912b5de930f24aeb2",
	"hash": "2e8fe791f3b5751da7ffe47ed7279480",
	"time": "2014-09-02T12:06:11Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-rpc"
  },
  {
	"href": "http://code.flickr.net/2014/07/31/redis-sentinel-at-flickr/",
	"description": "Redis Sentinel at Flickr | code.flickr.com",
	"extended": "Flickr recently implemented Redis Sentinel to provide automated Redis master failover for an important subsystem and they wanted to share their experience with it.",
	"meta": "9f4498d53004d9ad11a6026c39b8a618",
	"hash": "143b525bd12fd70490c131100fa37d42",
	"time": "2014-08-31T07:52:54Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-sentinel"
  },
  {
	"href": "https://www.openshift.com/blogs/how-to-use-redis-on-openshift-from-your-ruby-application",
	"description": "How to use Redis on OpenShift from your Ruby application",
	"extended": "",
	"meta": "96a83ab9534fd7ce6f1aa21eaf44dc31",
	"hash": "ac913e6dadf13fd55446b74c095a3eb5",
	"time": "2014-08-29T10:37:05Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://eggie5.com/52-ruby-rails-redis-friends-followers-system",
	"description": "Ruby/Rails/Redis Friends/Followers System",
	"extended": "A single-level follow/following/friends system using redis implemented using ruby.",
	"meta": "11b356161719e6c807c6f180c2a61e45",
	"hash": "cafb88cb80feac2ab601d121ea9eb1a0",
	"time": "2014-08-29T10:36:38Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-followers"
  },
  {
	"href": "http://blog.oestrich.org/2014/08/sqs-via-redis/",
	"description": "Local SQS development with Redis /by @EricOestrich",
	"extended": "(Ruby) Mock SQS interface with Redis underneath.",
	"meta": "3e49e8c9100f1c268aca1e78fe7b99a6",
	"hash": "5e97fa20c94ab05bdf357291f7ab2d3c",
	"time": "2014-08-29T10:31:32Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-sqs redus-mq"
  },
  {
	"href": "http://engineering.eventbrite.com/heavy-hitters-in-redis/",
	"description": "Heavy Hitters in Redis /by @evbeng",
	"extended": "How to keep track of your most active IP Addresses, API Keys or User IDs using SpaceSaving algorithm.",
	"meta": "32630ffeab414080178f994002450df3",
	"hash": "a4b6d1a70195b929126a9ba43eb4f3b9",
	"time": "2014-08-29T10:22:36Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-algorithm"
  },
  {
	"href": "http://www.pubnub.com/blog/redis-replication-multi-data-center-nodejs/",
	"description": "Multiple Data Center Redis Replication with NodeJS /by @PubNub",
	"extended": "This tutorial walks you through a proof-of-concept for global, multi data center Redis replication of data using PubNub and NodeJS.",
	"meta": "b83cbeea3af240de856f5305c022298b",
	"hash": "c57ba1c82e60b784c999c6551db6dd5b",
	"time": "2014-08-29T10:16:32Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-replication"
  },
  {
	"href": "http://www.symantec.com/connect/blogs/configuring-redis-high-availability",
	"description": "Configuring Redis High Availability",
	"extended": "This article describes how to configure active-passive high availability(HA) for a group of Redis instances without using Redis Cluster.",
	"meta": "4e784fbed59300e663415519982382b9",
	"hash": "9962813716124ae4ffd1c7a1d89b919e",
	"time": "2014-08-29T10:15:29Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-ha redis-high-availability"
  },
  {
	"href": "http://harish11g.blogspot.ae/2014/08/art-of-architecting-highly-scalable-available-elasticache-redis-tier.html",
	"description": "Art of Architecting scalable ElastiCache Redis tier /by @harish11g",
	"extended": "How to design large scale Redis tiers supporting billions of messages per day on AWS.",
	"meta": "7d7184d7bbcbcdb43c69f2b8d46b2ea9",
	"hash": "d120782a61f9a6d9a4461b3c662c26f1",
	"time": "2014-08-29T06:58:55Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-elasticache redis-nl-reading"
  },
  {
	"href": "http://blog.al4.co.nz/2014/08/safely-running-bulk-operations-on-redis-with-lua-scripts/",
	"description": "Safely running bulk operations on Redis with lua scripts",
	"extended": "...using scan.",
	"meta": "789d159b6a9c34b198ccaa25266b46d2",
	"hash": "3ee957e3b7a35aa3f40863a57f579284",
	"time": "2014-08-28T21:54:29Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://skipperkongen.dk/2013/08/27/how-many-requests-per-second-can-i-get-out-of-redis/",
	"description": "How many requests per second can I get out of Redis?",
	"extended": "A little benchmark with redis-benchmark tool.",
	"meta": "0d03c7f254d618c824bc5931780e030c",
	"hash": "08e375ff4cba4b2d2a07e8310b82d7b3",
	"time": "2014-08-27T08:25:52Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-benchmark"
  },
  {
	"href": "http://www.kdelemme.com/2014/08/16/token-based-authentication-with-nodejs-redis/",
	"description": "Token based Authentication with Nodejs & Redis",
	"extended": "How @kdelemme build its own token based Authentication mechanism with Nodejs and Redis to protect its end points API.",
	"meta": "3e63798ecf6b6d4f15e4f1e0e0e4629b",
	"hash": "3b9b984aa56686292f0cd6407503b669",
	"time": "2014-08-22T08:21:48Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-token redis-authentication redis-nodejs"
  },
  {
	"href": "http://joeywhelan.blogspot.be/2014/08/synchronization-constructs-with-node.html?mkt_tok=3RkMMJWWfF9wsRonva3JZKXonjHpfsX97uosT%2Frn28M3109ad%2BrmPBy%2B0YoJWp8na%2BqWCgseOrQ8mV0NV86zWM0RqK0%3D",
	"description": "Synchronization Constructs with Node + Redis",
	"extended": "How to create the following basic synchronization objects using a combination of Node and Redis:  semaphores, mutex locks, condition variables, and by a combination of locks and conditions - monitors.",
	"meta": "b6163a74ed108cdec0505364a297a5d2",
	"hash": "518107b495ef54cf26df24d7226ede4d",
	"time": "2014-08-22T08:21:07Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-semaphore redis-lock redis-condition"
  },
  {
	"href": "http://blog.al4.co.nz/2014/08/safely-running-bulk-operations-on-redis-with-lua-scripts/?mkt_tok=3RkMMJWWfF9wsRonva3JZKXonjHpfsX97uosT%2Frn28M3109ad%2BrmPBy%2B0YoJWp8na%2BqWCgseOrQ8mV0NV86zWM0RqK0%3D",
	"description": "Safely running bulk operations on Redis with lua scripts",
	"extended": "... using lua script + SCAN.",
	"meta": "0c4fe4ac7310cc294397dfc45dfb3d54",
	"hash": "e55c40eab1f460d059c2c6c05493f3b0",
	"time": "2014-08-22T08:15:00Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://abstractvisitorpattern.co.uk/2014/08/brooklyn-and-nodejs-applications.html",
	"description": "Deploy a nodejs and redis application using Brooklyn Central /by @grkvlt",
	"extended": "This post will show how Apache Brooklyn can be used to deploy and manage Node.JS applications. ",
	"meta": "5a560a659bf068e9c86cbaab4c3c1ec0",
	"hash": "b0e22ce8c190aea4c91599261ff27c80",
	"time": "2014-08-21T20:59:16Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://www.infoq.com/news/2014/08/flickr-sentinel-redis",
	"description": "Flickr Chooses Sentinel for Highly Available Redis",
	"extended": "Flickr recently announced that they have deployed Sentinel to provide automated Redis failover in their offline task processing subsystem despite worries about its consistency.",
	"meta": "81789a45eca51ba8b620eaf4e3b9e0be",
	"hash": "c9dcd7149d18e8cc9afbf0091d61ab2a",
	"time": "2014-08-17T20:57:25Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://redislabs.com/blog/5-tips-for-running-redis-over-aws",
	"description": "5 Tips for Running Redis over AWS",
	"extended": "Here are a few tips which will help you save time, money, and achieve better Redis performance within AWS, in general.",
	"meta": "b9f54fbe6cccc04bea8246787817360c",
	"hash": "4aef69f5d489e8e38b0cff01d076441b",
	"time": "2014-08-15T20:07:07Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-tips"
  },
  {
	"href": "http://www.rackspace.com/blog/objectrocket-adds-fully-managed-redis-service/",
	"description": "ObjectRocket Adds Fully-Managed Redis Service /by @rackspace",
	"extended": "Rackspace launches managed Redis service by Object Rocket.",
	"meta": "c4dcf60d2f2969bf4412205c63049de6",
	"hash": "55f1ad9beca798cb6d130fa8b17f2eff",
	"time": "2014-08-14T15:30:21Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-rackspace"
  },
  {
	"href": "http://highscalability.com/blog/2014/8/11/the-easy-way-of-building-a-growing-startup-architecture-usin.html",
	"description": "The Easy Way of Building a Growing Startup Architecture Using HAProxy, PHP, Redis and MySQL to Handle 1B req/week",
	"extended": "A post that shows the way Octivi developed a quite simple architecture based on HAProxy, PHP, Redis and MySQL that seamlessly handles approx 1 billion requests every week.",
	"meta": "d07fecc81a8177787a9e12ec031d0d8b",
	"hash": "43297f6d5002cfd566bff2233d0e4dbe",
	"time": "2014-08-11T16:53:20Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-scaling"
  },
  {
	"href": "http://eng.bronto.com/2014/07/30/reliable-queueing-in-redis-part-1/",
	"description": "Reliable Queueing in Redis (Part 1)",
	"extended": "This post is the first in a series highlighting Bronto’s use of Redis for reliable queueing. ",
	"meta": "db9f58e2982a83fb981eb578e61152ac",
	"hash": "a4e99f3cf8f4965bf6bc1e72dfee7375",
	"time": "2014-08-10T08:58:41Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-queue"
  },
  {
	"href": "http://redislabs.com/blog/top-redis-headaches-for-devops-client-buffers#.U9v76YB_s9w",
	"description": "Top Redis Headaches for Devops – Client Buffers",
	"extended": "",
	"meta": "86bd5b6868ba3c3b3c9594e1471647ab",
	"hash": "3d3c1d1e428992e5a203494ab46807a5",
	"time": "2014-08-01T20:46:19Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://fnordig.de/2014/07/27/extending-redis-with-lua-packages/?mkt_tok=3RkMMJWWfF9wsRonvqTIZKXonjHpfsX97uosT%2Frn28M3109ad%2BrmPBy%2B0YUHWp8na%2BqWCgseOrQ8mV0NV86zWM0RqK0%3D",
	"description": "Extending Redis with Lua packages",
	"extended": "An experimental approach for loading any Lua library from inside Redis.",
	"meta": "e0470d8299f40bad6b581eb6f0739dac",
	"hash": "3db40f69d5e871fdeed1aa66a1cd42ea",
	"time": "2014-08-01T08:31:02Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lua"
  },
  {
	"href": "http://devandpencil.herokuapp.com/blog/2014/07/27/me-and-redis-are-now-friends/?mkt_tok=3RkMMJWWfF9wsRonvqTIZKXonjHpfsX97uosT%2Frn28M3109ad%2BrmPBy%2B0YUHWp8na%2BqWCgseOrQ8mV0NV86zWM0RqK0%3D",
	"description": "Me and Redis are now Friends",
	"extended": "How to use friendis, a ruby gem for implementing a social graph over Redis.",
	"meta": "e05d34b461f8481d53bc5a9fe5aab866",
	"hash": "43d42e6df2b555a1569ff9f6e021b0b1",
	"time": "2014-08-01T08:30:08Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://labs.octivi.com/handling-1-billion-requests-a-week-with-symfony2/",
	"description": "Handling 1 Billion requests a week with Symfony2 with Redis /by @octivi",
	"extended": "Some says that Symfony2, as every complex framework, is a slow one. Octivi answer is that everything depends on you ;-) In that post, they reveal some software architecture details of a Symfony2 based application running more than 1 000 000 000 requests every week.",
	"meta": "0d590b02b90a1c7175c396f2f43b2975",
	"hash": "92ffce9272e2b5d7d5a42a42b43d9689",
	"time": "2014-07-22T10:29:03Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-symfony"
  },
  {
	"href": "https://groups.google.com/forum/#!msg/redis-db/qqZckM2tUKo/09fppdh0MzkJ",
	"description": "Redis 2.8.13",
	"extended": "Low upgrade urgency, first stable version with latency monitor and new COMMAND command that provides informations about available commands.",
	"meta": "901cfe7be9d08719280001892d489e61",
	"hash": "fb6598ddad5f0f2aa6db74363c159b5c",
	"time": "2014-07-15T09:31:53Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-release redis redis-nl-reading"
  },
  {
	"href": "http://stdout.tradier.com/development/2014/07/10/using-lua-to-implement-multi-get-on-redis-hashes.html",
	"description": "Using Lua to implement multi-get on Redis hashes /by @tradier",
	"extended": "",
	"meta": "d06f5d486e36acede13de809e70e5e45",
	"hash": "bfefe8b8226aab2bb077f9282edf109f",
	"time": "2014-07-10T15:33:12Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-multi-get redis-hashes"
  },
  {
	"href": "http://opensourcehacker.com/2014/07/09/rolling-time-window-counters-with-redis-and-mitigating-botnet-driven-login-attacks/",
	"description": "Rolling time window counters with Redis and mitigating botnet-driven login attacks /by @moo9000",
	"extended": "This blog posts presents rolling time window counting and rate limiting in Redis.",
	"meta": "aa71ca19c646354a4ef8954cfdaaba7b",
	"hash": "037868fcb83d4f8d195548e6f1d06907",
	"time": "2014-07-09T15:53:09Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-window-counters redis-rolling-time-window"
  },
  {
	"href": "http://www.matheuslima.com/simple-news-feed-with-redis-sorted-sets/",
	"description": "Simple news feed with Redis Sorted Sets /via @matheusml",
	"extended": "A lot of web applications (independently if they are big or small) nowadays, have something similar to a news feed. A great tool to help you build fast ones, is Redis. In this post, Matheus shows how to make a simple one, using Redis with Ruby on Rails.",
	"meta": "534c7a78917055649878c767c235191a",
	"hash": "713e063052777e746e84153143c32992",
	"time": "2014-07-07T16:37:22Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-newsfeed"
  },
  {
	"href": "http://www.redisgreen.net/blog/reading-and-writing-redis-protocol/",
	"description": "Reading and Writing Redis Protocol in Go",
	"extended": "In this post, Tyson Tate outline a simple, easy to understand implementation for two components of a Redis client in Go as a way of understanding how the Redis protocol works and what makes it great.",
	"meta": "5f81573947067dcd6ac024d6b4f36381",
	"hash": "86e187b1287fb388592309e91de7c136",
	"time": "2014-07-07T16:26:21Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-go redis redis-nl-reading"
  },
  {
	"href": "http://redislabs.com/blog/top-redis-headaches-for-devops-replication-buffer",
	"description": "Top Redis Headaches for Devops",
	"extended": "This series of installments will highlight some of the most irritating issues that come up when using Redis, along with tips on how to solve them. They are based on our real-life experience of running thousands of Redis database instances.",
	"meta": "484c6aaeae7e1f26d47ac20f1306af57",
	"hash": "25aa57905032641cb7393f8f3b3ec586",
	"time": "2014-07-04T13:36:18Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://qunsul.com/redis_part1.html",
	"description": "Customizing Redis - Adding Graphs - Part 1",
	"extended": "",
	"meta": "b1d86c636d1460637c446396f368cdfa",
	"hash": "f9fa50ddbaa416fda7f14fc144fd6401",
	"time": "2014-06-30T08:17:04Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-graph"
  },
  {
	"href": "http://www.hanselman.com/blog/TryingRedisCachingAsAServiceOnWindowsAzure.aspx",
	"description": "Trying Redis Caching as a Service on Windows Azure",
	"extended": "",
	"meta": "7f044903bf6c53e7e44fe63aa57056e5",
	"hash": "24aae3599e10c87de8bd09e2e5dcf270",
	"time": "2014-06-27T08:59:12Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://redis4you.com/articles.php?id=012",
	"description": "Redis high traffic connection issue fix /via @BornCor",
	"extended": "An old article from Redis4You on how to mitigate a TCP TME_WAIT issue when dealing with a redis server with high traffic.",
	"meta": "e2f8c0d625da5bb1a8d12792006dd688",
	"hash": "40b3f95598775bd42ff90139ee417c33",
	"time": "2014-06-12T16:10:03Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-tcp"
  },
  {
	"href": "https://matt.sh/redis-benchmark-compilers",
	"description": "Improve Redis performance using only your compiler /by @mattsta",
	"extended": "These benchmarks were a test to see if different optimization options can give us a higher performing Redis without any additional coding.",
	"meta": "a613dd4bd0121d0f4f9c78ac2f041de9",
	"hash": "211223598b4b602c8b84f2a9712ae1fc",
	"time": "2014-06-09T10:35:32Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-performance"
  },
  {
	"href": "https://blog.recurly.com/2014/05/clustering-redis-maximize-uptime-scale/",
	"description": "Clustering redis to maximize uptime and scale",
	"extended": "How Recurly used Redis to power website caching, queuing and some application data storage. ",
	"meta": "c3a33bb1fb77671a22d2e9dc5cbce407",
	"hash": "da4fef24717ce72883539965952e018a",
	"time": "2014-06-01T20:23:06Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "https://github.com/bilus/redis-bitops",
	"description": "redis-bitops - Sparse bitmaps with human-readable expression syntax for Redis",
	"extended": "This gem makes it easier to do bit-wise operations on large Redis bitsets, usually called bitmaps, with a natural expression syntax. It also supports huge sparse bitmaps by storing data in multiple keys, called chunks, per bitmap.",
	"meta": "a2ea37ae02e472afdfa0e22762a2db75",
	"hash": "1e4a9c8f41c5cf06ab1385f2417a43e1",
	"time": "2014-05-30T08:09:36Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-bitmaps"
  },
  {
	"href": "https://blog.starkandwayne.com/2014/05/22/demo-of-a-manual-failover-of-redis-cluster-atop-of-consulconfd/",
	"description": "Demo of a manual failover of redis cluster atop of consul/confd /by @drnic",
	"extended": "",
	"meta": "760551ab6df4800e7c86c1f46791cbf4",
	"hash": "ad54accca16c12d299fbbfab76389ef4",
	"time": "2014-05-27T15:51:40Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cluster redis-failover"
  },
  {
	"href": "http://www.kdelemme.com/2014/05/12/use-redis-to-revoke-tokens-generated-from-jsonwebtoken/",
	"description": "Use Redis to revoke Tokens generated from jsonwebtoken /by @kdelemme",
	"extended": "",
	"meta": "1dd08cc0c6bf11eebd294a4646415c80",
	"hash": "c23b61cda13c77f55bb4b43253d2f4ba",
	"time": "2014-05-26T11:03:14Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-nodejs"
  },
  {
	"href": "http://redislabs.com/blog/how-to-use-redis-at-least-x1000-more-efficiently#.U4GubZR_s9y",
	"description": "How to Use Redis at Least x1000 More Efficiently/by @RedisLabsInc",
	"extended": "... using Hyperloglog and lexicographical ordering.",
	"meta": "3102d59b283078216302ded9d00aa4b9",
	"hash": "37c80250b8fec65fb44224463ad70c1e",
	"time": "2014-05-25T08:49:09Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-hyperloglog"
  },
  {
	"href": "http://k33g.github.io/2014/05/22/PLAYING-WITH-REDIS.html",
	"description": "[French] Redis et les HashMaps /by @k33g_org",
	"extended": "Découverte de Hash Redis en Java puis en Golo.",
	"meta": "f03cfeb6a1b44f7209559a62a9c7130f",
	"hash": "ed58a5d9d423e1f48b353a71965e8402",
	"time": "2014-05-23T06:43:06Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-java redis-golo"
  },
  {
	"href": "http://highscalability.com/blog/2014/5/19/a-short-on-how-the-wayback-machine-stores-more-pages-than-st.html",
	"description": "The Wayback Machine uses Redis for their metadata API /via @itamarhaber",
	"extended": "",
	"meta": "e0abf0098c5884160d5c1f629a786905",
	"hash": "12a6c9f07bf7066965e815aa1424d8eb",
	"time": "2014-05-20T08:07:40Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis-usecase redis redis-nl-reading"
  },
  {
	"href": "http://antirez.com/news/77",
	"description": "A proposal for more reliable locks using Redis /by @antirez",
	"extended": "Can we have a fast and reliable system at the same time based on Redis? This blog post is an exploration in this area. Antirez try to describe a proposal for a simple algorithm to use N Redis instances for distributed and reliable locks.",
	"meta": "f411456d3be01148542938001c160c53",
	"hash": "e7c2328e522740d60dec2c6570a15a98",
	"time": "2014-05-16T12:50:29Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lock"
  },
  {
	"href": "http://weblogs.asp.net/scottgu/archive/2014/05/12/azure-vm-security-extensions-expressroute-ga-reserved-ips-internal-load-balancing-multi-site-to-site-vpns-storage-import-export-ga-new-smb-file-service-api-management-hybrid-connection-service-redis-cache-remote-apps-and-more.aspx",
	"description": "New Azure Redis Cache Service /via @scottgu",
	"extended": "Microsoft is announcing a new, secure, dedicated Redis cache.",
	"meta": "4ba833bc4c86f3281ceb1061100f939d",
	"hash": "1c750b7b00f4058f0f9e4f10b978f643",
	"time": "2014-05-14T17:24:00Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://cramer.io/2014/05/12/scaling-sql-with-redis/",
	"description": "Scaling SQL with Redis /by @zeeg",
	"extended": "How to scale Sentry, specifically with Redis.",
	"meta": "578f744522242c869859d635dcd60547",
	"hash": "cd928aa3c1508f537eadc7072536c7bf",
	"time": "2014-05-13T12:46:19Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-sql redis-scaling redis-nl-reading redis-rate-limiting"
  },
  {
	"href": "http://humantalks.com/talks/414-introduction-a-redis",
	"description": "[French][Talk] Human Talks Nantes : Introduction à Redis",
	"extended": "I will give a talk on Redis at Human Talks Nantes. The slides will be shared in the next RedisWeekly!",
	"meta": "e0ca85205337ae1ff976e5399e8b741d",
	"hash": "a964c47f4314a07acb6bd7bc5a82aea5",
	"time": "2014-05-09T07:48:45Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-nl-talk"
  },
  {
	"href": "http://maori.geek.nz/post/publish_subscribe_with_redis_using_ruby",
	"description": "Become a Publisher with Redis and Ruby /by @grahamjenson",
	"extended": "how to use Redis PubSub functionality in Ruby.",
	"meta": "9d9eaff29bc6e4ee33db03c7ba6fb404",
	"hash": "18c6d72b15a2cff42a14ccc3015c6445",
	"time": "2014-05-06T19:00:15Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-pubsub redis-ruby"
  },
  {
	"href": "http://kellabyte.com/2014/04/22/improving-the-protocol-parsing-in-redis/",
	"description": "Improving the protocol parsing performance in Redis /by @kellabyte",
	"extended": "",
	"meta": "f472b88a129621da52693b379b12e39b",
	"hash": "944ac338915ca66c6995262d223841bf",
	"time": "2014-04-23T08:13:22Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-protocol"
  },
  {
	"href": "http://blog.hadrien.eu/2014/04/21/redis-cest-de-la-bombe/",
	"description": "[Fr] Redis, c'est de la bombe /by @hadrienl",
	"extended": "Un tour d'horizon de Redis en français.",
	"meta": "76acd7e904529571dd09390e8576fbb6",
	"hash": "38b96736cda405417d93cdd84d83f987",
	"time": "2014-04-22T13:37:32Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://qiita.com/yoh-nak/items/fce5417ebbf613d436f1",
	"description": "[For our japanese friends] RedisのCRUD",
	"extended": "",
	"meta": "bcb5ba9b7bb3e53d6b761d0b048e431f",
	"hash": "77026a5e820c3f1b7abc06cb8996af7b",
	"time": "2014-04-21T08:52:53Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://autocomplete.redis.io/",
	"description": "Autocomplete of entire Linux kernel using Redis's new ZRANGEBYLEX",
	"extended": "This demo autocompletes the query field using all the 8 millions of unique lines of the Linux kernel source code as autocompletion dictionary.",
	"meta": "c6477f6a4ba8e23d37628259194dd7ee",
	"hash": "9c43bc9f6aec3ba3eccd1330ecd4d1d7",
	"time": "2014-04-21T08:47:05Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-autocomplete redis-zrangebylex"
  },
  {
	"href": "http://blogduyax.madyanne.fr/haute-disponibilite-avec-redis.html",
	"description": "[French] Haute Disponibilité avec Redis",
	"extended": "Comment monter un cluster Redis hautement disponible avec Redis Sentinel.",
	"meta": "abcd6a4a954b297f40c0670ac61df3bb",
	"hash": "80c6a0a4a888db23bd803c3f2e5066a0",
	"time": "2014-04-16T07:35:33Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-sentinel redis-cluster"
  },
  {
	"href": "http://www.emergent-design.co.uk/blog/2014/04/15/if-memory-serves/",
	"description": "The endless possibilities of Redis /by @teadriven",
	"extended": "How Emergent Design used Redis as the backbone of an image processing framework.",
	"meta": "638d77280ad76b9b88f252c1ec66eb9b",
	"hash": "1e23e2b9917a56042dd50db6fa91ac63",
	"time": "2014-04-15T16:55:14Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://dojo4.com/blog/using-redis-with-sensitive-information",
	"description": "Using redis with sensitive information /by @dojo4",
	"extended": "How to configure Redis to not write any data to disk.",
	"meta": "58c8bfe242ca50b63d3da205326520d5",
	"hash": "c5e5d182935cdaa3ef945214e94fc412",
	"time": "2014-04-15T14:08:40Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://www.marshut.com/ityshy/redis-as-a-key-value-store-for-the-intermediate-results-of-disco-map-reduce-jobs.html",
	"description": "Redis as a key-value store for the intermediate results of Disco map-reduce jobs",
	"extended": "The outputs of each task can be stored in redis or read from redis using the redis_inter_stream_[out|in] streams.",
	"meta": "b926691acc4899603fc0eb0ea5c51bf6",
	"hash": "44a132f8e75e7580c291474ea81d8fa4",
	"time": "2014-04-11T08:15:05Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-mapreduce"
  },
  {
	"href": "http://antirez.com/news/75",
	"description": "Redis new data structure: the HyperLogLog /by @antirez",
	"extended": "Antirez introduces a new data structure to Redis: HyperLogLog, a randomized algorithm that provide an approximation of the number of unique elements in a set using just a constant, and small amount of memory.",
	"meta": "98cc1ea2579d16dbe43b6567200881d1",
	"hash": "a969cb66bee94bcc99b44d2ba534bca1",
	"time": "2014-04-01T12:21:45Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading fg"
  },
  {
	"href": "http://dev.mikamai.com/post/81281769803/redis-api-caching-a-simple-use-case",
	"description": "Redis API caching: A simple use case /by @intinig",
	"extended": "How Giovanni Intini added a cache layer to ruby-lol, a ruby wrapper to Riot Games API.",
	"meta": "17bff451e30195b41556c7c23a639274",
	"hash": "ce91c809f50d3f01cb06da4b60cf6355",
	"time": "2014-03-31T13:46:48Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-ruby redis-caching redis-nl-reading"
  },
  {
	"href": "https://matt.sh/advanced-redis-command-loading",
	"description": "Advanced Redis: Adding Custom Commands /by @mattsta",
	"extended": "Matt Stancliff explains all the path a developer can follow to add custom commands into Redis. ",
	"meta": "72597ea1aa448cf076bc3d95700f7483",
	"hash": "50055eabea8b814ca589e17e3ca001d5",
	"time": "2014-03-29T12:04:51Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-commands"
  },
  {
	"href": "https://gist.github.com/ruyrocha/9781172",
	"description": "[Benchmark] Redis performs better through a Unix socket on localhost /by @ruyrocha",
	"extended": "",
	"meta": "a7564a75d9d8d13098853938a2190eb9",
	"hash": "e410bb9559ef6e6c506efb0d60e19ebf",
	"time": "2014-03-26T14:21:53Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-benchmark"
  },
  {
	"href": "http://www.toptal.com/django/django-flask-and-redis-sharing-user-sessions-between-frameworks",
	"description": "Django, Flask, and Redis: Sharing User Sessions Between Frameworks",
	"extended": "",
	"meta": "93f6bf4eefd2544c157c6682dc939102",
	"hash": "633baf5eb38375335102f6c585f14b02",
	"time": "2014-03-24T16:51:15Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-django redis-flask"
  },
  {
	"href": "http://tech.vasily.jp/2014/03/redis-sortedset-zinterstore-usage-and-internal/",
	"description": "[For our Japanese friends] Redis SortedSet型のZINTERSTOREの使い道とその内部実装 /via @mirakui",
	"extended": "",
	"meta": "7efaf260fcea4416fe9b1f9cc9262b2c",
	"hash": "e3e57dee3cc2d095aee7607dbc02c266",
	"time": "2014-03-18T14:19:19Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://torusware.com/increase-redis-performance-by-up-to-250/",
	"description": "Increase Redis performance by up to 250% /by @torusware",
	"extended": "A simple PoC that shows how with the use of software acceleration of communications can improve performance by up to 250% without any ad-hoc optimization.",
	"meta": "6f833b15e1ecd13c34b29dbf683b17ef",
	"hash": "f57ef6d063de7edfee8c928d521c28df",
	"time": "2014-03-17T20:50:57Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-performance redis-torus"
  },
  {
	"href": "http://grosser.it/2014/03/14/locking-insights-an-alternative-to-redis-set-nx-ex-memcache-add/",
	"description": "Locking insights: an alternative to redis set nx ex / memcache add /by @grosser",
	"extended": "A lock that does not timeout can lead to a standstill and requires manual cleanup.",
	"meta": "26cce05f884d71bc5af8f272a7ac6cf4",
	"hash": "2e4f7f1df850ffabf401575c856cfc51",
	"time": "2014-03-14T16:16:03Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://marcgravell.blogspot.co.uk/2014/03/beware-jamming-thread-pool.html",
	"description": "Beware jamming the thread pool /by @marcgravell",
	"extended": "By Marc Gravell from Stack Exchange.",
	"meta": "b00eddd4005abd2a5c69392357a3b82d",
	"hash": "d2b693d50b1100e7d7ae9d846763208e",
	"time": "2014-03-13T14:01:54Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-aspnet"
  },
  {
	"href": "https://funnel.hasgeek.com/redis-miniconf-2014/",
	"description": "[Conference] Redis Miniconf (Bangalore, India)",
	"extended": "",
	"meta": "273f05469baf9f2e941d54a2395767ff",
	"hash": "cb609ecf59cf6107691bc1e760dbc23b",
	"time": "2014-03-04T12:08:34Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-nl-conference"
  },
  {
	"href": "http://code.hootsuite.com/redis-memcachedmysql-for-team-assignments/",
	"description": "How Hootsuite migrated Team Assignments from memcached/mysql to redis",
	"extended": "",
	"meta": "4b6bef7ea2de6ed27fb3379e3c7360e9",
	"hash": "f15220638036795c2d232c17de80d8c7",
	"time": "2014-03-02T20:11:01Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-memcached"
  },
  {
	"href": "http://marcgravell.blogspot.fr/2014/02/playing-with-redis-cluster-for-non.html",
	"description": "Playing with redis-cluster for non-linux-gods, step by step",
	"extended": "A step by step tutorial on how to get Redis Cluster working.",
	"meta": "dd0242fdc13a3c5eda536f5dee4be712",
	"hash": "28b1d0e15792c25ed75d25777bde141c",
	"time": "2014-02-28T16:48:24Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cluster"
  },
  {
	"href": "http://stackoverflow.com/questions/22023538/is-it-possible-to-run-a-string-injection-attack-on-a-redis-query",
	"description": "Is it possible to run a string injection attack on a redis query? TL;DR: No.",
	"extended": "",
	"meta": "68bb3cbd7096e699744ae581c69f4836",
	"hash": "4fa968ffd1eda6bc7f75ad8332fdee10",
	"time": "2014-02-27T10:28:41Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-attack"
  },
  {
	"href": "http://lucaguidi.com/2014/02/26/redis-scripting-with-mruby-pt1.html",
	"description": "Redis Scripting with MRuby /by @jodosha",
	"extended": "Really interesting article on how to add MRuby scripting to Redis by adding a \"reval\" command.",
	"meta": "7784e150f91c543c4489f0d51ca4c778",
	"hash": "c3dc80d368a7b9adc35f8274e9dd39a2",
	"time": "2014-02-26T16:12:27Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-mruby"
  },
  {
	"href": "http://www.thegeekstuff.com/2014/02/phpredis/",
	"description": "How to Use Redis with PHP using PhpRedis with Examples /by @thegeekstuff",
	"extended": "This tutorial covers step by step how to configure phpredis and how to use it. It then  and explains its frequently used methods.",
	"meta": "d8bd99c175269b3a12820a97254665c2",
	"hash": "8cc99db0ead297446c999fe4332e9cb6",
	"time": "2014-02-22T12:44:24Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-php"
  },
  {
	"href": "http://fuzzyrecall.wordpress.com/2014/02/20/redis-and-floats-on-lua-scripts/comment-page-1/#comment-18",
	"description": "Redis and floats on Lua scripts. /by @t_glider",
	"extended": "There is an issue with float conversion between Redis and Lua...",
	"meta": "8c858ee2b364d58df2c08e99e22458e2",
	"hash": "ffa99d8f0c1fb3f4cf3613c7d6f2a229",
	"time": "2014-02-21T08:48:21Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lua"
  },
  {
	"href": "http://www.roguelazer.com/2013/12/a-rant-on-redis/",
	"description": "A Rant on Redis ... with a detailed comment from @antirez, Redis Creator",
	"extended": "A Rant on Redis disk persistence, replication, HA and maxmemory default setting.",
	"meta": "1dd49da9d306ea42542bce2e4f01149d",
	"hash": "8fa9dcc6fa02e59f07b17532b935d043",
	"time": "2014-02-20T09:58:34Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-rant"
  },
  {
	"href": "http://gists.fritzy.io/2014/02/14/archive-redis-to-riak",
	"description": "Archive Redis to Riak /by @fritzy /via @itamarhaber",
	"extended": "Redis is nice for dealing with data as it is relevant and changing, but once it goes a little stale, you probably want to archive it to free up resources. Wouldn’t it be nice to be able to archive it and still be able to query it?",
	"meta": "e0e480935f6a1790f4215db41568e2d8",
	"hash": "92101e20020f6f17ce60431bf562949f",
	"time": "2014-02-18T11:10:13Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-riak redis-backup"
  },
  {
	"href": "http://blog.mjrusso.com/2010/10/17/redis-from-the-ground-up.html",
	"description": "Old but awesome for starters: Redis, from the Ground Up /via @tareksamni",
	"extended": "A deep dive into Redis' origins, design decisions, feature set, and a look at a few potential applications.",
	"meta": "5cb5dab986ca485bf8a64533e27b4651",
	"hash": "c977f1b9744145af3ae61cc511bb6a0c",
	"time": "2014-02-15T16:42:36Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-noob redis-introduction"
  },
  {
	"href": "http://redislabs.com/signup-gce-lp1",
	"description": "Redis Cloud free 1GB beta on @googlecloud",
	"extended": "",
	"meta": "2e44b791b179573f934bee295e03d58c",
	"hash": "61e59ec9880c9d1d2de6254cb271c841",
	"time": "2014-02-12T15:27:20Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://labs.octivi.com/how-we-cut-down-memory-usage-by-82/",
	"description": "How we cut down memory usage by 82% in our cluster from 340GB to 60GB /by @octivi",
	"extended": "RAM memory in comparison to disk storage is not so cheap. Having big Redis cluster could lead to some expenses on such memory. Octivi share some optimizing techniques on how to reduce memory consumption.",
	"meta": "31648993b52c769bfbf1328f75644e20",
	"hash": "38c1629c256681d319b8a649481f0d85",
	"time": "2014-02-11T20:51:57Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cluster redis-memory-usage"
  },
  {
	"href": "http://www.justinweiss.com/blog/2014/02/09/how-should-my-rails-app-talk-to-redis/",
	"description": "How should my Rails app talk to Redis? /by @justinweiss",
	"extended": "While you’re writing your Rails app, you might run into a problem that you could solve more easily with a different data store. For example, you might have a leaderboard that ranks users by the number of points they got for answering questions on your site. With Redis Sorted Sets, a lot of the implementation is done for you. Awesome! But where do you put the code that interacts with Redis?",
	"meta": "363e31dc76c5aa5b66287a4d6d2952bb",
	"hash": "d7e387d4ec8435bdebb7ffff74c27b86",
	"time": "2014-02-11T20:49:24Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-ruby"
  },
  {
	"href": "http://www.hvflabs.com/posts/redis-master-slave-on-docker",
	"description": "How to setup a Redis Master-Slave on Docker",
	"extended": "",
	"meta": "1191d778200a876eb5aa21e26e8d5605",
	"hash": "5a921f811d56a0e4107a766486d3431d",
	"time": "2014-02-07T08:25:35Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-docker"
  },
  {
	"href": "https://callhub.io/blog/2014/02/03/distributed-rate-limiting-with-redis-and-celery/",
	"description": "Distributed Rate Limiting using Redis, LUA and Celery",
	"extended": "",
	"meta": "e956ea6c41ef7ebef50b10ac99c610d4",
	"hash": "46a66b81de8a01445d9c3c47bb63ee85",
	"time": "2014-02-07T08:21:10Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-rate-limiting redis-lua"
  },
  {
	"href": "http://harish11g.blogspot.in/2014/02/Backup-and-launch-ElastiCache-redis-using-snapshots-in-AWS.html",
	"description": "ElastiCache Redis : How to Backup & Launch from RDB Snapshots ? /by @harish11g",
	"extended": "ElastiCache Redis is a powerful KV store offering both in-memory and persistent store for Key Values. By default there is no option to easily create the snapshot from the running ElastiCache Redis cluster. This post explains the step by step method on how to backup and launch Redis cluster snapshot.",
	"meta": "17c845e3aad3aa6f5f97de974ef95e7b",
	"hash": "f8419fbd8c42f08097068271af142aa4",
	"time": "2014-02-07T08:16:30Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cluster redis-elasticache"
  },
  {
	"href": "http://www.javacodegeeks.com/2014/01/simple-message-queue-using-redis.html",
	"description": "Simple Message Queue using Redis and Java /by @fjunior87",
	"extended": "",
	"meta": "cd0f3d1ad4e28a58ac58d6c2a894c8b4",
	"hash": "b3cac6a2d2d7cec3686d9b4a66180648",
	"time": "2014-01-30T14:02:20Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-mq redis-queue redis-java"
  },
  {
	"href": "http://redislabs.com/blog/3rd-time-is-a-charm-garantia-data-is-now-redis-labs",
	"description": "Garantia Data Is Now Redis Labs",
	"extended": "",
	"meta": "77484b8592b87d4d291bf23b8e3df24f",
	"hash": "559686291d82be660a67b32a2204fd8d",
	"time": "2014-01-29T14:58:21Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-garantiadata"
  },
  {
	"href": "http://qbolec-memdump.blogspot.fr/2014/01/counting-unique-items-in-sliding-window.html",
	"description": "Counting unique items in sliding window using Redis and HyperLogLog algorithm /via @artur_ejsmont",
	"extended": "This article starts from giving intuitions behind LogLog algorithm, then shows how to change it to support \"sliding window\" queries, then how to do that for HyperLogLog algorithm, and finally presents a working implementation using Redis.",
	"meta": "3bf7e4711236f0e220680ab0d1592a7a",
	"hash": "a6ef66131b37d625ebd6aee56365cae2",
	"time": "2014-01-26T11:18:55Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-hyperloglog"
  },
  {
	"href": "http://www.codeproject.com/Articles/715967/Running-Redis-as-a-Windows-Service",
	"description": "Running Redis as a Windows Service /via @codeproject",
	"extended": "A step by step tutorial on how to run the Window version of Redis Server as a Windows service.",
	"meta": "ca7fba2e5532f9d58dc41bdd60ef8ae4",
	"hash": "cf6928a18431176e5e9a024feb64a7c7",
	"time": "2014-01-26T09:09:27Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-windows"
  },
  {
	"href": "http://haishibai.blogspot.fr/2014/01/walkthrough-setting-up-redis-cluster-on.html",
	"description": "Walkthrough: Setting up a Redis cluster on Windows Azure",
	"extended": "How to create a Redis cluster with one master and one slave using openSUSE Virtual Machines on Windows Azure.",
	"meta": "d5c8f3c2cefa923a42cce46724fdb9f4",
	"hash": "ce94334fbcd2a1fea7b7d6b9eaafc86d",
	"time": "2014-01-24T11:20:32Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cluster redis-azure"
  },
  {
	"href": "http://harish11g.blogspot.in/2014/01/Creating-Elasticache-redis-replication-cluster-inside-amazon-vpc-guide-tutorial.html",
	"description": "Cloud, Big Data and Mobile: Architecting Highly Available ElastiCache Redis replication cluster in AWS VPC /by @harish11g",
	"extended": "How to architect and create a Highly Available + Scalable Redis Cache Cluster for your web application in AWS VPC.",
	"meta": "a5e5e69fe26cc7ef2e4385ea6fa6bd27",
	"hash": "30835fe54506cffadf4fd3e7594798c6",
	"time": "2014-01-21T10:22:22Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cluster redis-aws"
  },
  {
	"href": "http://antirez.com/news/70",
	"description": "Redis Cluster and limiting divergences /by @antirez",
	"extended": "How Redis Cluster, as an asynchronous system, tries to limit divergences between nodes?",
	"meta": "bba35df8f1d57edcc90aec55e0f038bf",
	"hash": "81009f5e5bd341db66dd12e6fe62d288",
	"time": "2014-01-21T09:32:27Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cluster"
  },
  {
	"href": "http://shivganesh.com/2014/01/15/rdis/#comment-58",
	"description": "A little overview of Redis configuration options",
	"extended": "",
	"meta": "d163b502e0d50cd01abb09f07a6cae53",
	"hash": "6dc83bfe2a079ed89672d653b2cb0794",
	"time": "2014-01-18T18:30:45Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://blog.carbonfive.com/2014/01/17/using-redis-sorted-sets-to-build-a-scalable-real-time-web-waiting-list/",
	"description": "Using Redis sorted sets to build a scalable real-time web waiting list /by @sivoh",
	"extended": "This post describes a scalable waiting list implementation (with a working demonstration project) built around Redis sorted sets.",
	"meta": "b4ceffbd45f31d6eb07e872b3e890888",
	"hash": "f847c2d6e7411049af0363a5838b2c9e",
	"time": "2014-01-18T11:07:12Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-sortedset redis-realtime"
  },
  {
	"href": "http://it-tna.com/2014/01/14/redis-nosql-first-dont-succeed-try-try/",
	"description": "Redis NoSQL: If At First You Don't Succeed, Try, Try Again!",
	"extended": "In-Memory Computing market expected to grow from $2.21 billion in 2013 to $13.23 billion in 2018, at a CAGR of 43",
	"meta": "091497210240b856acfd29a615c3dc11",
	"hash": "943ba478b39a3bab3ad2c59b4600276b",
	"time": "2014-01-14T15:02:24Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-analysis redsmin-market"
  },
  {
	"href": "http://sysphere.org/~anrxc/j/archives/2014/01/11/load_balancing_redis_and_mysql_with_haproxy/index.html",
	"description": "Load balancing Redis and MySQL with HAproxy /via @fosnss",
	"extended": "",
	"meta": "120d0e9fa599a5c810f823920d27cf6d",
	"hash": "02eccd6dfccbe3b89f89ab47af6f5228",
	"time": "2014-01-12T09:02:15Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-haproxy"
  },
  {
	"href": "http://blog.yanted.com/2014/01/07/keyspace-events-in-redis-2-8/",
	"description": "Keyspace-Events in Redis 2.8 #german /by @yantedhq",
	"extended": "A glipse at Redis 2.8 keyspace events notifications. The article is written in german (go go gadget google translate).",
	"meta": "528c3be6d2d4ad5867dde132c8cbb66b",
	"hash": "3c942de2c85185a70610c553a155ad92",
	"time": "2014-01-07T15:16:09Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-keyspace-events"
  },
  {
	"href": "http://www.9lessons.info/2014/01/getting-started-with-redis-chatting.html",
	"description": "Getting Started with Redis, Chatting Application",
	"extended": "How to build a chat app on Redis Ubuntu/Windows/Mac with PHP using Redis list.",
	"meta": "97482cc45716e5f57eae07555d81ccdf",
	"hash": "1a16adaf2eac16d945a9527a90e562ea",
	"time": "2014-01-06T15:07:26Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-php"
  },
  {
	"href": "http://developer.rackspace.com/blog/redis-benchmark-and-rackspace-performance-vms.html",
	"description": "Redis Benchmark & Rackspace Performance VMs /by @rackspace",
	"extended": "",
	"meta": "d33ef919e55f886bd31dfb06392e6668",
	"hash": "acc8ec758554aad4841e7677141d87dd",
	"time": "2014-01-05T10:58:31Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-rackspace"
  },
  {
	"href": "http://blog.exceliance.fr/2014/01/02/haproxy-advanced-redis-health-check/",
	"description": "HAProxy advanced Redis health check /by @exceliance",
	"extended": "Learn how to make a simple Redis infrastructure thanks to newest HAProxy advanced send/expect health checks. This feature is available in HAProxy 1.5-dev20 and above. Purpose is to make the redis infrastructure as simple as possible and ease fail over for the web servers. HAProxy will have to detect which node is MASTER and route all the connection to it.",
	"meta": "0686bae240c51c6a94e26abe6989797d",
	"hash": "933aaee5b0959862b9a6db7b167687f3",
	"time": "2014-01-02T20:31:46Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-ha redis-haproxy"
  },
  {
	"href": "http://garantiadata.com/blog/garantia-data-opens-shop-in-aws-us-west-apac-data-regions#.UsXMN2TuLjF",
	"description": "Garantia Data Opens Shop in AWS US West Oregon and APAC Singapore /via @garantiadata",
	"extended": "",
	"meta": "47d687f92cb74f0625eccea2a21f4543",
	"hash": "2b743fbd8d2a02e0f2b81051314733d3",
	"time": "2014-01-02T20:30:43Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-garantiadata"
  },
  {
	"href": "http://aphyr.com/posts/309-knossos-redis-and-linearizability",
	"description": "Knossos: Redis and linearizability /by @aphyr",
	"extended": "Aphyr answer to Antirez response. In the post aphyr talks about linearizability and how Knossos (a tool to identify whether or not a history of events from a concurrent system is linearizable) helps to verify if a system is linearizable or not.",
	"meta": "b98a97217415e0e8f6482226474e9cfd",
	"hash": "8d7eb5d1f8be0e3aeec61763f0bf6a2f",
	"time": "2013-12-23T09:26:59Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cluster"
  },
  {
	"href": "https://github.com/OptimalBits/bull",
	"description": "bull - A NodeJS persistent job and message queue based on Redis /via @_kud /by @manast",
	"extended": "A lightweight, robust and fast job processing queue. Designed with stability and atomicity in mind. The API is inspired by Kue. It uses redis for persistence, so the queue is not lost if the server goes down for any reason.",
	"meta": "f1723d67f52485bfab5e816b0314e743",
	"hash": "81be6b2cd264ad871f6112883eb44a30",
	"time": "2013-12-19T13:45:54Z",
	"shared": "no",
	"toread": "no",
	"tags": "fg redis redis-nl-reading redis-nodejs redis-queue"
  },
  {
	"href": "http://pl.atyp.us/2013-12-roll-back-or-rock-on.html",
	"description": "On Redis Cluster, rollback, and storage-system requirements",
	"extended": "",
	"meta": "8ea616c3944b9681afb02e72515e7c41",
	"hash": "f8a80fe612e20b76fd0b60b55df7e9ff",
	"time": "2013-12-16T08:25:25Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cluster redis-rollback"
  },
  {
	"href": "http://aphyr.com/posts/307-call-me-maybe-redis-redux",
	"description": "Redis redux - A discussion of a proposed Redis replication design. /by @aphyr:",
	"extended": "Aphyr discuss about Redis replication system using WAIT.  \"We must understand our systems in order to explain them–and distributed systems are hard to understand.\"",
	"meta": "27c7f6b1dd5ddd28c5155a601ef84379",
	"hash": "4852c59b5368b7709237f9a72a75bec8",
	"time": "2013-12-11T08:34:53Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-replication"
  },
  {
	"href": "http://java.dzone.com/articles/redis-and-lua-nosql-power-0",
	"description": "Redis and Lua: A NoSQL Power-Horse",
	"extended": "",
	"meta": "9f443b42501ed5373c0bd6bc93addaf3",
	"hash": "d806d150e0ca7e7b2ea4d7fc05d1d0e0",
	"time": "2013-12-09T12:18:26Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lua"
  },
  {
	"href": "http://blog.gopivotal.com/case-studies-2/case-study-how-hulu-scaled-serving-4-billion-videos-using-redis",
	"description": "How Hulu Scaled Serving 4 Billion Videos Using Redis /by @gopivotal",
	"extended": "How Hulu use Redis as a data structure cache to store ~4 billion records and responses to around 7k queries par second at peak.",
	"meta": "c2a7f547032cb1a9f534f500486fa46f",
	"hash": "49d90e648b83d490440799653fa5f068",
	"time": "2013-11-27T11:05:49Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-usecase"
  },
  {
	"href": "http://tech.bellycard.com/blog/light-speed-analytics-with-redis-bitmaps-and-lua/",
	"description": "Light-Speed Analytics with Redis Bitmaps and Lua /by @bellycardtech",
	"extended": "",
	"meta": "3af08e7169cff2c1c51db5d934fc7aa0",
	"hash": "23bf0c1aa00b0083b29cb50aaf165f41",
	"time": "2013-11-21T20:39:40Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-bitmap redis-lua"
  },
  {
	"href": "http://stackoverflow.com/questions/19997647/script-attempted-to-create-global-variable/19998708#19998708",
	"description": "How to create a global variable in Redis LUA",
	"extended": "",
	"meta": "e36c1f72280ac38696b9efc8acb365e9",
	"hash": "567397d2dcd7fb3af45caeab63b2604d",
	"time": "2013-11-16T10:35:27Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-lua redis-nl-reading"
  },
  {
	"href": "http://bencane.com/2013/11/12/installing-redis-and-setting-up-master-slave-replication/",
	"description": "Installing Redis and setting up Master – Slave Replication /by @madflojo",
	"extended": "A step by step tutorial on how to install Redis on Ubuntu 13.10 and how to configure it a master slave replication architecture.",
	"meta": "d324b09621e74f49fab3e72c5eb074b8",
	"hash": "095c93e20bde571e9d81a6e3c9f455aa",
	"time": "2013-11-12T17:26:46Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-replication redis-ubunut"
  },
  {
	"href": "http://gists.fritzy.io/2013/11/11/redis-update-and-notify",
	"description": "Redis Lua: Updating a Key and Publishing a Logged Notification /by @fritzy",
	"extended": "How to use LUA to publish notifications on SET command.",
	"meta": "8c640dc03a5daa11d90747660be5f16f",
	"hash": "21c582fcbe76ed13dfec01c67e6445c3",
	"time": "2013-11-12T10:54:03Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-lua redis-nl-reading redis-lua-notifications"
  },
  {
	"href": "https://github.com/anto80/synacor-vm",
	"description": "SynacorVm - A LUA virtual machine embedded in Redis to resolve a challenge /by @depalop",
	"extended": "The challenge was to implement an architecture specification in order to create a virtual machine capable of running the included binary. @depalop used Redis as a virtual memory to resolve it.",
	"meta": "dcf804ccdf58c5423ec670959f42328d",
	"hash": "67dbded572598fc69b3f3293443f715b",
	"time": "2013-11-11T14:38:12Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lua redis-vm"
  },
  {
	"href": "http://gists.fritzy.io/2013/11/07/redis-hashed-passwords",
	"description": "Redis Lua: Storing and Checking Hashed Passwords /by @fritzy",
	"extended": "",
	"meta": "eca4e2b02b31d9d0070916fb5c4f7dd8",
	"hash": "d83f6a6fdcf6d8c92f1975228ba62e3c",
	"time": "2013-11-07T20:52:08Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lua"
  },
  {
	"href": "http://gists.fritzy.io/2013/11/04/redis-rpush-max",
	"description": "Redis Lua: Appending to a List and Trimming to Max Size /by @fritzy",
	"extended": "Here’s a short LUA script that is pushes a new item to the end of a list, deleting as many left-most entries in order to enforce a maximum size.",
	"meta": "d1459638a88d4d1be43bb4db784881d6",
	"hash": "355d368a197d305c18ecaaadd25e1e41",
	"time": "2013-11-06T20:08:23Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-lua redis-nl-reading"
  },
  {
	"href": "http://gists.fritzy.io/2013/11/06/store-json-as-msgpack",
	"description": "Redis Lua: Store JSON as MessagePack and Retrieve MessagePack as JSON /by @fritzy",
	"extended": "If you're storing JSON in redis, you might want to look at my post about saving space. ",
	"meta": "db94d462474c4186a0f923b58fee816f",
	"hash": "7c4d7f634cb080ebf54c91381034821c",
	"time": "2013-11-06T19:55:56Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-lua-json redis-messagepack"
  },
  {
	"href": "https://coderwall.com/p/unklzq",
	"description": "Redis & Go: Building a simple swear word filter /by @deckarep",
	"extended": "",
	"meta": "7b0537ff18ee03656cdd1d838699a886",
	"hash": "9c5d0a72ace9749ae609fe625c6c35c0",
	"time": "2013-11-04T19:07:15Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-go redis-set"
  },
  {
	"href": "http://stackoverflow.com/questions/19672663/javascript-realtime-visitor-information/19676764#19676764",
	"description": "How to use Redis to store visitor informations in real-time",
	"extended": "",
	"meta": "a18e3b386941a904a1f4e00a0ff32ecd",
	"hash": "3d542bb9c456385f7bc650ad44a01d83",
	"time": "2013-11-03T09:13:47Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-analytics"
  },
  {
	"href": "http://www.javacodegeeks.com/2013/10/simple-crud-using-servlet-3-0-redisjedis-and-cdi-part-1.html",
	"description": "Simple CRUD using Servlet 3.0, Redis/Jedis and CDI - Part 1 /by @fjunior87",
	"extended": "This blog post explain how to build a simple user crud with the data stored in Redis, using Jedis, CDI for Depedency Injection and Servlet 3.0 for the view.",
	"meta": "89d6ec0449f7c51e4a2d6e5dacdaa943",
	"hash": "a27c3882e0eeeda74644c79777adc84b",
	"time": "2013-10-30T15:01:03Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-jedis redis-java redis-crud"
  },
  {
	"href": "http://anandjeyahar.com/2013/10/29/lessons-learnt-from-trying-to-contribute-to-redis/",
	"description": "Lessons learnt from trying to contribute to redis /by @softwarmechanic",
	"extended": "A summary of C coding related lessons learnt while A. Jehahar was trying to add bloom filter as a data type to Redis.",
	"meta": "ca675d1a03a8c04fb6659a85233e1140",
	"hash": "74c83ae64f624a6f7c3d9f81fccaff75",
	"time": "2013-10-29T10:04:31Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-c"
  },
  {
	"href": "http://www.volkomenjuist.nl/blog/2013/10/20/laravel-4-and-nodejsredis-pubsub-realtime-notifications/",
	"description": "Laravel 4 and NodeJs/Redis pub/sub realtime notifications",
	"extended": "",
	"meta": "4a4154dab4922784bb6e93c0ea1e257b",
	"hash": "180b0947741424f74ea6bd860e955d5f",
	"time": "2013-10-26T08:20:39Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-laravel redis-nodejs redis-pubsub"
  },
  {
	"href": "http://blog.jupo.org/2013/10/23/higher-order-types-for-redis/",
	"description": "Presentation of Higher Order Types for Redis /by @stephen_mcd",
	"extended": "Implemented in Python, HOT for Redis provides atomic List, Set, Dict, String, ImmutableString, Int, Float, Queue, LifoQueue, SetQueue, LifoSetQueue, BoundedSemaphore, Semaphore, Lock, RLock, DefaultDict and MultiSet by leveraging Redis LUA scripts?",
	"meta": "1bc311b1b016248d6dbc3bab11ae183e",
	"hash": "335a6ca30115c6ff532bf22446ac36fa",
	"time": "2013-10-23T11:33:44Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-python redis-lua redis-types"
  },
  {
	"href": "http://eric.lubow.org/2013/databases/redis-databases/redis-setup-notes-and-one-liners/",
	"description": "Redis Setup Notes and One-Liners",
	"extended": "",
	"meta": "fedba90f4a4834709bf25abad6d13a58",
	"hash": "60fea99c2d00a6dbff36b15a0cb9d4e2",
	"time": "2013-10-23T07:10:55Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-one-liners redis-monitoring"
  },
  {
	"href": "http://blog.percolate.com/2013/introducing-redset/",
	"description": "Introducing redset - A Redis-backed sorted set useful for coordinating distributed work /by @percolate",
	"extended": "Written in python, redset helps to deduplicate and manage time-sensitive processing tasks, which oft-used queuing solutions don’t handle very well. ",
	"meta": "1fcf345cbbae8a2be103c4a34cf99358",
	"hash": "fa1f54ba6c4f1dbecfb0d7d7d13f471c",
	"time": "2013-10-15T21:40:45Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-python redis-distributed"
  },
  {
	"href": "http://big-elephants.com/2013-10/tuning-redismq-how-to-use-redis-in-go/",
	"description": "Tuning Redismq - how to use Redis in #Go",
	"extended": "",
	"meta": "ca1515392d14db013bb57c19e3d56239",
	"hash": "fb6b85f3a06ba9dac0bce9fd430933cc",
	"time": "2013-10-14T18:40:34Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-go redis-queue"
  },
  {
	"href": "http://sharpfellows.com/post/Getting-started-with-Redis-on-Windows-and-a-look-at-performance-for-logging.aspx",
	"description": "Getting started with Redis on Windows, a look at performance for logging /by @NaeemKhedarun",
	"extended": "",
	"meta": "de8f03ca5c5e39f6a4095288d858d0be",
	"hash": "07247d92fff1f3d33cf31af14e1c0320",
	"time": "2013-10-14T13:14:02Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-windows"
  },
  {
	"href": "http://c7.se/from-ruby-to-lua/",
	"description": "From Ruby to Lua",
	"extended": "If you are a ruby developer and want to leanr lua in order to use it in Redis this introduction might help you a lot.",
	"meta": "1c27ac6fdca9196c971a85b506fb9738",
	"hash": "ff215d12bb05e43f5c0705fa5f026765",
	"time": "2013-10-08T10:44:40Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-lua redis-nl-reading"
  },
  {
	"href": "http://garantiadata.com/blog/scaling-out-redis-read-only-slaves-or-cluster#.UksuKmROo6I",
	"description": "Scaling Out Redis: Read-Only Slaves or Cluster?",
	"extended": "How GarantidaData use shards to scale Redis",
	"meta": "91a450965724711904e72167d5dafae2",
	"hash": "eb2cd28e76dc1699e0a92b48090c15ec",
	"time": "2013-10-01T20:22:34Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-cluster redis-slaves"
  },
  {
	"href": "http://tech.taskrabbit.com/blog/2013/09/28/resque-bus/",
	"description": "How TechRabbit made an asynchronous message bus with Redis and Resque",
	"extended": "",
	"meta": "0b43bf4e42bde92c425a23fe8c461203",
	"hash": "74fd7a2d8c4279bf7c0d5fd98079b45e",
	"time": "2013-10-01T08:17:39Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-message-bus"
  },
  {
	"href": "http://www.generictestdomain.net/Redis/2012/05/07/location-aware-matchmaking-with-redis/",
	"description": "Location aware matchmaking with redis",
	"extended": "An old article (2012) about how to build a system in Python that takes a person’s latitude and longitude, and returns the location of someone nearby. It's a matter of time for something to build the same in LUA.",
	"meta": "39f8de42e8ca10ae9981899f5e836060",
	"hash": "d3217c50aa0512ef71c12d74d2f47de1",
	"time": "2013-09-30T13:34:49Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-location redis-geoloc"
  },
  {
	"href": "https://www.getpantheon.com/blog/why-we-recommend-redis-caching-backend",
	"description": "Why We Recommend Redis as a Drupal Caching Backend /by @fluxsauce",
	"extended": "",
	"meta": "f9c04729c26650b06f4efbb5e7b41445",
	"hash": "c51eb0b3d195862ef2bf67c544f97b57",
	"time": "2013-09-26T08:33:30Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-drupal redis-nl-reading"
  },
  {
	"href": "http://publications.lib.chalmers.se/records/fulltext/183766/183766.pdf",
	"description": "[Thesis] How game companies use Redis to build scalable social game server",
	"extended": "",
	"meta": "8f60984d0afbf259ff27d6593ab4c64f",
	"hash": "be76978b13960e9c34d07649839434a3",
	"time": "2013-09-26T08:27:20Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-games redis-scale redis-nl-reading"
  },
  {
	"href": "http://theplant.jp/en/blogs/13-techforce-making-a-simple-full-text-search-with-golang-and-redis",
	"description": "Making a simple full-text search with Golang and Redis /by @sunfmin",
	"extended": "",
	"meta": "0999aa6dd7b46a44b6f77868fd56cb13",
	"hash": "202f4c150e6abc880b0c3bd5ef35eb3a",
	"time": "2013-09-23T22:43:38Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-go redis-fulltext"
  },
  {
	"href": "http://big-elephants.com/2013-09/building-a-message-queue-using-redis-in-go/",
	"description": "Building a Message Queue using Redis in Go",
	"extended": "This article explain how to implement a queue in Redis that can fulfill all of the following requirements: reliable, persistent, fast, monitorable.",
	"meta": "ec2ec39e65b3f15e5787297f5635ae4e",
	"hash": "766bca93554c93967925bd9161cde49c",
	"time": "2013-09-20T08:26:53Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-queue redis-queue-go redis-go"
  },
  {
	"href": "http://blog.new-bamboo.co.uk/2013/09/17/micro-network-daemons-in-go",
	"description": "How to build a custom google analytics clone using Go, UDP, Redis and ZeroMQ",
	"extended": "",
	"meta": "c833d2dcc7be2e87a2e52ee15b371377",
	"hash": "124ed9c68429f599d454b0355a703359",
	"time": "2013-09-20T08:24:42Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-datastore"
  },
  {
	"href": "http://blog.gopivotal.com/case-studies-2/using-redis-at-pinterest-for-billions-of-relationships",
	"description": "Using Redis at Pinterest for Billions of Relationships",
	"extended": "",
	"meta": "af4b78921502938d35fc39b219f3b727",
	"hash": "07e33b5ae929822d5370926ddb5864c3",
	"time": "2013-09-18T21:39:36Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading"
  },
  {
	"href": "http://crsmithdev.com/2013/09/15/running-redis-26-on-docker/",
	"description": "Running Redis 2.6 on Docker /by @crsmithdev",
	"extended": "A great introduction to using Redis with Docker.",
	"meta": "bc760d068c0a5ff16bfba21af290f315",
	"hash": "e79681ac8b25472391551a3acfc3a8df",
	"time": "2013-09-15T21:15:14Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-docker"
  },
  {
	"href": "http://benwilber.net/realtime-pixel-tracking-nginx-syslog-ng-redis",
	"description": "Realtime pixel tracking with nginx, syslog-ng, and Redis /by @benwilber",
	"extended": "",
	"meta": "119887736dfe3f576cf17073498bd9be",
	"hash": "080fa4abd815c243cdac6c57b971b55d",
	"time": "2013-09-14T23:29:42Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-nginx redis-syslog-ng"
  },
  {
	"href": "http://michaelbastos.com/wp-chef-now-supports-redis-deployment-for-wordpress/",
	"description": "WP-Chef now has Redis Deployment for WordPress /by @bastosmichael",
	"extended": "WP-Chef is a github project designed to make it quick and easy to deploy fast, complete and working WordPress installations across a variety of platforms.",
	"meta": "188686c2f23f61453f03a577ff139542",
	"hash": "163c876bb2ff9d0f2e5c6ccdc0da599a",
	"time": "2013-09-12T14:53:23Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-wordpress"
  },
  {
	"href": "http://exotel.in/blog/engineering/how-we-made-exotels-callsms-inbox-faster/",
	"description": "How Exotel's made call/SMS inbox faster by using Redis",
	"extended": "",
	"meta": "3fdbd56d24d0f7b7e39c6cf926b9ff53",
	"hash": "3c57eeb1afcd7e66bf989211adae4040",
	"time": "2013-09-12T10:38:07Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-secondary-cache"
  },
  {
	"href": "http://blogs.mulesoft.org/mule-and-redis-get-a-web-bug/",
	"description": "Mule and Redis get a web bug /by @ddossot",
	"extended": "This blog post is a tutorial that you can follow in order to get your feet wet with Redis and Mule and want to see how they can both work together.",
	"meta": "b5a16c429924d96749aac964e16ed451",
	"hash": "c7d002d7052f07221b677ff2641a7e05",
	"time": "2013-09-10T16:29:57Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-mule redis-java"
  },
  {
	"href": "http://blog.shinetech.com/2013/09/04/the-joys-of-redis/#comment-4743",
	"description": "The Joys of Redis /by @realshinetech",
	"extended": "An introduction to Redis, what is it for, who use it and how to setup replication and use pipelining.",
	"meta": "afec6aa9a2e6c547ea0a2de9a97763df",
	"hash": "4e7b197601e2590f9c796226f5cb83e5",
	"time": "2013-09-04T08:47:15Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-introduction redis-usecase redis-replication redis-nl-reading"
  },
  {
	"href": "http://engineering.wingify.com/scaling-with-queues/",
	"description": "Scaling with Queues at Wingify with Redis and RabbitMQ",
	"extended": "How the Wingify engineering team made a scaling and reliable data acquisition system using message queues. Its interesting how they coupled Redis with RabbitMQ.",
	"meta": "7d5a84735c8cbc4e2ebb412c2f1a2b78",
	"hash": "41c98d627ff31d33da28c19c79007fda",
	"time": "2013-09-02T19:00:21Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-rabbitmq"
  },
  {
	"href": "http://blog.glebm.com/2013/08/31/redis-compressed-lists.html",
	"description": "Partition lists in Redis /by @glebm",
	"extended": "Gleb shows in this article a trick to reduce memory usage and improve the speed of the redis list type when storing series-type data (e.g. time series).",
	"meta": "6dc046f941e387cffb6011d7eddb9acf",
	"hash": "4b71291928e15e47722df08aff046fd4",
	"time": "2013-08-31T19:24:14Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-timeserie redis-memory-optimization redis-list-optimization"
  },
  {
	"href": "http://diarmuidmoloney.wordpress.com/2013/08/30/docker-io-redis-on-digitalocean-in-5mins/",
	"description": "Setup Docker.io and Redis on DigitalOcean in 5mins /by @diarmuidmoloney",
	"extended": "",
	"meta": "47ed30147657ebc47d3fe1b09c88cfd4",
	"hash": "ac65afef00aec2b04b9871ca3e4186e0",
	"time": "2013-08-31T10:45:14Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-docker"
  },
  {
	"href": "http://blog.togo.io/redisphere/redis-roundup-what-companies-use-redis/",
	"description": "Redis Roundup: What Companies Use Redis? /by @redistogo",
	"extended": "This article take a look at a few major companies and how they use Redis",
	"meta": "7102b2bd887bf87d07dd5312d32823dc",
	"hash": "3f1971332f7681dbca335c10e35bcf51",
	"time": "2013-08-30T12:20:40Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-usecase redis-who-use-redis"
  },
  {
	"href": "http://www.springsource.org/node/22678",
	"description": "Spring Data Redis 1.1 RC1 Released",
	"extended": "",
	"meta": "50a08c11e43b53069a25e0fc1f71c595",
	"hash": "a01f7eb6d59beed059109e73532df8f2",
	"time": "2013-08-28T08:54:04Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-spring"
  },
  {
	"href": "https://moot.it/blog/technology/real-timey-wimey-stuff.html",
	"description": "How Moot use NodeJS & Redis to drive tens of millions of realtime notifications daily /by @letsmoot",
	"extended": "",
	"meta": "b1733ad77ee174b6992c4e042bcf0e18",
	"hash": "d76ed519aa5fab2c8d1ad050cf90d815",
	"time": "2013-08-26T11:59:12Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-notifications redis-pubsub"
  },
  {
	"href": "http://xicojunior.wordpress.com/2013/08/20/simple-crud-using-servlet-3-0-redisjedis-and-cdi-part-1/",
	"description": "Simple CRUD using Servlet 3.0, Redis/Jedis and CDI – Part 1 /by @fjunior87",
	"extended": "",
	"meta": "1f9c4fa18acba0c35ee25321690fd694",
	"hash": "cad444c129516c009df7dce63044d58e",
	"time": "2013-08-21T07:58:54Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-servlet redis-jedis redis-crud"
  },
  {
	"href": "http://blog.sensible.io/2013/08/20/setting-up-redis-for-production-environment.html",
	"description": "Setting up Redis for Production Environment /by @JiriPospisil",
	"extended": "From the installation & configuration process to the backup/restore process as well as the monitoring setup with monit.",
	"meta": "34b6ab7719a9ac7694996c8cf04eb710",
	"hash": "aad0cc861b9c2c4ff0c68ff7db206632",
	"time": "2013-08-21T07:50:18Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-configuration redis-monit redis-backup redis-restore"
  },
  {
	"href": "http://www.ibm.com/developerworks/opensource/library/os-springredis/index.html?ca=drs-",
	"description": "Build Spring-based applications with Redis as the datastore",
	"extended": "This article introduces Redis and then shows how to build a simple dictionary application by using the Spring Data Redis API.",
	"meta": "81c0d1575b3997f6945b63d7309b5591",
	"hash": "eb9e09cd670720c18f32d3e12ec54313",
	"time": "2013-08-20T06:45:59Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-spring redis-java redis-nl-reading"
  },
  {
	"href": "http://blog.gopivotal.com/products/how-to-apply-messaging-to-cloud-apps-with-rabbitmq-node-js-redis-and-more",
	"description": "How to Apply Messaging to Cloud Apps with RabbitMQ, Node.js, Redis, and More | Pivotal P.O.V.",
	"extended": "This article summarizes Alvaro’s talk (Cloud Foundry dev. advocate) and uses his example app, Cloudstagram, to show a similar, basic version of how Instagram scales with RabbitMQ, Redis, and Celery.",
	"meta": "d6ef1728a4c1f72ad00250412ba25adf",
	"hash": "a40c4945c7ca592fb82ce4a9a84a0051",
	"time": "2013-08-20T06:44:48Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-rabbitmq redis-messaging"
  },
  {
	"href": "http://www.gridquorum.com/2013/08/redis-vs-bangdb-performance-comparison_16.html",
	"description": "Redis vs BangDB - K/V store Performance Comparison /by @SachinSinha",
	"extended": "",
	"meta": "f2b0236d7bfc910f05fd7006223665e7",
	"hash": "1b236f473f3ec9580ae5ddd3b13e7f8b",
	"time": "2013-08-16T09:14:01Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis bangdb redis-benchmark redis-kv-benchmark redis-nl-reading"
  },
  {
	"href": "http://shivganesh.com/2013/08/15/setup-redis-session-store-apache-tomcat-7/",
	"description": "Setup Redis as the Session Store for Apache Tomcat 7",
	"extended": "",
	"meta": "68b2c7aa1c697e02701dbd0bae95472e",
	"hash": "0588a75682f02ea80605a1e982c58b5e",
	"time": "2013-08-16T08:24:26Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-session redis-nl-reading redis-tomcat"
  },
  {
	"href": "http://www.codeproject.com/Articles/636730/Distributed-caching-using-Redis-server-with-Net-Cs",
	"description": "Distributed caching using Redis server with .Net/C# client",
	"extended": "",
	"meta": "c3a4a20fd1a5fe6a26f92f5bbbd57c29",
	"hash": "d2982c8df7b7db47e00dd8b1d13b14d8",
	"time": "2013-08-16T08:06:29Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-cache redis-C# redis-net redis-nl-reading"
  },
  {
	"href": "http://ptylr.com/2013/08/15/installing-configuring-redis-in-centos-6/",
	"description": "Installing & Configuring Redis in CentOS 6 /by @ptylr",
	"extended": "This post describes installation & configuration of a single node installation, built on-top of CentOS6. It assumes that internet access is available from the OS.",
	"meta": "134003200791140ffa3d605b92f1d134",
	"hash": "66f8bb1074df2dbdcd075b86c4a55fd0",
	"time": "2013-08-15T09:08:13Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-centos6"
  },
  {
	"href": "http://ruthienachmany.github.io/blog/2013/08/10/sidekiq-redis-cron-jobs/",
	"description": "Setting up Sidekiq with Cron Jobs /by @ruthienachmany",
	"extended": "How to set up asynchronous background processing jobs using Ruby, Sidekiq and Redis.",
	"meta": "9c977700c9366973123d0e5157a95260",
	"hash": "2c8f6766b5f9fdcbaeb91d02727fffbd",
	"time": "2013-08-13T13:57:51Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-sidekiq redis-ruby redis-cron"
  },
  {
	"href": "http://dev.af83.com/2013/08/13/nginx-redis-lua.html",
	"description": "How and why to record post params with nginx, redis & lua /by @af83",
	"extended": "Record the payload received from a payment pingback in a Redis queue, without involving any application code.",
	"meta": "319c84f86be5403544e7b9dc19807b66",
	"hash": "0ebb8b4cd777c5711e887a490c06cae3",
	"time": "2013-08-13T13:54:24Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-lua redis-nl-reading"
  },
  {
	"href": "http://blog.gopivotal.com/case-studies-2/8-ways-media-giant-viacom-uses-redis-to-serve-dynamic-video-at-scale",
	"description": "8 Ways Media Giant Viacom Uses Redis to Serve Dynamic Video At Scale P.O.V.",
	"extended": "",
	"meta": "4afb84f6f3cf93c7dfe22e6aa26d7a38",
	"hash": "45bb9696027a4ebc61ee307fdaadb21b",
	"time": "2013-08-08T20:59:41Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-viacom redis-usecase"
  },
  {
	"href": "http://3scale.github.io/2012/07/25/fun-with-redis-replication/",
	"description": "Having fun with Redis Replication between Amazon and Rackspace /by @3scale",
	"extended": "",
	"meta": "6c6bfdb6e2ff1128d5d629cc8ac0e43a",
	"hash": "3b9b2b172c68bea056cec3a8a4d72917",
	"time": "2013-08-02T09:36:18Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-nl-reading redis-replication redis-bandwidth"
  },
  {
	"href": "http://blog.togo.io/redisphere/how-youporn-uses-redis-sfw-edition/",
	"description": "[Interview] How YouPorn Uses Redis: SFW Edition",
	"extended": "",
	"meta": "aa364970600dacbbe49cce89b13890d1",
	"hash": "4204e9be0e732ac334cd290f406c985a",
	"time": "2013-08-01T06:47:08Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-usecase-youporn redis-nl-reading"
  },
  {
	"href": "http://antirez.com/news/60",
	"description": "Twilio incident and Redis /by @antirez",
	"extended": "",
	"meta": "58518cf11f6f39f338a6219de799cad1",
	"hash": "74bead6c4484da8246fcdd87e755cf0f",
	"time": "2013-07-25T08:26:57Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-incident redis-nl-reading"
  },
  {
	"href": "http://mechanics.flite.com/blog/2013/06/27/sharding-redis/",
	"description": "Sharding Redis at Flite /by @flitemechanics",
	"extended": "",
	"meta": "3169f628abe9e803c20b26ab1268f81a",
	"hash": "00fff1b88806be69d36a65a9c30bf10b",
	"time": "2013-06-27T21:24:27Z",
	"shared": "no",
	"toread": "no",
	"tags": "redis redis-sharding redis-nl-reading"
  }
];

reading.forEach(function (resource, resource_index, resource_array) {
	// Ajout de l'identifiant de la ressource à la liste des ressources
	client.rpush("resources", resource.hash);

	// Ajout du hash correspondant à la ressource
	client.hmset("resources:" + resource.hash, ["href", resource.href, "description", resource.description, "extended", resource.extended, "meta", resource.meta, "hash", resource.hash, "time", resource.time, "shared", resource.shared, "toread", resource.toread])

	// Ajout des titres au sorted set "typeahead"
	for (var i = 1, len = resource.description.length; i <= len; i++) {
  		client.zadd("typeahead", 0, resource.description.substring(0, i));
	}
	client.zadd("typeahead", 0, resource.description + "*");

	// Ajout de l'identifiant de la ressource au sorted set "tags"
	resource.tags.split(' ').forEach(function (tag, tag_index, tag_array){
		client.sadd("tags", tag);
		client.sadd("tags:" + tag, resource.hash);
		client.sadd("resources:" + resource.hash + ":tags", tag);
	});
});

// EXPERIMENTAL - working soon :)
function complete(prefix, count) {
	results = [];
	rangelen = 50;
	client.zrank("typeahead", prefix, function(zrank_err, zrank_data) {

		if (!zrank_data) {
			return [];
		} else {
			console.log("Start : " + zrank_data);
		}
        zrank_data -= rangelen;
		for (var y = 0; y < 20; y++){
            zrank_data += rangelen;
			client.zrange("typeahead", zrank_data, zrank_data + rangelen - 1, function(zrange_err, zrange_data) {
				console.log("test");
                console.log(zrank_data);
				
				if (!zrange_data || zrange_data.length == 0) {
					return;
				}

				for (var i = 0; i < zrange_data.length; i++) {
					var item = zrange_data[i];

					console.log(item);
					minlen = Math.min(item.length, prefix.length);
					if (item.substring(1, minlen) != prefix.substring(1, minlen)) {
						count = results.count;
						break;
					}

					if (item.slice(-1) == "*" && results.length != count) {
						results.push(item.slice(0, -1));
					}

				}
			});

		}
		return results;
	});
}

complete("redis", 10);