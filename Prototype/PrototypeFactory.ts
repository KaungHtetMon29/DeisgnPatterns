interface IGeoShapePrototype {
  clone(): IGeoShapePrototype;
}

class RectangleShape implements IGeoShapePrototype {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  clone(): IGeoShapePrototype {
    return new RectangleShape(this.width, this.height);
  }
}

class CircleShape implements IGeoShapePrototype {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  clone(): IGeoShapePrototype {
    return new CircleShape(this.radius);
  }
}

class PrototypeFactory {
  private _types: { [key: string]: IGeoShapePrototype } = {};

  public settypes(key: string, source: IGeoShapePrototype) {
    this._types[key] = source;
  }

  createclone(key: string): IGeoShapePrototype {
    return this._types[key].clone();
  }
}

let rec = new RectangleShape(2, 3);
let circle = new CircleShape(1);
let factory = new PrototypeFactory();
factory.settypes("circle", circle);
factory.settypes("rectangle", rec);
rec.width = 10;
let recclone1 = factory.createclone("rectangle");
rec.height = 200;
let recclone2 = factory.createclone("rectangle");
let circleclone1 = factory.createclone("circle");
console.log(recclone1);
console.log(recclone2);
