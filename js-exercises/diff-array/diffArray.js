function diffArray(firstArray, secondArray) {
  const arr1 = Array.isArray(firstArray) ? firstArray : [];
  const arr2 = Array.isArray(secondArray) ? secondArray : [];

  const uniqueArr1 = arr1.filter(element => !arr2.includes(element));
  const uniqueArr2 = arr2.filter(element => !arr1.includes(element)); 
  const unique = uniqueArr1.concat(uniqueArr2);

  return unique;
}

export {
  diffArray,
};
