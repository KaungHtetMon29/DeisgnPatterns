"use strict";
class Computer {
    constructor() {
        this._cpu = "";
        this._ram = "";
        this._gpu = "";
        this._wifimodule = "";
    }
    get cpu() {
        return this._cpu;
    }
    set cpu(cpuname) {
        this._cpu = cpuname;
    }
    set ram(ramname) {
        this._ram = ramname;
    }
    get ram() {
        return this._ram;
    }
    set wifimodule(wifimodulename) {
        this._wifimodule = wifimodulename;
    }
    get wifimodule() {
        return this._wifimodule;
    }
}
class ComputerBuilder {
    constructor() {
        this._computer = new Computer();
    }
    buildCPU(cpuname) {
        this._computer.cpu = cpuname;
        return this;
    }
    buildRAM(ramname) {
        this._computer.ram = ramname;
        return this;
    }
    buildWIFI(wifiname) {
        this._computer.wifimodule = wifiname;
        return this;
    }
    buildResult() {
        const RESULT_COMPUTER = new Computer();
        RESULT_COMPUTER.cpu = this._computer.cpu;
        RESULT_COMPUTER.ram = this._computer.ram;
        RESULT_COMPUTER.wifimodule = this._computer.wifimodule;
        return RESULT_COMPUTER;
    }
}
let builder = new ComputerBuilder();
const gaming = builder
    .buildCPU("INTEL CORE I9")
    .buildRAM("DDR4 32GB")
    .buildWIFI("Realteak 8GHz")
    .buildResult();
console.log(gaming);
