function cacheFunction(callback) {
  const cachedResult = {};

  const isResultAvailable = (number) => {
    return cachedResult.hasOwnProperty(number);
  }

  const storeResult = (number, result) => {
    cachedResult[number] = result;
  }

  return (number) => {
    if(isResultAvailable(number)){
      return cachedResult[number];
    }

    const callbackResult = callback(number);
    storeResult(number, callbackResult);

    return callbackResult 
  }
}

export {
  cacheFunction,
};
