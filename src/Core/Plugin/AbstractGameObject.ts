import IAbstractGameObject from "./IAbstractGameObject";
//Place holder object allocated by default to avoid IAbstractGameObject | null situations

class AbstractGameObject implements IAbstractGameObject {
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

  public createNew(): IAbstractGameObject {
    return new AbstractGameObject();
  }
}

export default AbstractGameObject;