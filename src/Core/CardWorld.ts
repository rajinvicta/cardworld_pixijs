import Config from './Kernel/Control/Config';
import Loop from './Kernel/Control/Loop';
import IScreen from './Plugin/IScreen';
import ISceneManager from './Plugin/ISceneManager';

import Loading from './Game/Scene/Loading';
import Menu from './Game/Scene/Menu';
import CardMode from './Game/Scene/CardMode';
import MixMode from './Game/Scene/MixMode';
import FireMode from './Game/Scene/FireMode';

class CardWorld {
  private _config: Config;
  private _loop: Loop;
  private _screen: IScreen;
  private _sceneManager: ISceneManager;

  private _loading: Loading;
  private _menu: Menu;
  private _cardMode: CardMode;
  private _mixMode: MixMode;
  private _fireMode: FireMode;
  

  constructor(config: Config, loop: Loop, screen: IScreen, sceneManager: ISceneManager,
  loading: Loading, menu: Menu, cardMode: CardMode, mixMode: MixMode, fireMode: FireMode) {
    this._config = config;
    this._loop = loop;
    this._screen = screen;
    this._sceneManager = sceneManager;

    this._loading = loading;
    this._menu = menu;
    this._cardMode = cardMode;
    this._mixMode = mixMode;
    this._fireMode = fireMode;
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
    this._sceneManager.addScene('Menu', this._menu);
    this._sceneManager.addScene('CardMode', this._cardMode);
    this._sceneManager.addScene('MixMode', this._mixMode);
    this._sceneManager.addScene('FireMode', this._fireMode);
  }

  private _startFirstScene() {
    this._sceneManager.startScene('Loading');
  }
  
}

export default CardWorld;