class Position {
  private _x: number;
  private _y: number;
  private _angle: number;

  constructor() {
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
  }

  set y(val: number) {
    this._y = val;
  }

  set angle(val: number) {
    this._angle = val;
  }

  public init(x: number, y: number) {
    this._x = x;
    this._y = y;
  }
  
}

export default Position;