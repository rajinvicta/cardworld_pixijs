import IGameObject from "./IGameObject";
//Place holder object allocated by default to avoid IGameObject | null situations

class GameObject implements IGameObject {
  public x: number;
  public y: number;
  public angle: number;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
  }
}

export default GameObject;