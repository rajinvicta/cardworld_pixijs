import CoreEntity from './CoreEntity';

import Position from './Component/Position';
import Display from './Component/Display';

class Sprite extends CoreEntity {
  constructor(position: Position, display: Display) {
    super(position, display);
  }
}

export default Sprite;