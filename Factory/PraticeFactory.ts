abstract class Hotdrink {
    abstract boilwater(): void;
    abstract blend(): void;
  static get factory():typeof DrinkFactory{
    return DrinkFactory;
  }
}
class Coffee extends Hotdrink {
  coffee_type: string;
  wateramount: number;
  sugaramount: number;
  condensedmilkamount: number;
  constructor(
    coffeetype: string,
    wateramount: number,
    sugaramount: number,
    condensedmilamount: number
  ) {
    super();
    this.coffee_type = coffeetype;
    this.condensedmilkamount = condensedmilamount;
    this.sugaramount = sugaramount;
    this.wateramount = wateramount;
  }
  boilwater(): void {
    console.log(
      "boiled water " +
        this.wateramount +
        "litre at 100 degree Celcius for 10 mins"
    );
  }
  blend(): void {
    console.log(
      "Add boilded water " +
        this.wateramount +
        "litre and put together with sugar amount " +
        this.sugaramount +
        " , condensed milk amount " +
        this.condensedmilkamount+
        " and add coffee type "+this.coffee_type+
        "and blend."
    );
  }
}


class DrinkFactory{
    
    static makeCoffee(coffeetype: string,
        wateramount: number,
        sugaramount: number,
        condensedmilamount: number): Coffee  {
        return new Coffee(coffeetype,
            wateramount,
            sugaramount,
            condensedmilamount);
    }
}

let p2=Coffee.factory.makeCoffee("americano",.5,1,1);
console.log(p2.blend());