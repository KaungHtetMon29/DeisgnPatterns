class RemoteDevice {
  protected device: IDevice;
  constructor(device: IDevice) {
    this.device = device;
  }
  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }
  volumeUp() {
    let volume = this.device.volume;
    this.device.volume = ++volume;
    console.log(volume);
  }
  volumeDown() {
    this.device.volume = --this.device.volume;
  }
  channelDown() {
    this.device.channel = --this.device.channel;
  }
  channelUp() {
    this.device.channel = ++this.device.channel;
  }
  showstats() {
    console.log(this.device);
  }
}
interface IDevice {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  get volume(): number;
  set volume(input: number);
  get channel(): number;
  set channel(input: number);
}
class Device implements IDevice {
  private _volume: number = 50;
  private _channel: number = 1;
  private _enable: boolean = false;
  constructor() {}
  public isEnabled(): boolean {
    return this._enable;
  }

  public enable(): void {
    this._enable = true;
    console.log("enabled");
  }

  public disable(): void {
    this._enable = false;
    console.log("disabled");
  }

  get volume(): number {
    return this._volume;
  }

  set volume(input: number) {
    this._volume = input;
  }

  get channel(): number {
    return this._channel;
  }

  set channel(input: number) {
    this._channel = input;
  }
}
let device = new Device();
let remote = new RemoteDevice(device);

remote.togglePower();
remote.channelUp();
remote.volumeUp();
remote.togglePower();
remote.showstats();
