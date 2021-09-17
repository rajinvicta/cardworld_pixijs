import EntityFactory from "../../Kernel/GameObjects/EntityFactory";

import Sprite from "../../Kernel/GameObjects/Sprite";
import Button from "../GameItems/Button";

import IScene from "../../Kernel/GameObjects/IScene";
import ISceneManager from "../../Plugin/ISceneManager";
import Background from "../GameItems/Background";


class FireMode implements IScene {
  private _entityFactory: EntityFactory;
  private _sceneManager: ISceneManager;
  private _back: Button;
  private _background: Background;

  constructor(entityFactory: EntityFactory, sceneManager: ISceneManager, button: Button, background: Background) {
    this._entityFactory = entityFactory;
    this._sceneManager = sceneManager;

    this._back = button;

    this._background = background;
  }

  public async preload(): Promise<void> {

  }

  public create() {
    console.log("FireMode Level");
    this._initBackground();
    this._initButtons();
  }

  public update() {
    //console.log("updating Xd");
  }

  public shutdown() {

  }

  private _initBackground() {
    this._background.init('main');
  }

  private  _initButtons() {
    this._back.init(25, 50, 'back_btn', () => {
      this._sceneManager.startScene('Menu');
    });
  }

}

export default FireMode;