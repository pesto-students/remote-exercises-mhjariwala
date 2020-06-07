function isObject(value) {
    return !!(value && typeof value === 'object');
}

function getClonedValue(value, copyDescriptor) {
    let clonedValue;

    if(Array.isArray(value)){
        clonedValue = deepCopyArray(value, copyDescriptor);
    } else if(isObject(value)){
        clonedValue = deepCopyObject(value, copyDescriptor);
    } else {
        clonedValue = value;
    }

    return clonedValue;
}

const deepCopyArray = (array, copyDescriptor) => {
    if(!Array.isArray(array)){
        return;
    }

    const clonedArray = [];

    for (const element of array) {
        const clonedValue = getClonedValue(element, copyDescriptor);

        clonedArray.push(clonedValue);
    }

    return clonedArray;
}

const deepCopyObject = (objToCopy, copyDescriptor) => {
    if(!isObject(objToCopy)){
        return objToCopy;
    }

    const propertyNames = Object.getOwnPropertyNames(objToCopy);
    const clonedObject = {};
    
    for (let propertyName of propertyNames) {
        const propertyValue = objToCopy[propertyName];
        const clonedValue = getClonedValue(propertyValue, copyDescriptor);
        
        clonedObject[propertyName] = clonedValue;

        if(copyDescriptor){
            const propertyDescriptor = Object.getOwnPropertyDescriptor(objToCopy, propertyName);
            const clonedPropertyDescriptor = {
                ...propertyDescriptor,
                value: clonedValue
            };
            
            Object.defineProperty(clonedObject, propertyName, clonedPropertyDescriptor);
        }
    }

    return clonedObject;
};

export { deepCopyObject };
