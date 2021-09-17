import EntityFactory from "../../Kernel/GameObjects/EntityFactory";
import ExecTime from "../../Kernel/Control/ExecTime";

import Sprite from "../../Kernel/GameObjects/Sprite";
import Button from "../GameItems/Button";
import TextImage from "../GameItems/TextImage";

import IScene from "../../Kernel/GameObjects/IScene";
import ISceneManager from "../../Plugin/ISceneManager";
import Background from "../GameItems/Background";


class MixMode implements IScene {
  private _entityFactory: EntityFactory;
  private _sceneManager: ISceneManager;
  private _back: Button;
  private _background: Background;
  private _textImage: TextImage;
  private _execTime: ExecTime;

  constructor(entityFactory: EntityFactory, execTime: ExecTime, sceneManager: ISceneManager, button: Button, 
  background: Background, textImage: TextImage) {
    this._entityFactory = entityFactory;
    this._execTime = execTime;
    this._sceneManager = sceneManager;

    this._back = button;
    this._textImage = textImage;

    this._background = background;
  }

  public async preload(): Promise<void> {

  }

  public create() {
    console.log("MixMode Level");
    this._initBackground();
    this._initButtons();
    this._initTextImage();
  }

  public update() {
    this._execTime.update();
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

  private _initTextImage() {
    this._textImage.addImages(['Green', 'Orange', 'Pink', 'Red', 'Yellow']);
    this._textImage.addTexts(["My", "Name", "is", "Rawal", "Rudrabhoj", "Singh", "Bhati"]);
    this._textImage.init();

    this._execTime.addFoo(() => {
      this._textImage.showRandom();
    });

    this._execTime.start(2000);
  }

}

export default MixMode;