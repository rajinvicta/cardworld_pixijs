import CoreEntity from "./CoreEntity";

import Position from "./Component/Position";
import Display from "./Component/Display";
import IGameObject from "../../Plugin/IGameObject";

class CoreScene extends CoreEntity {

  constructor(position: Position, display: Display, foreignObject: IGameObject) {
    super(position, display, foreignObject);
  }
}

export default CoreScene;