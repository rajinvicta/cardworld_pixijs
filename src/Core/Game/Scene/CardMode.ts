import EntityFactory from "../../Kernel/GameObjects/EntityFactory";
import ExecTime from "../../Kernel/Control/ExecTime";

import Sprite from "../../Kernel/GameObjects/Sprite";
import Button from "../GameItems/Button";
import Deck from "../GameItems/Deck";

import IScene from "../../Kernel/GameObjects/IScene";
import ISceneManager from "../../Plugin/ISceneManager";



class CardMode implements IScene {
  private _entityFactory: EntityFactory;
  private _sceneManager: ISceneManager;
  private _back: Button;
  private _background: Sprite;
  private _execTime: ExecTime;
  private _deck1: Deck;
  private _deck2: Deck;

  constructor(entityFactory: EntityFactory, sceneManager: ISceneManager, execTime: ExecTime,
  button: Button, sprite: Sprite, deck1: Deck, deck2: Deck) {
    this._entityFactory = entityFactory;
    this._sceneManager = sceneManager;
    this._execTime = execTime;
    
    this._deck1 = deck1;
    this._deck2 = deck2;

    this._back = button;

    this._background = sprite;
  }

  public async preload(): Promise<void> {

  }

  public create() {
    console.log("CardMode Level");
    this._initBackground();
    this._initButtons();
    this._initCards();
    this._startMoveListners();
  }

  public update() {
    this._execTime.update();
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

  private _initCards() {
    this._deck2.init(814);
    this._deck1.init(100);
  }

  private _startMoveListners() {
    this._execTime.addFoo(() => {
      console.log("hi");
    })
    this._execTime.start(1000, 20);
  }

}

export default CardMode;