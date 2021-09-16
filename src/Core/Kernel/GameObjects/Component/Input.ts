import IAbstractGameObject from "../../../Plugin/IAbstractGameObject";
import GameObject from "../../../Plugin/IAbstractGameObject";

class Input {
  private _onMouseUp: Function[];

  private _foreignObject: IAbstractGameObject;

  constructor(foreignObject: IAbstractGameObject) {
    this._foreignObject = foreignObject;

    this._onMouseUp = [];
  }

  public addMouseUp(foo: Function) {
    this._onMouseUp.push(foo);
  }

  public init(foreignObject: IAbstractGameObject) {
    this._foreignObject = foreignObject;

    this._foreignObject.interactive = true;

    this._foreignObject.on('pointerup', () => {
      this._executeAll();
    })
  }

  public createNew(): Input {
    return new Input(this._foreignObject.createNew());
  }

  private _executeAll() {
    for (let c = 0; c < this._onMouseUp.length; c++) {
      let foo = this._onMouseUp[c];
      foo();
    }
  }
}

export default Input;