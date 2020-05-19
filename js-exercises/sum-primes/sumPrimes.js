function isPrimeNumber(number){
  if(number < 2){
    return false
  }

  let isPrime = true;

  for(let i = 2; i <= number; i++){
    if(number % i === 0 &&  i !== number){
      isPrime = false;
      break;
    }
  }
 
  return isPrime
}

function sumPrimes(number){
  let sum = 0;
  
  for(let i = 2; i <= number; i++){
    if(isPrimeNumber(i)){
      sum += i
    }
  }
  
  return sum
}

export {
  sumPrimes,
};
