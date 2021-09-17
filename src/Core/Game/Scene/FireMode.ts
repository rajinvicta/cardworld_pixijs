import EntityFactory from "../../Kernel/GameObjects/EntityFactory";

import Sprite from "../../Kernel/GameObjects/Sprite";
import Button from "../GameItems/Button";

import IScene from "../../Kernel/GameObjects/IScene";
import ISceneManager from "../../Plugin/ISceneManager";
import Background from "../GameItems/Background";
import {Positions} from "../../Kernel/Data/ScaleMode";


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
    this._back.init(-100, 150, 'back_btn', () => {
      this._sceneManager.startScene('Menu');
    });
    this._back.sprite.position.anchorX = 1;
    this._back.sprite.position.anchorY = 0.5;
    this._back.sprite.position.fitInsideContainer(false);
    this._back.sprite.position.setScaleMode(Positions.right, Positions.left, 1);
  }

}

export default FireMode;