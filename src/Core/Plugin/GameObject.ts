import IGameObject from "./IGameObject";
//Place holder object allocated by default to avoid IGameObject | null situations

class GameObject implements IGameObject {
  public x: number;
  public y: number;
  public angle: number;
  public visible: boolean;
  public alpha: number;
  public style: any;
  public text: string;
  public data: any;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.visible = true;
    this.alpha = 1;
    this.text = "";
    this.style = {};
    this.data = {};
  }

  public createNew(): IGameObject {
    return new GameObject();
  }
}

export default GameObject;