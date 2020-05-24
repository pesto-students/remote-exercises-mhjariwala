function sumFibs(n) {
  if(n === 0){
    return sum;
  }
 
  const fib = [1,1];
  let sum = 0 ;
  
  for (let i = 2; i < n; i++) {
    const lastPreviousEl = fib[i - 1];
    const secondeLastPreviousEl = fib[i - 2];
    const nextElement = lastPreviousEl + secondeLastPreviousEl;

    if(nextElement <= n){
      fib.push(nextElement);
    } else {
      break;
    }
  }
  
  fib.forEach((element) => {
    if(element % 2 !== 0){
      sum += element;
    }
  })

  return sum;
}