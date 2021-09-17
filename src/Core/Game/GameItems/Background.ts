import Sprite from "../../Kernel/GameObjects/Sprite";
import EntityFactory from "../../Kernel/GameObjects/EntityFactory";
import {Positions} from "../../Kernel/Data/ScaleMode";

class Background {
  private _entityFactory: EntityFactory;
  private _sprite: Sprite;

  constructor(entityFactory: EntityFactory, sprite: Sprite) {
    this._entityFactory = entityFactory;
    this._sprite = sprite;
  }

  get sprite(): Sprite {
    return this._sprite;
  }

  public init(sheet: string) {
    this._sprite = this._entityFactory.sprite(0, 0, sheet, 'bg');
    this._sprite.position.anchorX = 0.5;
    this._sprite.position.anchorY = 0.5;
    this._sprite.position.fitInsideContainer(false);
    this._sprite.position.setScaleMode(Positions.center, Positions.center, 1);
  }

  public createNew(): Background {
    return new Background(this._entityFactory, this._sprite.createNew());
  }
}

export default Background;