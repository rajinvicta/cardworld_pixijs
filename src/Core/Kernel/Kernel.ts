import IScreen from '../Plugin/IScreen';

class Kernel {
  private _screen: IScreen;

  constructor(screen: IScreen) {
    this._screen = screen;
  }

  public createRenderer(width: number, height: number, antialias: boolean = false, transparent: boolean = false) {
    this._screen.startRenderer(width, height, antialias, transparent);
  }
}

export default Kernel;