abstract class Component {
  public parent!: Component | null;
  public setParent(input: Component | null) {
    this.parent = input;
  }
  public getParent(): Component | null {
    return this.parent;
  }
  public add(input: Component): void {}
  public remove(input: Component): void {}
  public isComposite(): boolean {
    return false;
  }
  public abstract operation(): void;
}
class leaf extends Component {
  public operation(): void {
    console.log("leaf");
  }
}
class Composite extends Component {
  private child: Component[] = [];
  public add(input: Component): void {
    this.child.push(input);
    input.setParent(this);
  }
  public remove(input: Component): void {
    let index = this.child.indexOf(input);
    this.child.splice(index, 1);
    input.setParent(null);
  }
  public isComposite(): boolean {
    return true;
  }
  public operation(): void {
    for (const child of this.child) {
      child.operation();
    }
  }
}

const simple = new leaf();
const tree = new Composite();
const branch = new Composite();
branch.add(new leaf());
branch.add(new leaf());
tree.add(branch);
simple.operation();
branch.operation();
tree.operation();
