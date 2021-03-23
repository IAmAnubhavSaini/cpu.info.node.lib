type MEMORY = {
    free: number
    freepc: number
    total: number
    used: number
    usedpc: number
    ks: any
    ms: any
    gs: any
    bar: string
}

type CPU = {
    user: number
    sys: number
    idle: string

}
type MODEL = {
    model: string
    memory: MEMORY
    cpus: CPU[]
}

export {
    CPU, MEMORY, MODEL
}
