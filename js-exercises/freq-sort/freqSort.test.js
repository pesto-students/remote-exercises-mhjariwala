import { freqSort } from './freqSort';

describe('freqSort', () => {
  test('sort element of an array based on its frequency and remove duplicates element.', () => {
    expect(freqSort(["a", "z", "z", "z", "b", "b", "z"])).toEqual([ 'z', 'b', 'a' ]);
    expect(freqSort(["m", "a", "ñ", "a", "n", "a", "ñ"])).toEqual(["a", "ñ", "m", "n"]);
  });
});
