function getLongestWord(words) {
  if(!Array.isArray(words) || !words.length){
    return null;
  }

  let longestWord = words[0];

  for (let index = 1; index < words.length; index++) {
    const word = words[index];
    
    if(word.length > longestWord.length){
      longestWord = word;
    }
  }
  
  return longestWord;
}

function longestWordInString(string) {
  if(!string || !string.trim()){
    return null;
  }

  const words = string.match(/\S+/g);
  const longestWord = getLongestWord(words);
  
  return longestWord
}

export { longestWordInString };
