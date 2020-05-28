function getNoOfCharsToDelete(string){
    let noOfCharacterToDelete = 0;

    if(!string || !string.trim()){
        return noOfCharacterToDelete;
    }

    const strArray = string.split('');
    const isLastElement = strArray.length - 1

    strArray.forEach((char, index) => {
        if(index === isLastElement){
            return;
        }

        const nextChar = strArray[index + 1];

        if(char === nextChar){
            noOfCharacterToDelete += 1;
        }
    });

    return noOfCharacterToDelete;
}

function alternatingCharacters(arr) {
    if(!Array.isArray(arr)){
        return null;
    }

    return arr.map(str => getNoOfCharsToDelete(str))
}

export { alternatingCharacters };
