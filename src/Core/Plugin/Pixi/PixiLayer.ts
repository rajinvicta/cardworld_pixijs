import * as PIXI from "pixi.js"
import Resource from "../../Data/Resource";
import type { Dict } from '@pixi/utils';

class PixiLayer {
  private _app: PIXI.Application | null;

  constructor() {
    this._app = null;
  }

  get renderer(): PIXI.Renderer | PIXI.AbstractRenderer | null {
    if (this._app) {
      return this._app.renderer;
    } else {
      return null;
    }
  }

  get stage(): PIXI.Container | null {
    if (this._app) {
      return this._app.stage;
    } else {
      return null;
    }
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

  public createContainer(): PIXI.Container {
    return new PIXI.Container();
  }

  public createParticleContainer(
    maxSize: number = 1500,
    properties: PIXI.IParticleProperties = {},
    batchSize?: number,
    autoResize?: boolean
  ): PIXI.ParticleContainer {
    return new PIXI.ParticleContainer(maxSize, properties, batchSize, autoResize);
  }

  public addObject(container: PIXI.Container, child: any) {
    container.addChild(child);
  }

  public removeObject(container: PIXI.Container, child: any) {
    container.removeChild(child);
  }

  public addImages(imgList: Resource[]) {
    this._addResources(imgList);
  }

  public addAtlases(atlasList: Resource[]) {
    this._addResources(atlasList);
  }

  public async downloadResources(onProgress: Function, onComplete: Function): Promise<Dict<PIXI.LoaderResource>> {
    return new Promise((resolve: Function, reject: Function) => {
      PIXI.Loader.shared.onProgress.once(() => {
        onProgress(PIXI.Loader.shared.progress);
      });

      PIXI.Loader.shared.load((loader: PIXI.Loader, resources: Dict<PIXI.LoaderResource>) => {
        resolve(resources);

        onComplete();
      });
    });
  }

  private _addResources(resList: Resource[]) {
    for (let c = 0; c < resList.length; c++) {
      let name = resList[c].name;
      let url = resList[c].url;

      PIXI.Loader.shared.add(name, url);
    }
  }
}

export default PixiLayer;