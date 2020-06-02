function isNotPromise(promise) {
    return !(promise instanceof Promise);
}

function allSettled(promises) {
    if(!Array.isArray(promises) || !promises.length){
        throw new Error('Parameter promises is not an array or it is not contain any element.');
    }

    return new Promise(async (resolve) => {
        const results = [];

        for (const promise of promises) {
            if(isNotPromise(promise)){
                results.push({ status: 'fulfilled', value: promise });
            } else {
                await promise.then((value) => {
                     results.push({ status: 'fulfilled', value });
                 }).catch((error) => {
                     results.push({ status: 'rejected', reason: error });
                 });
            }
        }

        resolve(results);
    });
}

export { allSettled };
