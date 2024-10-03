class MonoState {
  private static data1: string;
  private static data2: string;
  constructor() {}
  public set data1(input: string) {
    MonoState.data1 = input;
  }
  public get data1(): string {
    return MonoState.data1;
  }
  public set data2(input: string) {
    MonoState.data2 = input;
  }
  public get data2(): string {
    return MonoState.data2;
  }
}

const instance1 = new MonoState();
const instance2 = new MonoState();
instance1.data1 = "test1";
instance1.data2 = "test2";
console.log(instance1.data1);
console.log(instance1.data2);
instance2.data2 = "HAHA";
console.log(instance1.data1);
console.log(instance1.data2);
console.log(instance2.data1);
console.log(instance2.data2);
