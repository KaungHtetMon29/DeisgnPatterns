abstract class FileSystemComponent {
  public parent!: FileSystemComponent | null;
  public setparent(input: FileSystemComponent | null) {
    this.parent = input;
  }
  public getparent(): FileSystemComponent | null {
    return this.parent;
  }
  public setchild(input: FileSystemComponent) {}
  public removechild(input: FileSystemComponent) {}
  abstract operation(): string;
}
class CompositeFileSystem extends FileSystemComponent {
  protected child: FileSystemComponent[] = [];
  public setchild(input: FileSystemComponent): void {
    this.child.push(input);
    input.setparent(this);
  }
  public removechild(input: FileSystemComponent): void {
    let index = this.child.indexOf(input);
    this.child.splice(index, 1);
    input.setparent(null);
  }
  operation(): string {
    let filelist = [];
    for (let child of this.child) {
      filelist.push(child.operation());
    }
    return `File ${filelist.join("+")}`;
  }
}
const subfile = new CompositeFileSystem();
const file = new CompositeFileSystem();
file.setchild(subfile);
const directory = new CompositeFileSystem();
directory.setchild(file);
directory.setchild(file);
console.log(file.operation());
