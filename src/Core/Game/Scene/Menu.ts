import EntityFactory from "../../Kernel/GameObjects/EntityFactory";

import Sprite from "../../Kernel/GameObjects/Sprite";
import Button from "../GameItems/Button";

import IScene from "../../Kernel/GameObjects/IScene";


class Menu implements IScene {
  private _entityFactory: EntityFactory;
  private _card: Button;
  private _mix: Button;
  private _fire: Button;
  private _background: Sprite;
  private _logo: Sprite;

  constructor(entityFactory: EntityFactory, button: Button, sprite: Sprite) {
    this._entityFactory = entityFactory;
    this._card = button;
    this._mix = button;
    this._fire = button;

    this._background = sprite;
    this._logo = sprite;
  }

  public async preload(): Promise<void> {

  }

  public create() {
    console.log("Menu Level");
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
    this._logo = this._entityFactory.sprite(162, 150, 'preload', 'logo');
  }

  private  _initButtons() {
    this._card = this._card.createNew();
    this._mix = this._mix.createNew();
    this._fire = this._fire.createNew();

    let startY = 900; 

    this._card.init(303, startY + 0, 'btn_card');
    this._mix.init(303, startY + 250, 'btn_mixed');
    this._fire.init(303, startY + 500, 'btn_fire');
  }

}

export default Menu;