const getKeys = (obj) => {
  if(!obj){
    return [];
  }

  return Object.keys(obj);
}

const map = (obj, callback) => {
  if(!obj || !callback){
    return null
  }

  const newObject = {};
  const keys = getKeys(obj);

  keys.forEach((key) => {
    const value = obj[key];
    
    newObject[key] = callback([key, value]);
  });

  return newObject;
}

const filter = (obj, callback) => {
  if(!obj || !callback){
    return null;
  }

  const newObject = {};
  const keys = getKeys(obj);

  keys.forEach((key) => {
    const value = obj[key];
    const isValid = callback([key, value]);
    
    if(isValid){
      newObject[key] = value;
    }
  });

  return newObject;
}

const invert = (obj) => {
  if(!obj){
    return null;
  }

  const newObject = {};
  const keys = getKeys(obj);

  keys.forEach((key) => {
    const value = obj[key];
    
    newObject[value] = key;
  });

  return newObject;
}

const merge = (...args) => {
  if(!args.length){
    return null;
  }

  const mergedObject = Object.assign({}, ...args);

  return mergedObject;
}


const all = (obj, callback) => {
  if(!obj || !callback){
    return null;
  }

  const keys = getKeys(obj);

  if(!keys || !keys.length){
    return false;
  }

  for (const key of keys) {
    const value = obj[key];
    const isValid = callback([key, value]);
    
    if(!isValid){
      return isValid
    }
  }

  return true;
}

const some = (obj, callback) => {
  if(!obj || !callback){
    return null;
  }

  const keys = getKeys(obj);

  if(!keys || !keys.length){
    return false;
  }

  for (const key of keys) {
    const value = obj[key];
    const isValid = callback([key, value]);
    
    if(isValid){
      return isValid
    }
  }

  return false;
}

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
