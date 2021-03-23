"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var package_1 = require("./package");
describe('cpuInfo', function () {
    it('is a function', function () {
        expect(typeof package_1.cpuInfo).toEqual('function');
    });
    it('returns an object of the shape {model, memory, cpus}', function () {
        var actual = Object.keys(package_1.cpuInfo()).sort();
        var expected = ['model', 'memory', 'cpus'].sort();
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=package.spec.js.map