import CoreEntity from './CoreEntity';

import Position from './Component/Position';
import Display from './Component/Display';
import IGameObject from '../../Plugin/IGameObject';
import IScreen from "../../Plugin/IScreen";
import ISceneManager from "../../Plugin/ISceneManager";

class Sprite extends CoreEntity {
  private _screen: IScreen;
  private _sceneManager: ISceneManager;

  constructor(position: Position, display: Display, foreignObject: IGameObject, screen: IScreen, sceneManager: ISceneManager) {
    super(position, display, foreignObject);

    this._screen = screen;
    this._sceneManager = sceneManager;
  }

  public init(x: number, y: number, sheet: string, frame?: string) {
    let fo = this._screen.createSprite(sheet, frame);

    this._sceneManager.addObject(fo);
    this._activate(x, y, fo);
  }
}

export default Sprite;