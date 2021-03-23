"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("./colors");
describe('colors', function () {
    it('red is a function and returns a string', function () {
        var expectedType = 'string';
        var expectedValue = '\x1b[31mRED\x1b[0m';
        var actual = colors_1.red('RED');
        var actualType = typeof actual;
        expect(typeof colors_1.red).toEqual('function');
        expect(actual).toEqual(expectedValue);
        expect(actualType).toEqual(expectedType);
    });
    it('green is a function and returns a string', function () {
        var expectedType = 'string';
        var expectedValue = '\x1b[32mGREEN\x1b[0m';
        var actual = colors_1.green('GREEN');
        var actualType = typeof actual;
        expect(typeof colors_1.green).toEqual('function');
        expect(actual).toEqual(expectedValue);
        expect(actualType).toEqual(expectedType);
    });
});
//# sourceMappingURL=colors.spec.js.map