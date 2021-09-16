import IAbstractGameObject from "../../Plugin/IAbstractGameObject";

import Position from './Component/Position';
import Display from './Component/Display';

class CoreEntity {
  protected _position: Position;
  protected _display: Display;
  protected _foreignObject: IAbstractGameObject;

  constructor(position: Position, display: Display, foreignObject: IAbstractGameObject) {
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

  get foreignObject(): IAbstractGameObject {
    return this._foreignObject;
  }

  protected _activate(x: number, y: number, foreignObject: IAbstractGameObject) {
    this._position.init(x, y, foreignObject);
    this._display.init(foreignObject);

    this._foreignObject = foreignObject;
  }
}

export default CoreEntity;