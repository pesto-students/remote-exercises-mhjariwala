function isNumber(value) {
    return typeof value === 'number' && !Number.isNaN(value);
}

function debounce(fn, timeInMs) {
    if(typeof fn !== 'function'){
        throw new TypeError('value passed to the fn must be function.');
    }

    const time = isNumber(timeInMs) ? timeInMs : 0;
    let timeId;

    return function() {
        if(timeId){
            clearTimeout(timeId);
        }

        timeId = setTimeout(fn, time);
    }
}

export { debounce };
