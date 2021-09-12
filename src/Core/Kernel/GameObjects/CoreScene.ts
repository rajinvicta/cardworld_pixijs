import CoreEntity from "./CoreEntity";
import IScreen from "../../Plugin/IScreen"

import Position from "./Component/Position";
import Display from "./Component/Display";
import IGameObject from "../../Plugin/IGameObject";

class CoreScene extends CoreEntity {
  private _screen: IScreen;
  private _gameObject: IGameObject;

  constructor(position: Position, display: Display, screen: IScreen) {
    super(position, display);

    this._screen = screen;

    this._gameObject = this._screen.createContainer(false);
  }

  get gameObject(): IGameObject {
    return this._gameObject;
  }
}

export default CoreScene;