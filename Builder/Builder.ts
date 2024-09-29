class Computer {
  private _cpu: string;
  private _ram: string;
  private _gpu: string;
  private _wifimodule: string;

  constructor() {
    this._cpu = "";
    this._ram = "";
    this._gpu = "";
    this._wifimodule = "";
  }

  public get cpu(): string {
    return this._cpu;
  }
  public set cpu(cpuname: string) {
    this._cpu = cpuname;
  }

  public set ram(ramname: string) {
    this._ram = ramname;
  }
  public get ram(): string {
    return this._ram;
  }

  public set wifimodule(wifimodulename: string) {
    this._wifimodule = wifimodulename;
  }
  public get wifimodule(): string {
    return this._wifimodule;
  }
}
interface IBuilder {
  buildCPU(cpuname: string): ComputerBuilder;
  buildRAM(ramname: string): ComputerBuilder;
  buildWIFI(wifiname: string): ComputerBuilder;
  buildResult(): Computer;
}

class ComputerBuilder implements IBuilder {
  private _computer = new Computer();
  constructor() {}

  buildCPU(cpuname: string): ComputerBuilder {
    this._computer.cpu = cpuname;
    return this;
  }
  buildRAM(ramname: string): ComputerBuilder {
    this._computer.ram = ramname;
    return this;
  }
  buildWIFI(wifiname: string): ComputerBuilder {
    this._computer.wifimodule = wifiname;
    return this;
  }
  buildResult(): Computer {
    const RESULT_COMPUTER: Computer = new Computer();
    RESULT_COMPUTER.cpu = this._computer.cpu;
    RESULT_COMPUTER.ram = this._computer.ram;
    RESULT_COMPUTER.wifimodule = this._computer.wifimodule;
    return RESULT_COMPUTER;
  }
}
let builder: ComputerBuilder = new ComputerBuilder();
const gaming: Computer = builder
  .buildCPU("INTEL CORE I9")
  .buildRAM("DDR4 32GB")
  .buildWIFI("Realteak 8GHz")
  .buildResult();
console.log(gaming);