import { allSettled } from './allSettled';

describe('allSettled', () => {
    test('should throw an error of invalid parameter passed to the function', () => {
        expect(() => {
            allSettled();
        }).toThrow('Parameter promises is not an array or it is not contain any element.');

        expect(() => {
            allSettled([]);
        }).toThrow('Parameter promises is not an array or it is not contain any element.');
    });

    test('allSettled method return promise which resolves after all the promises in array either get rejected or resolved.', () => {
        const expectedResults = [
            {status: "fulfilled", value: 33},
            {status: "fulfilled", value: 66},
            {status: "fulfilled", value: 99},
            {status: "rejected",  reason: new Error('an error')}
        ];

        return allSettled([
            Promise.resolve(33),
            new Promise(resolve => setTimeout(() => resolve(66), 0)),
            99,
            Promise.reject(new Error('an error'))
          ])
          .then(results => {
              expect(results).toEqual(expectedResults)
          });
    });

    test('allSettled method return promise which resolves after all the promises in array either get rejected or resolved.', () => {
        const promise1 = Promise.resolve(3);
        const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
        const promises = [promise1, promise2];
        const expectedResults = [
            {status: "fulfilled", value: 3},
            {status: "rejected",  reason: 'foo'}
        ];

        return allSettled(promises)
          .then(results => {
              expect(results).toEqual(expectedResults);
          });
    });
})