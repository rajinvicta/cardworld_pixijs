import Sprite from "../GameObjects/Sprite";

class EntityFactory {
  private _sprite: Sprite;

  constructor(sprite: Sprite) {
    this._sprite = sprite;
  }

  sprite(x: number, y: number, sheet: string, frame?: string): Sprite {
    let spr = this._sprite.createNew();
    spr.init(x, y, sheet, frame);

    return spr;
  }
}

export default EntityFactory;