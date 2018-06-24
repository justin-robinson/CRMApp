class ApiFetcher {

  static inFlightRequests = new Map();

  static fetch = async (url, ) => {
    if(!ApiFetcher.inFlightRequests.has(url)){
      ApiFetcher.inFlightRequests.set(url, fetch(url)
        .then((response) => {
          ApiFetcher.inFlightRequests.delete(url)
          return response.json();
        }));
    }
    return ApiFetcher.inFlightRequests.get(url);
  }

}

export default ApiFetcher;