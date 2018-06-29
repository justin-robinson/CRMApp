import CacheWrapper from './CacheWrapper';

class ApiFetcher {

  static IN_FLIGHT_REQUESTS = 'IN_FLIGHT_REQUESTS';
  static RESPONSES = 'RESPONSES';
  static DEFAULT_OPTIONS = {
    useCache: false,
    expiration: 360000
  }

  static async fetch (url, fetchOptions, options) {
    options = Object.assign(ApiFetcher.DEFAULT_OPTIONS, options);

    if(await CacheWrapper.has(ApiFetcher.IN_FLIGHT_REQUESTS, url)){
      return (await CacheWrapper.get(ApiFetcher.IN_FLIGHT_REQUESTS, url)).json();
    }

    if(options.useCache){
      let cacheResult = await CacheWrapper.get(ApiFetcher.RESPONSES, url);
      if(cacheResult) {
        return cacheResult.json();
      }
    }

    let response = await fetch(url, fetchOptions);
    await CacheWrapper.delete(ApiFetcher.IN_FLIGHT_REQUESTS, url);
    if(options.useCache){
      await CacheWrapper.put(ApiFetcher.RESPONSES, url, response);
    }
    return response.json();
  }

}

export default ApiFetcher;