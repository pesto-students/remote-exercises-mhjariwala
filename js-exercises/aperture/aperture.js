function throwError(error) {
    throw new TypeError(error);
}

function getTuplesLimits(list, value) {
    let index = 0;

    const chunks = [];
    
    for (const element of list) {
        const start = index;
        const end = start + value;
        
        if(end > list.length){
            break;
        }

        chunks.push([start, end])
        index++;
    }

    return chunks;
}

function getListOfNTuples(list, tupleLimits) {
    if(!Array.isArray(list) || !Array.isArray(tupleLimits)){
        return;
    }

    const listOfNTuples = tupleLimits.map(element => {
        const [start, end] = element;

        return list.slice(start, end);
    });

    return listOfNTuples;
}

function aperture(n, list) {
    if(typeof n !== 'number'){
        throwError('value of parameter n is not provided.');
    }

    if(!Array.isArray(list)){
        throwError('value of parameter list is not provided.');
    }

    const tupleLimits = getTuplesLimits(list, n);
    
    return getListOfNTuples(list, tupleLimits);
}

export { aperture };
