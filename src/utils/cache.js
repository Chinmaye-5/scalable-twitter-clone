let cacheStore = {};

const getCache = (key) => cacheStore[key];

const setCache = (key, value) => {
  cacheStore[key] = value;
};

const clearCache = () => {
  cacheStore = {};
};

module.exports = { getCache, setCache, clearCache };
