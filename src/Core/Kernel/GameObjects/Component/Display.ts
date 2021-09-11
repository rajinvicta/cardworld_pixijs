class Display {
  private _alpha: number;
  private _visible: boolean;

  constructor() {
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
  }

  set visible(val: boolean) {
    this._visible = val;
  }

  public init() {
    this._alpha = 1;
    this._visible = true;
  }
}

export default Display;