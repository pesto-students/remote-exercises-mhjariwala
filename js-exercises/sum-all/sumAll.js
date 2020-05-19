function sumAll(numbers) {
  if(!Array.isArray(numbers) || !numbers.length){
    return null
  }

  const sum = numbers.reduce((accumulator, number) => accumulator + number, 0)
  
  return sum
}

export {
  sumAll,
};
