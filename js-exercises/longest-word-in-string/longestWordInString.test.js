import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  it('should return null if string have only space or string is not provided', () => {
    expect(longestWordInString('    ')).toBe(null)
    expect(longestWordInString()).toBe(null)
  })

  it('should return longest word', () => {
    const sentence = 'All the people got afraid after spotting Tiger in the street';
    
    expect(longestWordInString(sentence)).toBe('spotting')
  });
});
