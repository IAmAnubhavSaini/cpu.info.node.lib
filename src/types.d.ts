declare type MEMORY = {
    free: number;
    freepc: number;
    total: number;
    used: number;
    usedpc: number;
    ks: any;
    ms: any;
    gs: any;
    bar: string;
};
declare type CPU = {
    user: number;
    sys: number;
    idle: string;
};
declare type MODEL = {
    model: string;
    memory: MEMORY;
    cpus: CPU[];
};
export { CPU, MEMORY, MODEL };
//# sourceMappingURL=types.d.ts.map