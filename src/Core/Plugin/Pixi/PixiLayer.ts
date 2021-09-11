import * as PIXI from "pixi.js"

class PixiLayer {
  private _app: PIXI.Application | null;

  constructor() {
    this._app = null;
  }

  public createApplication(width: number, height: number, antialias: boolean, transparent: boolean) {
    let alphaValue = 1;
    if (transparent) alphaValue = 0;

    let app = new PIXI.Application({
      width: width,
      height: height,
      antialias: antialias,
      backgroundAlpha: alphaValue
    });

    document.body.appendChild(app.view);

    this._app = app;
  }
}

export default PixiLayer;