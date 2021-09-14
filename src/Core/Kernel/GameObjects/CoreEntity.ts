import IGameObject from "../../Plugin/IGameObject";

import Position from './Component/Position';
import Display from './Component/Display';

class CoreEntity {
  protected _position: Position;
  protected _display: Display;
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

  protected _activate(x: number, y: number, foreignObject: IGameObject) {
    this._position.init(x, y, foreignObject);
    this._display.init(foreignObject);
  }
}

export default CoreEntity;