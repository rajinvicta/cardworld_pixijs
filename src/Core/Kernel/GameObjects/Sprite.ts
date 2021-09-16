import CoreEntity from './CoreEntity';

import Position from './Component/Position';
import Display from './Component/Display';
import IAbstractGameObject from '../../Plugin/IAbstractGameObject';
import IScreen from "../../Plugin/IScreen";
import ISceneManager from "../../Plugin/ISceneManager";
import Input from './Component/Input';

class Sprite extends CoreEntity {
  private _screen: IScreen;
  private _sceneManager: ISceneManager;

  constructor(position: Position, display: Display, input: Input, foreignObject: IAbstractGameObject,
  screen: IScreen, sceneManager: ISceneManager) {
    super(position, display, input, foreignObject);

    this._screen = screen;
    this._sceneManager = sceneManager;
  }

  public init(x: number, y: number, sheet: string, frame?: string) {
    let fo = this._screen.createSprite(sheet, frame);

    this._sceneManager.addObject(fo);
    this._activate(x, y, fo);
  }

  public createNew(): Sprite {
    let pos = this._position.createNew();
    let dis = this._display.createNew();
    let inp = this._input.createNew();
    let fo = this._foreignObject.createNew();

    return new Sprite(pos, dis, inp, fo, this._screen, this._sceneManager);
  }
}

export default Sprite;