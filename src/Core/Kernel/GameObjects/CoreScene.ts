import CoreEntity from "./CoreEntity";

import Position from "./Component/Position";
import Display from "./Component/Display";
import IAbstractGameObject from "../../Plugin/IAbstractGameObject";
import Input from "./Component/Input";

class CoreScene extends CoreEntity {

  constructor(position: Position, display: Display, input: Input, foreignObject: IAbstractGameObject) {
    super(position, display, input, foreignObject);
  }
}

export default CoreScene;