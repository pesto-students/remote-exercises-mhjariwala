function throttle(fn, time) {
    if(typeof fn !== 'function'){
        throw new Error('value passed to the fn must be function.');
    }

    let lastCall;
    let delay = typeof time === 'number' && !Number.isNaN(time) ? time : 0;
    
    return function (...args) {
        const currentTime = Date.now();
        
        if (!lastCall || (currentTime - lastCall) > delay) {
            lastCall = currentTime;
            
            return fn(...args);
        }
    }
}


export { throttle };
