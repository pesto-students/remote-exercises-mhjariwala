
function equal(str1, str2) {
  return !(str1.localeCompare(str2));
}

function reverse(str) {
  if(!str || !str.trim()){
    return str;
  }

  let reverseStr = '';
  const normalizeStr = str.normalize();

  for (let ch of normalizeStr) {
    reverseStr = ch + reverseStr;
  }

  return reverseStr;
}

function betterStringLib() {
  return {
    equal,
    reverse
  };
}

export {
  betterStringLib,
};
