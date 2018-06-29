import Session from './Session';

class CacheWrapper {

  static async has(cacheName, url) {
    return (await CacheWrapper.getCache(cacheName)).match(url);
  }

  static async get(cacheName, url) {
    return (await CacheWrapper.getCache(cacheName)).match(url);
  }

  static async put(cacheName, url, networkResponse) {
    return (await CacheWrapper.getCache(cacheName)).put(url, networkResponse.clone());
  }

  static async delete(cacheName, url) {
    return (await CacheWrapper.getCache(cacheName)).delete(url);
  }

  static async getCache(cacheName) {
    const cacheVersion = Session.getSessionKey();
    return await caches.open(`${cacheName}${cacheVersion}`);
  }

}

export default CacheWrapper;