import {cpuInfo} from './package';

describe('cpuInfo', () => {
    it('is a function', () => {
        expect(typeof cpuInfo).toEqual('function');
    });
    it('returns an object of the shape {model, memory, cpus}', () => {
        const actual = Object.keys(cpuInfo()).sort();
        const expected = ['model', 'memory', 'cpus'].sort();
        expect(actual).toEqual(expected);
    });
});
