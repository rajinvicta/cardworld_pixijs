import EntityFactory from "../../Kernel/GameObjects/EntityFactory";

import IScene from "../../Kernel/GameObjects/IScene";


class Menu implements IScene {
  private _entityFactory: EntityFactory;

  constructor(entityFactory: EntityFactory) {
    this._entityFactory = entityFactory;
  }

  public async preload(): Promise<void> {

  }

  public create() {
    console.log("Menu Level");
  }

  public update() {
    //console.log("updating Xd");
  }

  public shutdown() {

  }

}

export default Menu;