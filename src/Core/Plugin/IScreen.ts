import IGameObject from "./IGameObject";

interface IScreen {
  startRenderer(width: number, height: number, antialias: boolean, transparent: boolean): void;

  createContainer(
    particleMode: boolean,
    maxSize?: number,
    properties?: any,
    batchSize?: number,
    autoResize?: boolean
  ): any;

  createSprite(sheet: string, frame?: string): IGameObject;
  createText(text: string, style: any): IGameObject;
}

export default IScreen;