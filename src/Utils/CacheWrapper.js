import Session from './Session';

class CacheWrapper {

  static CACHE_VERSION = Session.getSessionKey();

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
    return await caches.open(`${cacheName}${CacheWrapper.CACHE_VERSION}`);
  }

}

export default CacheWrapper;