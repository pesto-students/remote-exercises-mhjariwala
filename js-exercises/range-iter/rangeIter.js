function iterable(start, end) {
    const rangeObj = {
        start,
        end,
        next() {
            if (this.start <= this.end) {
                return {
                done: false,
                value: this.start++
                };
            } else {
                return {
                    done: true
                };
            }
        }
    }
  
    rangeObj[Symbol.iterator] = function() {
      return this;
    }.bind(rangeObj);
  
    return rangeObj;
}

function throwTypeError(error) {
    throw new TypeError(error);
}
  
function rangeIter(ub, lb) {
    const iterableObj = iterable(ub, lb);
    const range = [];

    if(isNaN(ub)){
        throwTypeError(`${ub} is not a number`);
    }

    if(isNaN(lb)){
        throwTypeError(`${lb} is not a number`);    
    }

    for (const el of iterableObj) {
        range.push(el);
    }

    return range;
}

export { rangeIter };
