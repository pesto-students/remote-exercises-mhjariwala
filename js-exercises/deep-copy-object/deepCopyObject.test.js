import { deepCopyObject } from './deepCopyObject';

describe('deepCopyObject', () => {
  it('returns a deep copy of given object', () => {
    const myObj = {
      subObj: {
        key: 'value',
      },
    };

    const yourObj = deepCopyObject(myObj);

    yourObj.subObj.key = 'new value';

    expect(yourObj.subObj.key).toEqual('new value');
    expect(myObj.subObj.key).toEqual('value');
  });

  it('returns a result of comparison of object property.', () => {
    const laptop = {
      name: 'Lenovo Flex',
      brand: 'Lenovo',
      variants: [
        {
          size: '13 inch',
          ram: '8 GB',
          ssd: '512 GB',
          price: 50000
        },
        {
          size: '15 inch',
          ram: '16 GB',
          ssd: '512 GB',
          price: 60000
        }]
    };

    const clonedLaptopObj = deepCopyObject(laptop);

    expect(laptop.variants === clonedLaptopObj.variants).toBe(false);
  });

  it('returns copy of other data types', () => {
    expect(deepCopyObject(4)).toEqual(4);
    expect(deepCopyObject('string!')).toEqual('string!');
    expect(deepCopyObject(true)).toBe(true);
    expect(deepCopyObject(null)).toBeNull();
  });
});
