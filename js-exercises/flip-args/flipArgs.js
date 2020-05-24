function flipArgs(callback){
    return (...args) => {
        const reverseArguments = args.reverse();

        return callback(...reverseArguments);
    }
}

export {
    flipArgs
}