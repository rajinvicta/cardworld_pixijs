import IAbstractGameObject from "./IAbstractGameObject";

interface IScreen {
  startRenderer(width: number, height: number, antialias: boolean, transparent: boolean): void;

  createContainer(
    particleMode: boolean,
    maxSize?: number,
    properties?: any,
    batchSize?: number,
    autoResize?: boolean
  ): any;

  createSprite(sheet: string, frame?: string): IAbstractGameObject;
  createText(text: string, style: any): IAbstractGameObject;
}

export default IScreen;