import { map, filter, invert, merge, all, some } from './objectUtils';

describe('Object Utilities', () => {
    const obj = {
        one : 1,
        two : 2,
        three : 3,
        four: 4
    };

    test('map: should return transformed object', () => {
        const transformedObject = map(obj, ([key, value]) => value * 2);
        const expectedObject = {
            one : 2,
            two : 4,
            three : 6,
            four: 8
        };

        expect(transformedObject).toEqual(expectedObject)
    });

    test('invert: should return inverted object.', () => {
        const transformedObject = invert(obj);
        const expectedObject = {
            1 : 'one',
            2: 'two',
            3: 'three',
            4: 'four'
        };

        expect(transformedObject).toEqual(expectedObject)
    });

    test('merge: should return object which contain all the property of objects which are passed as paramerters.', () => {
        const personalDetails = {
            firstName : 'Mahek',
            lastName: 'Jariwala'
        };
        const professionalDetails = {
            workExperience: '3+',
            role: 'Frontend Developer'
        };
        const expectedObject = {
            firstName : 'Mahek',
            lastName: 'Jariwala',
            workExperience: '3+',
            role: 'Frontend Developer'
        };
        const mergedDetails = merge(personalDetails, professionalDetails);

        expect(mergedDetails).toEqual(expectedObject)
    });

    test('filter: should return object that contains property which value is passed against given callback.', () => {
        const transformedObject = filter(obj, ([key, value]) => value % 2 === 0);
        const expectedObject = {
            two : 2,
            four: 4
        };

        expect(transformedObject).toEqual(expectedObject)
    });

    test('all: should return true if all the properties of an object has truthy value.', () => {
        const result = all(obj, ([_, value]) => !!value);

        expect(result).toBe(true)
    });

    test('some: should return true if one of the property of an object has truthy value.', () => {
        const obj = {
            truthyValue: true,
            falsyValue: false,
            name: undefined
        };
        const result = some(obj, ([_, value]) => !value);

        expect(result).toBe(true)
    });
})