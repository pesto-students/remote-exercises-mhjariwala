const sleep = ms => {
    if(isNaN(ms)){
        throw new Error('ms must be number.');
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

export { sleep };
