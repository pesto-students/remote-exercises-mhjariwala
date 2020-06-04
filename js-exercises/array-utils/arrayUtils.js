function isSet(value) {
  return value instanceof Set;
}

function isMap(value) {
  return value instanceof Map;
}

function isNotCallback(callback) {
  return typeof callback !== 'function';
}

function throwError(message) {
  throw new Error(message);
}

function map(iterableObject, callback, thisReference) {
  let list = iterableObject;
  const isSetIterator = isSet(list);
  const isMapIterator = isMap(list);
  const isArray = Array.isArray(list);

  if (!isArray && !isSetIterator && !isMapIterator) {
    throwError('first argument must be iterable object like array, set, or map.');
  }

  if (isNotCallback(callback)) {
    throwError('Callback must be function');
  }

  let lastElementIndex;

  if (isArray) {
    lastElementIndex = list.length - 1;
  } else if (isSetIterator || isMapIterator) {
    lastElementIndex = list.size - 1;
  }

  const results = [];
  let index = 0;

  for (let element of list) {
    if (index > lastElementIndex) {
      return;
    }

    if (element === undefined) {
      results.push(element);
    } else {
      let firstArg = element;
      let secondArg = index;

      if (isSetIterator) {
        secondArg = element;
      }

      if (isMapIterator) {
        firstArg = element[1];
        secondArg = element[0];
      }

      const result = callback.apply(thisReference, [firstArg, secondArg, list]);

      results.push(result);
    }

    index++;
  }

  return results;
}

function forEach(iterableObject, callback, thisReference) {
  let list = iterableObject;
  const isSetIterator = isSet(list);
  const isMapIterator = isMap(list);
  const isArray = Array.isArray(list);

  if (!isArray && !isSetIterator && !isMapIterator) {
    throwError('first argument must be iterable object like array, set, or map.');
  }

  if (isNotCallback(callback)) {
    throwError('Callback must be function');
  }

  let lastElementIndex;

  if (isArray) {
    lastElementIndex = list.length - 1;
  } else if (isSetIterator || isMapIterator) {
    lastElementIndex = list.size - 1;
  }

  let index = 0;

  for (let element of list) {
    if (index > lastElementIndex) {
      return;
    }

    if (element !== undefined) {
      let firstArg = element;
      let secondArg = index;

      if (isSetIterator) {
        secondArg = element;
      }

      if (isMapIterator) {
        firstArg = element[1];
        secondArg = element[0];
      }

      callback.apply(thisReference, [firstArg, secondArg, iterableObject]);
    }

    index++;
  }
}

function filter(iterableObject, callback, thisReference) {
  let list = iterableObject;
  const isSetIterator = isSet(list);
  const isMapIterator = isMap(list);
  const isArray = Array.isArray(list);

  if (!isArray && !isSetIterator && !isMapIterator) {
    throwError('first argument must be iterable object like array, set, or map.');
  }

  if (isNotCallback(callback)) {
    throwError('Callback must be function');
  }

  let lastElementIndex;

  if (isArray) {
    lastElementIndex = list.length - 1;
  } else if (isSetIterator || isMapIterator) {
    lastElementIndex = list.size - 1;
  }

  const results = [];
  let index = 0;

  for (let element of list) {
    if (index > lastElementIndex) {
      return;
    }

    if (element !== undefined) {
      let firstArg = element;
      let secondArg = index;

      if (isSetIterator) {
        secondArg = element;
      }

      if (isMapIterator) {
        firstArg = element[1];
        secondArg = element[0];
      }

      const result = callback.apply(thisReference, [firstArg, secondArg, list]);

      if (!!result) {
        results.push(element);
      }
    }

    index++;
  }

  return results;
}

function reduce(iterableObject, callback, initialValue, thisReference) {
  let list = iterableObject;
  const isSetIterator = isSet(list);
  const isMapIterator = isMap(list);
  const isArray = Array.isArray(list);
  const initialValueAvailable = !!initialValue;
  let accumulator;

  if (!isArray && !isSetIterator && !isMapIterator) {
    throwError('first argument must be iterable object like array, set, or map.');
  }

  if (isNotCallback(callback)) {
    throwError('Callback must be function');
  }

  if (isSetIterator || isMapIterator) {
    list = [...list.entries()];
  }

  if (!list.length && !initialValueAvailable) {
    throwError('iterable object is empty and initialValue is empty.');
  }

  const lastElementIndex = list.length - 1;
  const results = [];
  let index = 0;

  if (initialValueAvailable) {
    accumulator = initialValue;
  } else {
    accumulator = list[0];
    
    if(isMapIterator || isSetIterator){
      accumulator = list[0][1];  
    }
    
    index = 1;
  }

  while (index <= lastElementIndex) {
    const element = list[index];

    if (element !== undefined) {
      let secondArg = element;
      let thirdArg = index;

      if (isSetIterator || isMapIterator) {
        secondArg = element[1];
        thirdArg = element[0];
      }

      accumulator = callback.apply(thisReference,
        [accumulator, secondArg, thirdArg, list]);
    }

    index++;
  }

  return accumulator;
}

export {
  forEach,
  map,
  filter,
  reduce,
}