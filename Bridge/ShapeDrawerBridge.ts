namespace ShapeDrawerBridge {
  export abstract class Shape {
    protected color: Icolor;
    constructor(color: Icolor) {
      this.color = color;
    }
    abstract draw(): void;
  }
  export class Rectangle extends Shape {
    draw(): void {
      console.log("Drawing " + this.color.color + " Rectangle");
    }
  }
  export class Circle extends Shape {
    draw(): void {
      console.log("Drawing " + this.color.color + " Circle");
    }
  }
  export interface Icolor {
    get color(): string;
    set color(clr: string);
  }
  export class colorRed implements Icolor {
    private _color: string;
    get color(): string {
      return this._color;
    }
    set color(clr: string) {
      this._color = clr;
    }
  }
  export class colorGreen implements Icolor {
    private _color: string;
    get color(): string {
      return this._color;
    }
    set color(clr: string) {
      this._color = clr;
    }
  }
}

let redclr = new ShapeDrawerBridge.colorRed();
redclr.color = "red";
let greenclr = new ShapeDrawerBridge.colorGreen();
greenclr.color = "green";

let Circle = new ShapeDrawerBridge.Circle(redclr);
let Circle1 = new ShapeDrawerBridge.Circle(greenclr);
Circle.draw();
Circle1.draw();
