require('dotenv').config()
const Redis = require('ioredis')

const redis = new Redis(process.env.REDIS_URL)
redis.on('connect', () => {
    console.log('Redis Connected')
})

async function saveWithTtl(key, value, ttlSeconds = 60) {
  return await redis.set(key, JSON.stringify(value), 'ex', ttlSeconds);
}

async function get(key) {
  const jsonString = await redis.get(key)
  if (jsonString) {
    return JSON.parse(jsonString);
  }
}

module.exports = {
  saveWithTtl,
  get
}