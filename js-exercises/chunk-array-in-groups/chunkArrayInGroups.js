function chunkArrayInGroups(array, chunkSize) {
  if(!Array.isArray(array)){
    return null;
  }

  if(typeof chunkSize !== 'number' || isNaN(chunkSize)){
    return [array];
  }

  const arrayInGroups = [];
  let i = 0;
  let startIndex;
  let endIndex; 

  while(i < array.length) {
    startIndex = i;
    endIndex = i + chunkSize;
    const chunk = array.slice(startIndex, endIndex);
    
    arrayInGroups.push(chunk);
    i += chunkSize;
  }

  return arrayInGroups;
}

export {
  chunkArrayInGroups,
};
