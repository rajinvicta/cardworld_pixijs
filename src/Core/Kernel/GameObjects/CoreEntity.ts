import IGameObject from "../../Plugin/IGameObject";

import Position from './Component/Position';
import Display from './Component/Display';

class CoreEntity {
  private _position: Position;
  private _display: Display;
  protected _foreignObject: IGameObject;

  constructor(position: Position, display: Display, foreignObject: IGameObject) {
    this._position = position;
    this._display = display;
    this._foreignObject = foreignObject;
  }

  get position(): Position {
    return this._position;
  }

  get display(): Display {
    return this._display;
  }

  get foreignObject(): IGameObject {
    return this._foreignObject;
  }

  protected _activateComponents() {
    console.log("Activated Components");
  }
}

export default CoreEntity;