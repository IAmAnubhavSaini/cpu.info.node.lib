import {CPU, MEMORY, MODEL} from './types';
import {cpus, freemem, totalmem} from 'os';
import {red, green} from './colors';

const areSame = (cpus: any[], key: string) => cpus
    .map(c => c[key])
    .every(x => x === cpus[0][key]);

const areAllModelSame = (cpus: any[]) => areSame(cpus, 'model');


function currentMemoryUsage(): MEMORY {
    const total = totalmem();
    const free = freemem(), freepc = Math.floor(free / total * 100);
    const used = total - free, usedpc = Math.ceil(used / total * 100);
    return {
        free, freepc, total, used, usedpc,
        ks: {free: free / 1024, used: used / 1024, total: total / 1024},
        ms: {free: free / 1024 / 1024, used: used / 1024 / 1024, total: total / 1024 / 1024},
        gs: {free: free / 1024 / 1024 / 1024, used: used / 1024 / 1024 / 1024, total: total / 1024 / 1024 / 1024},
        bar: `${red(Array(usedpc).fill('-').join(''))}${green(Array(freepc).fill('-').join(''))}`
    };
}


export default function cpuInfo(): MODEL {
    return cpuInfoModel(cpus());
}

function cpuInfoModel(data: any): MODEL {
    const shouldRemoveModel = areAllModelSame(data);
    const memory: MEMORY = currentMemoryUsage();
    const cpus: CPU[] = data.map(({times}: { times: CPU }) => times)
        .map(({user, sys, idle}: CPU) => ({user, sys, idle}));
    return {
        model: shouldRemoveModel ? data[0].model : 'Many model.',
        memory,
        cpus
    };
}

export {
    cpuInfo
};
