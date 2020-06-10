function throwError(err) {
    throw new Error(err);
}

function isObject(value) {
    return !!(value && typeof value === 'object');
}

const onChange = (obj, onChangeFn) => {
    if(!obj){
        throwError('obj is not defined.');
    }

    if(typeof onChangeFn !== 'function'){
        throwError('onChangeFn is not defined.');
    }

    const handlers = {
        get(target, property, receiver) {
            const value = target[property];

            if (isObject(value) || Array.isArray(value)) {
                return new Proxy(value, handlers);
            }
            
            return Reflect.get(target, property, receiver);
            
        },
        set(target, property, value) {
            onChangeFn();
            return Reflect.set(target, property, value);
        },
        defineProperty(target, property, value) {
            onChangeFn();
            target[property] = value;
            return target;
        },
        deleteProperty(target, property) {
            onChangeFn();
            return Reflect.deleteProperty(target, property);
        }
    }

    const proxy = new Proxy(obj, handlers);

    return proxy;
};

export { onChange };
