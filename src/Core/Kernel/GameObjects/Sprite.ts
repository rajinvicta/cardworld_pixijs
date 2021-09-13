import CoreEntity from './CoreEntity';

import Position from './Component/Position';
import Display from './Component/Display';
import IGameObject from '../../Plugin/IGameObject';

class Sprite extends CoreEntity {
  constructor(position: Position, display: Display, foreignObject: IGameObject) {
    super(position, display, foreignObject);
  }

  public init(x: number, y: number, sheet: string, frame: string) {
    
  }
}

export default Sprite;