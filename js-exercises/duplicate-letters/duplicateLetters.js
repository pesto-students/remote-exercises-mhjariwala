
function duplicateLetters(string) {
  if(!string || !string.length){
    return false
  }

  const letterCounts = {}
  const duplicates = {}
  const strArray = string.split('')
  
  strArray.forEach((letter) => {
    if(!letterCounts[letter]){
      letterCounts[letter] = 1
    } else {
      letterCounts[letter] += 1
      duplicates[letter] = letter
    }
  })

  let max

  for (const key in duplicates) {
    const letter = duplicates[key]
    const count = letterCounts[letter]
    
    if(!max){
      max = count
    } else {
      if(count > max){
        max = count
      }
    }
  }

  if(typeof max !== 'number' || max === 1){
    return false
  }

  return max;
}

export {
  duplicateLetters,
};
