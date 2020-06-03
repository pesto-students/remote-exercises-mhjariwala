
function curry(callbackFn){
  return function _curry(...args1) {
    if(args1.length >= callbackFn.length){
      return callbackFn(...args1)
    } else {
      return function(...args2) {
        return _curry.apply(this, args1.concat(args2))
      }    
    }
  }
}

export {
  curry,
};
