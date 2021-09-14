import IGameObject from "../../../Plugin/IGameObject";
import GameObject from "../../../Plugin/IGameObject";

class Display {
  private _alpha: number;
  private _visible: boolean;

  private _foreignObject: IGameObject;

  constructor(foreignObject: IGameObject) {
    this._foreignObject = foreignObject;

    this._alpha = 1;
    this._visible = true;
  }

  get alpha(): number {
    return this._alpha;
  }

  get visible(): boolean {
    return this._visible;
  }

  set alpha(val: number) {
    this._alpha = val;
    this._foreignObject.alpha = val;
  }

  set visible(val: boolean) {
    this._visible = val;
    this._foreignObject.visible = val;
  }

  public init(foreignObject: IGameObject) {
    this._alpha = 1;
    this._visible = true;

    this._foreignObject = foreignObject;
  }

  public createNew(): Display {
    return new Display(this._foreignObject.createNew());
  }
}

export default Display;