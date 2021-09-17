class Config {
  constructor() {

  }

  get width(): number {
    return 1080;
  }

  get height(): number {
    return 1920;
  }

  get displayWidth(): number {
    return window.innerWidth;
  }

  get displayHeight(): number {
    return window.innerHeight;
  }
}

export default Config;