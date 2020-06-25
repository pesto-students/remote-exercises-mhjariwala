import { throttle } from "./throttle";

afterEach(() => {
    jest.clearAllTimers();
});

jest.setTimeout(30000);
jest.useFakeTimers();

describe("throttle", () => {
    const timeInMs = 2000;
    const callbackFn = jest.fn();

    test('should throw an error for invalid args.', () => {
        expect(() => {
            throttle(null, timeInMs);    
        }).toThrow(/value passed to the fn must be function./)  ;     
    });

    test('should call function only once in given x second.', () => {
        const enhancedCallback = throttle(callbackFn, timeInMs);    
        
        enhancedCallback();
        enhancedCallback();
        enhancedCallback();
        enhancedCallback();
        enhancedCallback();

        jest.runAllTimers();
        expect(callbackFn).toHaveBeenCalledTimes(1);
    });
});
