import CoreEntity from "./CoreEntity";

import Position from "./Component/Position";
import Display from "./Component/Display";
import IAbstractGameObject from "../../Plugin/IAbstractGameObject";

class CoreScene extends CoreEntity {

  constructor(position: Position, display: Display, foreignObject: IAbstractGameObject) {
    super(position, display, foreignObject);
  }
}

export default CoreScene;