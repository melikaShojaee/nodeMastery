const { createRedisClient } = require('node-async-redis');
let redisClient
if (process.env.NODE_ENV === 'production')
    redisClient = createRedisClient();
else
    redisClient = createRedisClient();

module.exports = redisClient