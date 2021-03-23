import {red, green} from './colors';

describe('colors', () => {
    it('red is a function and returns a string', () => {
        const expectedType = 'string';
        const expectedValue = '\x1b[31mRED\x1b[0m';
        const actual = red('RED');
        const actualType = typeof actual;
        expect(typeof red).toEqual('function');
        expect(actual).toEqual(expectedValue);
        expect(actualType).toEqual(expectedType);
    });
    it('green is a function and returns a string', () => {
        const expectedType = 'string';
        const expectedValue = '\x1b[32mGREEN\x1b[0m';
        const actual = green('GREEN');
        const actualType = typeof actual;
        expect(typeof green).toEqual('function');
        expect(actual).toEqual(expectedValue);
        expect(actualType).toEqual(expectedType);
    });
});
