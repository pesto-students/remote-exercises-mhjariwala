const getAnagramStr = (str1, str2) => {
    if(typeof str1 !== 'string' || typeof str2 !== 'string'){
        return null;
    }

    if(str1.length !== str2.length){
        return null;
    }

    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');

    return sortedStr1 === sortedStr2 ? sortedStr1 : null;
}

const countingAnagrams = str => {
    if(typeof str !== 'string'){
        throw new Error('value passed for str parameter is not valid.');
    }

    let words = str.split(/\s+/g);
    words = words.filter((str) => str.length > 1);
    const anagramStrObj = {};

    for (let i = 0; i < words.length; i++) {
        const str1 = words[i];

        for (let j = i + 1; j < words.length; j++) {
            const str2 = words[j];
            const anagramStr = getAnagramStr(str1, str2);

            if(anagramStr){
                anagramStrObj[anagramStr] = true;
            }
        }
    }

    const numberOfExpectedAnagrams = Object.keys(anagramStrObj).length;    
    
    return numberOfExpectedAnagrams;
};

export { countingAnagrams };
