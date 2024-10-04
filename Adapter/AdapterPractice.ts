interface ImageProcessor {
  processImage(fileName: string): void;
}

class JPEGProcessor implements ImageProcessor {
  processImage(fileName: string): void {
    console.log("JPEG filename " + fileName);
  }
}

class PNGProcessor {
  processPNG(filename: string): void {
    console.log("PNG filename " + filename);
  }
}

class PNGProcessAdapter extends JPEGProcessor {
  private _png: PNGProcessor;
  constructor(png: PNGProcessor) {
    super();
    this._png = png;
  }
  processImage(fileName: string): void {
    this._png.processPNG(fileName);
  }
}

let jpgprocessor = new JPEGProcessor();
jpgprocessor.processImage("JPG");
let pngProcessor = new PNGProcessor();
let pngProcessorAdapter = new PNGProcessAdapter(pngProcessor);
pngProcessorAdapter.processImage("PNG");
