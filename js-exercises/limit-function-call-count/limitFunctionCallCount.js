const limitFunctionCallCount = (callback, noOfInvocation) => {
  let callbackInvokedCount = 0;

  return (...args) => {
    if(callbackInvokedCount >= noOfInvocation){
      return null
    }

    callbackInvokedCount++;
    
    return callback(...args);
  }
}

export {
  limitFunctionCallCount,
};
