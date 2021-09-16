import IAbstractGameObject from "../../../Plugin/IAbstractGameObject";

class Label {
  private _text: string;
  private _style: any;

  private _foreignObject: IAbstractGameObject;

  constructor(foreignObject: IAbstractGameObject) {
    this._foreignObject = foreignObject;

    this._text = "";
    this._style = {};
  }

  get text(): string {
    return this._text;
  }

  get style(): any {
    return this._style;
  }

  set text(val: string) {
    this._text = val;
    this._updateForeignObject();
  }

  set style(val: any) {
    this._style = val;
    this._updateForeignObject();
  }

  public init(text: string, style: any, foreignObject: IAbstractGameObject) {
    this._foreignObject = foreignObject;

    this.text = text;
    this.style = style;
  }

  public createNew(): Label {
    return new Label(this._foreignObject.createNew());
  }

  private _updateForeignObject() {
    this._foreignObject.text = this._text;
    this._foreignObject.style = this._style;
  }
  
}

export default Label;