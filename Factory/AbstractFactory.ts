import * as readline from "readline";
type Tdrinkpowder = "tea" | "milk" | "stawberry";
type Twatertype = "cold" | "hot";
type Tdrinktype = "cold" | "hot";
enum Edrinksize {
  L = 0.8,
  M = 0.6,
  S = 0.4,
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
abstract class Drinks {
  abstract wateramount: number;
  abstract watertype: Twatertype;
  abstract powder: Tdrinkpowder;
  abstract drinktype: Tdrinktype;
  outputdrinktype(): void {
    console.log(
      `ingredients =${this.powder}, ${this.watertype}, ${this.drinktype}`
    );
  }
}
class Milk extends Drinks {
  wateramount: number;
  watertype: Twatertype;
  powder: Tdrinkpowder;
  drinktype: Tdrinktype;
  constructor(
    wateramount: number,
    watertype: Twatertype,
    powder: Tdrinkpowder,
    drinktype: Tdrinktype
  ) {
    super();
    this.drinktype = drinktype;
    this.powder = powder;
    this.wateramount = wateramount;
    this.watertype = watertype;
  }
}

class Tea extends Drinks {
  wateramount: number;
  watertype: Twatertype;
  powder: Tdrinkpowder;
  drinktype: Tdrinktype;
  constructor(
    wateramount: number,
    watertype: Twatertype,
    powder: Tdrinkpowder,
    drinktype: Tdrinktype
  ) {
    super();
    this.drinktype = drinktype;
    this.powder = powder;
    this.wateramount = wateramount;
    this.watertype = watertype;
  }
}

abstract class Drink_Factory<T> {
  abstract serve(
    wateramount: number,
    watertype: Twatertype,
    powder: Tdrinkpowder,
    drinktype: Tdrinktype
  ): T;
  prepareDrink() {
    return "Your drink is served";
  }
}

class TeaFactory extends Drink_Factory<Drinks> {
  serve(
    wateramount: number,
    watertype: Twatertype,
    powder: Tdrinkpowder,
    drinktype: Tdrinktype
  ): Drinks {
    return new Tea(wateramount, watertype, powder, drinktype);
  }
}
class MilkFactory extends Drink_Factory<Drinks> {
  serve(
    wateramount: number,
    watertype: Twatertype,
    powder: Tdrinkpowder,
    drinktype: Tdrinktype
  ): Drinks {
    return new Milk(wateramount, watertype, powder, drinktype);
  }
}

class Consumer {
  takeinput() {
    return new Promise((cb, err) => {});
  }
  choose(
    drink: Tdrinkpowder,
    drinksize: Edrinksize,
    drinkType: Tdrinktype
  ): Drinks | undefined {
    switch (drink as Tdrinkpowder) {
      case "milk":
        return new MilkFactory().serve(drinksize, drinkType, drink, drinkType);
      case "tea":
        return new TeaFactory().serve(drinksize, drinkType, drink, drinkType);
    }
    // switch (drink as Tdrinkpowder) {
    //   case "milk":
    //     return new MilkFactory().serve(drinksize, drinkType, drink, drinkType);
    //     break;
    //   case "tea":
    //     return new TeaFactory().serve(drinksize, drinkType, drink, drinkType);
    //     break;
    // }
  }
}
const c = new Consumer();

const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => rl.question(question, resolve));
};

(async () => {
  let drink: Tdrinkpowder = "tea";
  let drinkType: Tdrinktype = "cold";
  let drinksize: Edrinksize = Edrinksize.S;
  const drinkAnswer = await askQuestion(
    `Choose Drink types.
        1.Milk
        2.Tea
        `
  );
  switch (drinkAnswer) {
    case "Milk":
      drink = "milk";
      break;
    case "Tea":
      drink = "tea";
      break;
  }

  const typeAnswer = await askQuestion("COLD or HOT? C/H");
  switch (typeAnswer) {
    case "C":
      drinkType = "cold";
      break;
    case "H":
      drinkType = "hot";
      break;
  }

  const sizeAnswer = await askQuestion("Drink Size? L/M/H");
  switch (sizeAnswer) {
    case "L":
      drinksize = Edrinksize.L;
      break;
    case "M":
      drinksize = Edrinksize.M;
      break;
    case "S":
      drinksize = Edrinksize.S;
      break;
  }
  console.log(c.choose(drink, drinksize, drinkType));
  rl.close();
})();
