const sumEvenArgs = (...args) => {
  if(!args.length){
    return null;
  }

  let sum = 0;

  args.forEach((element) => {
    const isEvenElement = element % 2 === 0;

    if(isEvenElement){
      sum += element;
    }
  })
  
  return sum;
}

export { sumEvenArgs };
