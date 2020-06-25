import { debounce } from "./debounce";

afterEach(() => {
    jest.clearAllTimers();
});

jest.setTimeout(30000);
jest.useFakeTimers();

describe("debounce", () => {
    const timeInMs = 2000;

    test('should throw an error for invalid args.', () => {
        expect(() => {
            debounce(null, timeInMs);    
        }).toThrow(/value passed to the fn must be function./)  ;     
    });

    test('should execute function only once even if we call it multiple times.', () => {
        const fn = jest.fn();

        const debounceFn = debounce(fn, timeInMs);    
        
        debounceFn();
        debounceFn();
        debounceFn();
        debounceFn();
        debounceFn();
        debounceFn();
        
        expect(fn).not.toBeCalled();
        jest.runAllTimers();
        expect(fn).toBeCalled();
        expect(fn).toHaveBeenCalledTimes(1);
    });
});
