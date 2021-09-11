import Config from './Control/Config';
import IScreen from './Plugin/IScreen';
import IGfxLoader from './Plugin/IGfxLoader';

class Game {
  private _screen: IScreen;
  private _config: Config;
  private _gfxLoader: IGfxLoader;

  constructor(screen: IScreen, gfxLoader: IGfxLoader, config: Config) {
    this._screen = screen;
    this._gfxLoader = gfxLoader;
    this._config = config;
  }

  public startGame() {
    this._screen.startRenderer(this._config.width, this._config.height, true, false);
  }
}

export default Game;