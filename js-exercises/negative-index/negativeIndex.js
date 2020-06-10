function isNumber(value) {
    if(!value || typeof value === 'symbol'){
        return false;
    }

    let numberValue = Number(value);
    return typeof numberValue === 'number' && !isNaN(numberValue);
}

function negativeIndex(array) {
    if(!Array.isArray(array)){
        throw TypeError('Only arrays are supported.');
    }

    const handlers = {
        get(target, property, receiver) {
            let propertyToGet = property;

            if(isNumber(propertyToGet) && propertyToGet < 0){
                propertyToGet = parseInt(propertyToGet);
                propertyToGet = target.length + propertyToGet;
            }

            return Reflect.get(target, propertyToGet, receiver);
        },
        set(target, property, value) {
            let propertyToSet = property;

            if(isNumber(propertyToSet) && propertyToSet < 0){
                propertyToSet = parseInt(propertyToSet);
                propertyToSet = target.length + propertyToSet;
            }

            return Reflect.set(target, propertyToSet, value);
        }
    }

    return new Proxy(array, handlers);
}

export { negativeIndex };
