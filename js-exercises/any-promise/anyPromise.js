function isIterableObject(value) {
    if(!value || typeof value === 'string'){
        return false;
    }
    
    return !!(value[Symbol.iterator]);
}

function checkIsPromise(value) {
    return value instanceof Promise;
}

function anyPromise(iterable) {
    if(!isIterableObject(iterable)){
        throw new TypeError('value of iterable is invalid.');
    }

    const isMap = iterable instanceof Map;
    const isSet = iterable instanceof Set;
    const noOfElements = isMap || isSet ? iterable.size : iterable.length;
    const list = isMap ? iterable.values() : iterable;
    const rejectedErrors = [];

    if(!noOfElements){
        Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        for (const element of list) {
           if(!checkIsPromise(element)){
                resolve(element);
           } else {
                element.then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    rejectedErrors.push(new Error(err));

                    if(rejectedErrors.length === noOfElements){
                        const error = new Error(rejectedErrors);

                        reject(error.message);    
                    }
                })
           }     
        }
    });
}

export { anyPromise };