class RoundHole {
  _radius: number = 0;
  constructor(radius: number) {
    this._radius = radius;
  }
  public get radius(): number {
    return this._radius;
  }

  public fitCheck(cyliner: Cylinder): boolean {
    return this.radius >= cyliner.radius;
  }
}

class Cylinder {
  _radius: number;
  constructor(radius: number) {
    this._radius = radius;
  }
  get radius(): number {
    return this._radius;
  }
}

class Square {
  _width: number;
  constructor(width: number) {
    this._width = width;
  }
  get width(): number {
    return this._width;
  }
}

class squareAdapter extends Cylinder {
  square: Square;
  constructor(square: Square) {
    super(Math.sqrt((square.width / 2) ** 2 * 2));
    this.square = square;
  }
  get radius(): number {
    return Math.sqrt((this.square.width / 2) ** 2 * 2);
  }
}

let roundedhole = new RoundHole(5);
let cyliner = new Cylinder(5);

let square = new Square(10);
let squareadpt = new squareAdapter(square);
console.log(roundedhole.fitCheck(cyliner));
console.log(roundedhole.fitCheck(squareadpt));
