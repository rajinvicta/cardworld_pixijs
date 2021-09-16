import EntityFactory from "../../Kernel/GameObjects/EntityFactory";

import Sprite from "../../Kernel/GameObjects/Sprite";
import Button from "../GameItems/Button";

import IScene from "../../Kernel/GameObjects/IScene";
import ISceneManager from "../../Plugin/ISceneManager";


class CardMode implements IScene {
  private _entityFactory: EntityFactory;
  private _sceneManager: ISceneManager;
  private _back: Button;
  private _background: Sprite;

  constructor(entityFactory: EntityFactory, sceneManager: ISceneManager, button: Button, sprite: Sprite) {
    this._entityFactory = entityFactory;
    this._sceneManager = sceneManager;

    this._back = button;

    this._background = sprite;
  }

  public async preload(): Promise<void> {

  }

  public create() {
    console.log("CardMode Level");
    this._initBackground();
    this._initButtons();
  }

  public update() {
    //console.log("updating Xd");
  }

  public shutdown() {

  }

  private _initBackground() {
    this._background = this._entityFactory.sprite(0, 0, 'preload', 'bg');
  }

  private  _initButtons() {
    this._back.init(25, 50, 'back_btn', () => {
      this._sceneManager.startScene('Menu');
    });
  }

}

export default CardMode;