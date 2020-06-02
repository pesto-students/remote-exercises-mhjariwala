function isNotPromise(promise){
    return !(promise instanceof Promise); 
}

const allPromises = promises => {
    return new Promise(async (resolve, reject) => {
        const results = [];
        
        for (const promise of promises) {
            if(isNotPromise(promise)){
                results.push(promise);
            } else {
                await promise.then((value) => {
                    results.push(value);
                }).catch((error) => {
                    reject(error);
                })
            }
        }

        resolve(results);
    })
};

export { allPromises };
