import { anyPromise } from './anyPromise';

describe('anyPromise', () => {
    test('should return resolved promise if one of the promise get resolved.', () => {
        const pErr = new Promise((resolve, reject) => {
            reject("Always fails");
        });
        
        const pSlow = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Done eventually")
            }, 500);
        });
        
        const pFast = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Done quick.")
            }, 100);
        });
        
        return expect(anyPromise([pErr, pSlow, pFast])).resolves.toBe('Done quick.');
    });

    test('should rejected with an AggregateError if all of the given promises are rejected.', () => {
        const pErr = new Promise((resolve, reject) => {
            reject("Always fails");
        });
        
        const pErrSlow = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("err after 500ms.")
            }, 500);
        });
        
        const pErrFast = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("err after 100ms.")
            }, 100);
        });

        return expect(anyPromise([pErr, pErrSlow, pErrFast])).rejects.toMatch("Error: Always fails,Error: err after 100ms.,Error: err after 500ms.")
    });
})