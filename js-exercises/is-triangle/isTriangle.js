function isTriangle(unit1, unit2, unit3) {
  const sumOfUnit1AndUnit2 = unit1 + unit2;
  const sumOfUnit2AndUnit3 = unit2 + unit3;
  const sumOfUnit3AndUnit1 = unit3 + unit1;

  if(sumOfUnit1AndUnit2 > unit3 &&  sumOfUnit2AndUnit3 > unit1 && sumOfUnit3AndUnit1 > unit2){
    return true;
  }

  return false;
}

export {
  isTriangle,
};
