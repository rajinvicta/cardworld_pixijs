import IAbstractGameObject from "../../../Plugin/IAbstractGameObject";
import IScreen from "../../../Plugin/IScreen";
import GameObject from "../../../Plugin/IAbstractGameObject";

class Display {
  private _alpha: number;
  private _visible: boolean;
  private _width: number;
  private _height: number;

  private _foreignObject: IAbstractGameObject;
  private _abstractObject: IAbstractGameObject;
  private _screen: IScreen;

  constructor(foreignObject: IAbstractGameObject, screen: IScreen) {
    this._foreignObject = foreignObject;
    this._abstractObject = foreignObject;
    this._screen = screen;

    this._alpha = 1;
    this._visible = true;
    this._width = 0;
    this._height = 0;
  }

  get alpha(): number {
    return this._alpha;
  }

  get visible(): boolean {
    return this._visible;
  }

  get width(): number {
    return this._foreignObject.width;
  }

  get height(): number {
    return this._foreignObject.height;
  }

  set alpha(val: number) {
    this._alpha = val;
    this._foreignObject.alpha = val;
  }

  set visible(val: boolean) {
    this._visible = val;
    this._foreignObject.visible = val;
  }

  set width(val: number) {
    this._foreignObject.width = val;
  }

  set height(val: number) {
    this._foreignObject.height = val;
  }

  public destroy() {
    this._foreignObject.destroy();
  }

  public updateTexture(sheet: string, frame?: string) {
    this._screen.updateTexture(this._foreignObject, sheet, frame);
  }

  public init(foreignObject: IAbstractGameObject) {
    this._foreignObject = foreignObject;

    this.alpha = 1;
    this.visible = true;
  }

  public createNew(): Display {
    return new Display(this._abstractObject.createNew(), this._screen);
  }
}

export default Display;