class SingletonObj {
  private static instance: SingletonObj;
  private variable: number;
  constructor(variable: number) {
    //add some calculation here
    this.variable = variable;
  }
  static getInstance(variable: number) {
    if (!SingletonObj.instance) {
      SingletonObj.instance = new SingletonObj(variable);
    }
    return SingletonObj.instance;
  }
  public test() {
    console.log("this is test");
  }
}

let testSingleton = SingletonObj.getInstance(1);
//class instanced is already created with value 1 and thus it won't create new one for testSingleton2
let testSingleton2 = SingletonObj.getInstance(10);
console.log(testSingleton);
console.log(testSingleton2);
