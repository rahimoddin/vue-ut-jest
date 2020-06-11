import {add} from '@/utils/math'

//test suite
describe('add', () => {
    test('returns addition of 2 given numbers', () => {
        const num1 = 10;
        const num2 = 20;

        expect(add(num1, num2)).toEqual(30);
    })

    test('returns 0 if no number is passed', () => {
        expect(add()).toEqual(0)
    })

})

describe('substract', () => {
    test('returns addition of 2 given numbers', () => {
        const num1 = 10;
        const num2 = 20;

        expect(add(num1, num2)).toEqual(30);
    })

    test('returns 0 if no number is passed', () => {
        expect(add()).toEqual(0)
    })

})
