const fibonacciIter = {
    previous: 0,
    current: 1,
    resetPreviousCurrent() {
        this.previous = 0;
        this.current = 1;
    },
    next() {
        const next = this.previous + this.current;

        this.previous = this.current;
        this.current = next;
        return {done: false, value: next};
    },
    [Symbol.iterator]: function() {
        this.resetPreviousCurrent();
        return this;
    }
};

export { fibonacciIter };
