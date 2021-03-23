# @f0c1s/cpu.info.node.lib

A library to get CPU info in NodeJS | used in it's .sh version

## Usage

```javascript
var {cpuInfo} = require('@f0c1s/cpu.info.node.lib')
cpuInfo()
```
```shell
{
  model: 'Intel(R) Core(TM) i7-6500U CPU @ 2.50GHz',
  memory: {
    free: 737447936,
    freepc: 8,
    total: 8219721728,
    used: 7482273792,
    usedpc: 92,
    ks: { free: 720164, used: 7306908, total: 8027072 },
    ms: { free: 703.28515625, used: 7135.65234375, total: 7838.9375 },
    gs: {
      free: 0.6868019104003906,
      used: 6.968410491943359,
      total: 7.65521240234375
    },
    bar: '\x1B[31m--------------------------------------------------------------------------------------------\x1B[0m\x1B[32m--------\x1B[0m'
  },
  cpus: [
    { user: 1723370, sys: 356210, idle: 7918070 },
    { user: 1744630, sys: 370410, idle: 7833940 },
    { user: 1766280, sys: 359470, idle: 7890530 },
    { user: 1732290, sys: 354870, idle: 7894040 }
  ]
}
```
