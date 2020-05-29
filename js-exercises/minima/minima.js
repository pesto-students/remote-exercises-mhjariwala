function minima(numberOfElements, array) {
    if(!Array.isArray(array)){
        return null;
    }

    array.sort((a,b) => a - b);

    const sortedElements = array.slice(0, !isNaN(numberOfElements) ? numberOfElements : array.length);
    
    return sortedElements;
}

export { minima };
