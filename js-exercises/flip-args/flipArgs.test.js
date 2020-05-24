// write your own test cases
import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
    it('should return a function', () => {
        expect(typeof flipArgs()).toBe('function');
    });
  
    const callbackFn = function() {
        return [...arguments];
    };
    const flipped = flipArgs(callbackFn);
    const expectedResult = ['g', 'r', 'h', 'f', 'v', 'a']

    it('should return a array', () => {
        expect(Array.isArray(flipped('a', 'v', 'f' , 'h', 'r', 'g'))).toBe(true);
    });

    it('should return arguments send to function in reverse order.', () =>{
        expect(flipped('a', 'v', 'f' , 'h', 'r', 'g')).toEqual(expect.arrayContaining(expectedResult));
    });
});
