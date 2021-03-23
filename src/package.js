"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpuInfo = void 0;
var os_1 = require("os");
var colors_1 = require("./colors");
var areSame = function (cpus, key) { return cpus
    .map(function (c) { return c[key]; })
    .every(function (x) { return x === cpus[0][key]; }); };
var areAllModelSame = function (cpus) { return areSame(cpus, 'model'); };
function currentMemoryUsage() {
    var total = os_1.totalmem();
    var free = os_1.freemem(), freepc = Math.floor(free / total * 100);
    var used = total - free, usedpc = Math.ceil(used / total * 100);
    return {
        free: free, freepc: freepc, total: total, used: used, usedpc: usedpc,
        ks: { free: free / 1024, used: used / 1024, total: total / 1024 },
        ms: { free: free / 1024 / 1024, used: used / 1024 / 1024, total: total / 1024 / 1024 },
        gs: { free: free / 1024 / 1024 / 1024, used: used / 1024 / 1024 / 1024, total: total / 1024 / 1024 / 1024 },
        bar: "" + colors_1.red(Array(usedpc).fill('-').join('')) + colors_1.green(Array(freepc).fill('-').join(''))
    };
}
function cpuInfo() {
    return cpuInfoModel(os_1.cpus());
}
exports.default = cpuInfo;
exports.cpuInfo = cpuInfo;
function cpuInfoModel(data) {
    var shouldRemoveModel = areAllModelSame(data);
    var memory = currentMemoryUsage();
    var cpus = data.map(function (_a) {
        var times = _a.times;
        return times;
    })
        .map(function (_a) {
        var user = _a.user, sys = _a.sys, idle = _a.idle;
        return ({ user: user, sys: sys, idle: idle });
    });
    return {
        model: shouldRemoveModel ? data[0].model : 'Many model.',
        memory: memory,
        cpus: cpus
    };
}
//# sourceMappingURL=package.js.map