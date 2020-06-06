function getNextLetter(ch) {
  if(typeof ch !== 'string'){
    return;
  }

  const nextCodePoint = ch.codePointAt(0) + 1;
  const nextCharacter = String.fromCodePoint(nextCodePoint);

  return nextCharacter;
}

const alphabeticShift = str => {
  if(typeof str !== 'string'){
    return null;
  }

  let shiftedString = '';

  for (const ch of str) {
    shiftedString += getNextLetter(ch);
  }

  return shiftedString;
};

export { alphabeticShift };
