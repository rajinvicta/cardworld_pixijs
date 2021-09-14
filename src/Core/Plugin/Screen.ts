import IGameObject from './IGameObject';
import IScreen from './IScreen';
import PixiLayer from './Pixi/PixiLayer';

class Screen implements IScreen {
  private _pixiLayer: PixiLayer;

  constructor(pixiLayer: PixiLayer) {
    this._pixiLayer = pixiLayer;
  }

  public startRenderer(width: number, height: number, antialias: boolean, transparent: boolean) {
    this._pixiLayer.createApplication(width, height, antialias, transparent);
  }

  public createContainer(
    particleMode: boolean = false,
    maxSize: number = 1500,
    properties: any = {},
    batchSize?: number,
    autoResize?: boolean
  ): any {
    if (particleMode) {
      return this._pixiLayer.createParticleContainer(maxSize, properties, batchSize, autoResize);
    } else {
      return this._pixiLayer.createContainer();
    }
  }

  public createSprite(sheet: string, frame?: string): IGameObject {
    return <IGameObject><unknown>this._pixiLayer.createSprite(sheet, frame);
  }
}

export default Screen;