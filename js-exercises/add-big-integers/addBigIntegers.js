function sumOfTwoString(value1, value2){
    const reverseValue1 = value1.split('').reverse().join('')
    const reverseValue2 = value2.split('').reverse().join('')
    const valueToIterate = reverseValue2.length > reverseValue1.length ? reverseValue2 : reverseValue1
    let carry = 0
    let sum = ""

    for(let i = 0; i < valueToIterate.length; i++) {
        const digit1 = Number(reverseValue1[i] || 0)
        const digit2 = Number(reverseValue2[i] || 0)
        const result = digit1 + digit2 + carry

        sum += (result % 10)
        carry = Math.floor(result / 10)
    }

    if(carry){
        sum += carry
    }

    sum = sum.split('').reverse().join('')
    return sum
}

function addBigIntegers(intString = '') {
    if(!intString){
        return null
    }

    const numbers = intString.match(/\S+/g)
    
    if(!numbers || !numbers.length){
        return null
    }

    if(numbers.length === 1){
        return numbers[0]
    }

    let i = 0
    function sumOfNumbers(value1, value2) {
        const result = sumOfTwoString(value1, value2)
        const nextNumber = numbers[++i]
       
       if(!nextNumber){
        return result
       }

       return sumOfNumbers(result, nextNumber)
    }
       
    return sumOfNumbers(numbers[i], numbers[++i])
}

export { addBigIntegers };
