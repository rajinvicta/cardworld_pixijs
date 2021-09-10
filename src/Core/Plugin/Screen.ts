import IScreen from './IScreen';
import PixiLayer from './Pixi/PixiLayer';

class Screen implements IScreen {
  private _pixiLayer: PixiLayer;

  constructor(pixiLayer: PixiLayer) {
    this._pixiLayer = pixiLayer;
  }

  startRenderer(width: number, height: number, antialias: boolean, transparent: boolean) {
    this._pixiLayer.createApplication(width, height, antialias, transparent);
  }
}

export default Screen;