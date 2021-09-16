import IAbstractGameObject from "../../../Plugin/IAbstractGameObject";
import GameObject from "../../../Plugin/IAbstractGameObject";

class Display {
  private _alpha: number;
  private _visible: boolean;

  private _foreignObject: IAbstractGameObject;
  private _abstractObject: IAbstractGameObject;

  constructor(foreignObject: IAbstractGameObject) {
    this._foreignObject = foreignObject;
    this._abstractObject = foreignObject;
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

  public init(foreignObject: IAbstractGameObject) {
    this._foreignObject = foreignObject;

    this.alpha = 1;
    this.visible = true;
  }

  public createNew(): Display {
    return new Display(this._abstractObject.createNew());
  }
}

export default Display;