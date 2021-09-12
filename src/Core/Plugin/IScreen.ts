interface IScreen {
  startRenderer(width: number, height: number, antialias: boolean, transparent: boolean): void;

  createContainer(
    particleMode: boolean,
    maxSize: number,
    properties: any,
    batchSize?: number,
    autoResize?: boolean
  ): any;
}

export default IScreen;