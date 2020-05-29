export function bizarreStringIncrementer(string){
    if(!string || !string.trim()){
        return;
    }

    const result = string.match(/\d+$/);
    let finalString;

    if(result){
        let matchedNumberString = result[0];
        const number = Number(matchedNumberString) + 1;
        const numberString = number.toString();
        const numberStringWithLeadingZero = numberString.padStart(matchedNumberString.length, '0');

        finalString = string.replace(matchedNumberString, numberStringWithLeadingZero);
    } else {
        finalString = `${string}1` 
    }

    return finalString
}