import Config from './Control/Config';
import Loop from './Control/Loop';
import IScreen from './Plugin/IScreen';
import ISceneManager from './Plugin/ISceneManager';

import Loading from './Game/Scene/Loading';

class Game {
  private _config: Config;
  private _loop: Loop;
  private _screen: IScreen;
  private _sceneManager: ISceneManager;

  private _loading: Loading;
  

  constructor(config: Config, loop: Loop, screen: IScreen, sceneManager: ISceneManager, loading: Loading) {
    this._config = config;
    this._loop = loop;
    this._screen = screen;
    this._sceneManager = sceneManager;

    this._loading = loading;
  }

  public startGame() {
    this._screen.startRenderer(this._config.width, this._config.height, true, false);

    this._startLoop();
    this._initScenes();
    this._startFirstScene();
  }

  private _startLoop() {
    this._loop.start();
  }

  private _initScenes() {
    this._sceneManager.init();

    this._sceneManager.addScene('Loading', this._loading);
  }

  private _startFirstScene() {
    this._sceneManager.startScene('Loading');
  }
  
}

export default Game;