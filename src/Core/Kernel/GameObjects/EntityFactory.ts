import Sprite from "../GameObjects/Sprite";
import Text from "../GameObjects/Text";

class EntityFactory {
  private _sprite: Sprite;
  private _text: Text;

  constructor(sprite: Sprite, text: Text) {
    this._sprite = sprite;
    this._text = text;
  }

  sprite(x: number, y: number, sheet: string, frame?: string): Sprite {
    let spr = this._sprite.createNew();
    spr.init(x, y, sheet, frame);

    return spr;
  }

  text(x: number, y: number, text: string, style: any) {
    let txt = this._text.createNew();
    txt.init(x, y, text, style);

    return txt;
  }
}

export default EntityFactory;