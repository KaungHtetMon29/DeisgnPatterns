class MP3Player {
  public playmusic(mp3file: MP3File) {
    console.log(mp3file.outputFileTypes);
  }
}
type mp3 = "Include only sound";
type mp4 = "Include both sound and video";
class MP3File {
  _filename: string;
  constructor(filename: string) {
    this._filename = filename;
  }
  outputFileTypes(): string {
    return "Include only sound " + this._filename;
  }
}

class MP4File {
  _filename: string;
  _includevide: boolean = true;
  constructor(filename: string) {
    this._filename = filename;
  }
  includeVideo() {
    return "include video";
  }
}

class MP4FileAdapter extends MP3File {
  private _mp4file: MP4File;
  constructor(mp4file: MP4File) {
    super(mp4file._filename);
    this._mp4file = mp4file;
  }

  outputFileTypes(): string {
    return "Include both sound and video " + this._mp4file._filename;
  }
}

let mp3player = new MP3Player();
let mp3file = new MP3File("kaunghtetmon");
let mp4file = new MP4File("khmmp4");
let mp4adpt = new MP4FileAdapter(mp4file);
mp3player.playmusic(mp3file);
mp3player.playmusic(mp4adpt);
