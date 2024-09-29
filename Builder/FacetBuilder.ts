class SystemUnit {
  public _cpu: string = "";
  public _ram: string = "";
  public _gpu: string = "";
  public _powersupply: string = "";
}

class ComputerBaseBuilder {
  protected systemunit = new SystemUnit();
  public get cpu(): CpuBuider {
    return new CpuBuider(this.systemunit);
  }
  public get gpu(): GpuBuilder {
    return new GpuBuilder(this.systemunit);
  }
  public get ram(): RamBuilder {
    return new RamBuilder(this.systemunit);
  }
  public get powersupply(): powersupplyBuilder {
    return new powersupplyBuilder(this.systemunit);
  }
  build(): SystemUnit {
    return this.systemunit;
  }
}

class CpuBuider extends ComputerBaseBuilder {
  public constructor(systemunit: SystemUnit) {
    super();
    this.systemunit = systemunit;
  }

  public setcpu(cpu: string): CpuBuider {
    this.systemunit._cpu = cpu;
    return this;
  }
}
class RamBuilder extends ComputerBaseBuilder {
  public constructor(systemunit: SystemUnit) {
    super();
    this.systemunit = systemunit;
  }
  public setram(ram: string): RamBuilder {
    this.systemunit._ram = ram;
    return this;
  }
}

class GpuBuilder extends ComputerBaseBuilder {
  public constructor(systemunit: SystemUnit) {
    super();
    this.systemunit = systemunit;
  }
  public setgpu(gpu: string): GpuBuilder {
    this.systemunit._gpu = gpu;
    return this;
  }
}

class powersupplyBuilder extends ComputerBaseBuilder {
  public constructor(systemunit: SystemUnit) {
    super();
    this.systemunit = systemunit;
  }
  public setpowersupply(powersupply: string): powersupplyBuilder {
    this.systemunit._powersupply = powersupply;
    return this;
  }
}
const pc = new ComputerBaseBuilder();
const computer=pc.cpu
.setcpu("Core i7")
.gpu.setgpu("RTX 4080 12GB")
.ram.setram("DDR4 Desktop 32GB")
.powersupply.setpowersupply("Corsiar")
.build()
console.log(
    computer
);
