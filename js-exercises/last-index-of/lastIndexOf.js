
function lastIndexOf(value, list) {
  if(!Array.isArray(list)){
    return -1
  }

  return list.lastIndexOf(value)
}

export {
  lastIndexOf,
};
