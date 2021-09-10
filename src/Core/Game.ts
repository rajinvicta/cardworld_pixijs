import Kernel from './Kernel/Kernel';
import Config from './Kernel/Config';

class Game {
  private _kernel: Kernel;
  private _config: Config;

  constructor(kernel: Kernel, config: Config) {
    this._kernel = kernel;
    this._config = config;
  }

  public startGame() {
    this._kernel.createRenderer(this._config.width, this._config.height, true, false);
  }
}

export default Game;