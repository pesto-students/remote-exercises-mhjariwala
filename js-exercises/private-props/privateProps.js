function isObject(value) {
    return !!(value && typeof value === 'object');
}

function throwTypeError(err) {
    throw new TypeError(err);
}

function privateProps(obj, isPrivate) {
    if(!isObject(obj)) {
        throwTypeError('value of obj parameter is invalid.');
    }

    if(typeof isPrivate !== 'function') {
        throwTypeError('value of isPrivate parameter is invalid.');
    }

    const handlers = {
        get(target, property) {
            if(isPrivate(property)){
                throwTypeError('Can\'t get private property.');
            }

            return typeof target[property] === 'function' ? target[property].bind(target) : target[property];
        },
        set(target, property, value) {
            if(isPrivate(property)){
                throwTypeError('Can\'t set property "_private"');
            }

            target[property] = value;
            return true;
        },
        has(target, property) {
            if(isPrivate(property)){
                return false;
            }

            return property in target;
        },
        ownKeys(target) {
            return Object.keys(target).filter(key => !isPrivate(key));
        },
        getOwnPropertyDescriptor(target, property) {
            if(isPrivate(property)){
                return;
            }

            return Object.getOwnPropertyDescriptor(target, property);
        }
    }

    return new Proxy(obj, handlers);
}

export { privateProps };
