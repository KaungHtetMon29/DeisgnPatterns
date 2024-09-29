"use strict";
class SystemUnit {
    constructor() {
        this._cpu = "";
        this._ram = "";
        this._gpu = "";
        this._powersupply = "";
    }
}
class ComputerBaseBuilder {
    constructor() {
        this.systemunit = new SystemUnit();
    }
    get cpu() {
        return new CpuBuider(this.systemunit);
    }
    get gpu() {
        return new GpuBuilder(this.systemunit);
    }
    get ram() {
        return new RamBuilder(this.systemunit);
    }
    get powersupply() {
        return new powersupplyBuilder(this.systemunit);
    }
    build() {
        return this.systemunit;
    }
}
class CpuBuider extends ComputerBaseBuilder {
    constructor(systemunit) {
        super();
        this.systemunit = systemunit;
    }
    setcpu(cpu) {
        this.systemunit._cpu = cpu;
        return this;
    }
}
class RamBuilder extends ComputerBaseBuilder {
    constructor(systemunit) {
        super();
        this.systemunit = systemunit;
    }
    setram(ram) {
        this.systemunit._ram = ram;
        return this;
    }
}
class GpuBuilder extends ComputerBaseBuilder {
    constructor(systemunit) {
        super();
        this.systemunit = systemunit;
    }
    setgpu(gpu) {
        this.systemunit._gpu = gpu;
        return this;
    }
}
class powersupplyBuilder extends ComputerBaseBuilder {
    constructor(systemunit) {
        super();
        this.systemunit = systemunit;
    }
    setpowersupply(powersupply) {
        this.systemunit._powersupply = powersupply;
        return this;
    }
}
const pc = new ComputerBaseBuilder();
const computer = pc.cpu
    .setcpu("Core i7")
    .gpu.setgpu("RTX 4080 12GB")
    .ram.setram("DDR4 Desktop 32GB")
    .powersupply.setpowersupply("Corsiar")
    .build();
console.log(computer);
