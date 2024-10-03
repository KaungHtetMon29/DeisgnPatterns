interface Geometry {
  clone(): Geometry;
  findArea(): number;
}

//Concrete Prototype
class Rectangle implements Geometry {
  width: number = 0;
  height: number = 0;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  clone(): Geometry {
    return new Rectangle(this.width, this.height);
  }
  findArea(): number {
    return this.width * this.height;
  }
}

class GeometryClient {
  private _geometryPrototype: Geometry;
  constructor(gp: Geometry) {
    this._geometryPrototype = gp;
  }
  public createGeo(): Geometry {
    return this._geometryPrototype.clone();
  }
}

let test = new Rectangle(1, 4);
// let test2 = test;
// test2.width = 10;
// console.log(test);
// console.log(test2);

let clne = new GeometryClient(test).createGeo();
test.height = 1000;
let clne2 = new GeometryClient(test).createGeo();

console.log(clne);
console.log(clne2);
