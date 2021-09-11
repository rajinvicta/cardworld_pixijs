import Config from './Control/Config';
import IScreen from './Plugin/IScreen';

class Game {
  private _screen: IScreen;
  private _config: Config;

  constructor(screen: IScreen, config: Config) {
    this._screen = screen;
    this._config = config;
  }

  public startGame() {
    this._screen.startRenderer(this._config.width, this._config.height, true, false);
  }
}

export default Game;