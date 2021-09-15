import CoreEntity from './CoreEntity';

import Position from './Component/Position';
import Display from './Component/Display';
import IGameObject from '../../Plugin/IGameObject';
import IScreen from "../../Plugin/IScreen";
import ISceneManager from "../../Plugin/ISceneManager";

class Text extends CoreEntity {
  private _screen: IScreen;
  private _sceneManager: ISceneManager;

  constructor(position: Position, display: Display, foreignObject: IGameObject, screen: IScreen, sceneManager: ISceneManager) {
    super(position, display, foreignObject);

    this._screen = screen;
    this._sceneManager = sceneManager;
  }

  public init(x: number, y: number, text: string, style: any) {
    let fo = this._screen.createText(text, style);
    
    this._sceneManager.addObject(fo);
    this._activate(x, y, fo);
  }

  public createNew(): Text {
    let pos = this._position.createNew();
    let dis = this._display.createNew();
    let fo = this._foreignObject.createNew();

    return new Text(pos, dis, fo, this._screen, this._sceneManager);
  }
}

export default Text;