interface IScreen {
  startRenderer(width: number, height: number, antialias: boolean, transparent: boolean): void;
}

export default IScreen;