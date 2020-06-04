import {
  forEach,
  map,
  filter,
  reduce,
} from "./arrayUtils";

describe('Array Utils', () => {
  const list = [25, 56, 78, 23, 53, 16];
  const set = new Set([10, 12 , 12, 45, 46, 9, 89]);
  const mapper = new Map();

  mapper.set('firstScore', 100);
  mapper.set('secondScore', 50);
  mapper.set('thirdScore', 25);
  mapper.set('fourthScore', 75);
  
  test('should throw an error for invalid arguments.', () => {
    expect(() => {map(list)}).toThrow('Callback must be function');
    expect(() => {filter(list)}).toThrow('Callback must be function');
    expect(() => {reduce(list)}).toThrow('Callback must be function');
    expect(() => {forEach(list)}).toThrow('Callback must be function');
  });

  test('map method', () => {
    const callback = (element) => element * 2;
    
    expect(map(list, callback)).toEqual([50, 112, 156, 46, 106, 32])
    // expect(map(set, callback)).toEqual([20, 24, 90, 92, 18, 178])
    // expect(map(mapper, callback)).toEqual([200, 100, 50, 150])
  });
  
  test('filter method', () => {
      const callback = (element) => element % 2 === 0;
    
    expect(filter(list, callback)).toEqual([56, 78, 16])
    expect(filter(set, callback)).toEqual([10, 12, 46])
    expect(filter(mapper, callback)).toEqual([["firstScore", 100], ["secondScore", 50]])
  });

  test('reduce method', () => {
    const callback = (accum, element) => accum + element;

    expect(reduce(list, callback)).toBe(251);
    expect(reduce(list, callback, 49)).toBe(300);
    expect(reduce(set, callback)).toBe(211);
    expect(reduce(mapper, callback)).toBe(250);
  });
});