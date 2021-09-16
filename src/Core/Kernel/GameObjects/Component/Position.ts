import IAbstractGameObject from "../../../Plugin/IAbstractGameObject";

class Position {
  private _x: number;
  private _y: number;
  private _angle: number;

  private _foreignObject: IAbstractGameObject;
  private _abstractObject: IAbstractGameObject;

  constructor(foreignObject: IAbstractGameObject) {
    this._foreignObject = foreignObject;
    this._abstractObject  = foreignObject;

    this._x = 0;
    this._y = 0;
    this._angle = 0;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get angle(): number {
    return this._angle;
  }

  set x(val: number) {
    this._x = val;
    this._foreignObject.x = val;
  }

  set y(val: number) {
    this._y = val;
    this._foreignObject.y = val;
  }

  set angle(val: number) {
    this._angle = val;
    this._foreignObject.angle = val;
  }

  public init(x: number, y: number, foreignObject: IAbstractGameObject) {
    this._foreignObject = foreignObject;

    this.x = x;
    this.y = y;
  }

  public createNew(): Position {
    return new Position(this._abstractObject.createNew());
  }
  
}

export default Position;