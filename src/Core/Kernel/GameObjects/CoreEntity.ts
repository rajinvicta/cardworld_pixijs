import IGameObject from "../../Plugin/IGameObject";

import Position from './Component/Position';
import Display from './Component/Display';

class CoreEntity {
  private _position: Position;
  private _display: Display;

  constructor(position: Position, display: Display) {
    this._position = position;
    this._display = display;
  }

  get position(): Position {
    return this._position;
  }

  get display(): Display {
    return this._display;
  }

  protected _activateComponents() {
    console.log("Activated Components");
  }
}

export default CoreEntity;