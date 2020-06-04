function calculateFrequency(array) {
  const frequencyMap = {};
  
  if(!Array.isArray(array)) {
    return;
  }

  array.forEach((element) => {
    let normalize = element;

    if(typeof element === 'string'){
      normalize = element.normalize();
    }

    if(!frequencyMap.hasOwnProperty(normalize)){
      frequencyMap[normalize] = 1;
    } else {
      frequencyMap[normalize] += 1;
    }
  });

  return frequencyMap;
}

function freqSort(array) {
  if(!Array.isArray(array)){
    return;
  }

  const frequencyMap = calculateFrequency(array);
  const entries = Object.entries(frequencyMap);
  
  const sortedArray = entries.sort((property1, property2) => {
    const property1Frequency = property1[1];
    const property2Frequency = property2[1];
    const difference = property1Frequency - property2Frequency;
    
    if(difference < 0){
      return 1;
    } else if (difference > 0) {
      return -1;
    }

    return 0;
  });

  return sortedArray.map(element => element[0]);
}

export {
  freqSort,
};
