abstract class TakePicture {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSpia(): void;
  getReelTime(): number {
    return 8;
  }
}

class Insta extends TakePicture {
  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: number
  ) {
    super(cameraMode, filter);
  }
  getSpia(): void {}
}
const test = new Insta("test", "test", 3);
test.getReelTime();
