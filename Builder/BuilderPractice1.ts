type EngineType = "V6" | "V8" | "Electric";
type TransmissionType = "Manual" | "Automatic";
type WheelType = "Alloy" | "Steel";
type InteriorType = "Leather" | "Fabric";
export class Car {
  private _engine: EngineType;
  private _transmission: TransmissionType;
  private _wheel: WheelType;
  private _interior: InteriorType;

  public set engine(engine: EngineType) {
    this._engine = engine;
  }

  public set transmission(transmission: TransmissionType) {
    this._transmission = transmission;
  }

  public set wheel(wheel: WheelType) {
    this._wheel = wheel;
  }

  public set interior(interior: InteriorType) {
    this._interior = interior;
  }
  public output(): void {
    console.log("Engine - " + this._engine);
    console.log("Transmission - " + this._transmission);
    console.log("Wheel - " + this._wheel);
    console.log("Interior- " + this._interior);
  }
}

class CarBuilder {
  protected car = new Car();
  get engine(): EngineBuilder {
    return new EngineBuilder(this.car);
  }
  get wheel(): WheelBuilder {
    return new WheelBuilder(this.car);
  }
  get interior(): InteriorBuilder {
    return new InteriorBuilder(this.car);
  }
  get transmission(): TransmissionBuilder {
    return new TransmissionBuilder(this.car);
  }
  build(): Car {
    return this.car;
  }
}

class EngineBuilder extends CarBuilder {
  constructor(car: Car) {
    super();
    this.car = car;
  }
  setEngine(engine: EngineType): EngineBuilder {
    this.car.engine = engine;
    return this;
  }
}

class WheelBuilder extends CarBuilder {
  constructor(car: Car) {
    super();
    this.car = car;
  }
  setWheel(wheel: WheelType): WheelBuilder {
    this.car.wheel = wheel;
    return this;
  }
}

class InteriorBuilder extends CarBuilder {
  constructor(car: Car) {
    super();
    this.car = car;
  }
  setInterior(interior: InteriorType): InteriorBuilder {
    this.car.interior = interior;
    return this;
  }
}

class TransmissionBuilder extends CarBuilder {
  constructor(car: Car) {
    super();
    this.car = car;
  }
  setTransmission(transmission: TransmissionType): TransmissionBuilder {
    this.car.transmission = transmission;
    return this;
  }
}

const carBuild = new CarBuilder().engine
  .setEngine("Electric")
  .interior.setInterior("Leather")
  .wheel.setWheel("Steel")
  .transmission.setTransmission("Automatic")
  .build();

console.log(carBuild);
