import CoreEntity from './CoreEntity';

import Position from './Component/Position';
import Display from './Component/Display';
import Label from './Component/Label';
import IAbstractGameObject from '../../Plugin/IAbstractGameObject';
import IScreen from "../../Plugin/IScreen";
import ISceneManager from "../../Plugin/ISceneManager";
import Input from './Component/Input';

class Text extends CoreEntity {
  private _label: Label;

  private _screen: IScreen;
  private _sceneManager: ISceneManager;

  constructor(position: Position, display: Display, input: Input, label: Label, foreignObject: IAbstractGameObject,
  screen: IScreen, sceneManager: ISceneManager) {
    super(position, display, input, foreignObject);

    this._label = label;

    this._screen = screen;
    this._sceneManager = sceneManager;
  }

  get label(): Label {
    return this._label;
  }

  public init(x: number, y: number, text: string, style: any) {
    let fo = this._screen.createText(text, style);
    
    this._sceneManager.addObject(fo.data);
    this._activate(x, y, fo);

    this._label.init(text, style, fo);

    console.log(fo);
    console.log(this._foreignObject);
  }

  public createNew(): Text {
    let pos = this._position.createNew();
    let dis = this._display.createNew();
    let inp = this._input.createNew();
    let lab = this._label.createNew();
    let fo = this._foreignObject.createNew();

    return new Text(pos, dis, inp, lab, fo, this._screen, this._sceneManager);
  }
}

export default Text;