
function removeFalsyValues(array) {
  if(!Array.isArray(array)){
    return null;
  }

  const truthyValues = array.filter(value => !!value);

  return truthyValues;
}

export {
  removeFalsyValues,
};
