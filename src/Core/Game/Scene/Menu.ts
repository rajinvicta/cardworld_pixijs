import EntityFactory from "../../Kernel/GameObjects/EntityFactory";

import Button from "../GameItems/Button";

import IScene from "../../Kernel/GameObjects/IScene";


class Menu implements IScene {
  private _entityFactory: EntityFactory;
  private _card: Button;
  private _mix: Button;
  private _fire: Button;

  constructor(entityFactory: EntityFactory, button: Button) {
    this._entityFactory = entityFactory;
    this._card = button;
    this._mix = button;
    this._fire = button;
  }

  public async preload(): Promise<void> {

  }

  public create() {
    console.log("Menu Level");
    this._initButtons();
  }

  public update() {
    //console.log("updating Xd");
  }

  public shutdown() {

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