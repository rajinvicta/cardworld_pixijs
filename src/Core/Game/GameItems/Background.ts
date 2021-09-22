import Sprite from "../../Kernel/GameObjects/Sprite";
import EntityFactory from "../../Kernel/GameObjects/EntityFactory";
import {Positions, Sizes} from "../../Kernel/Data/ScaleMode";

class Background {
  private _entityFactory: EntityFactory;
  private _sprite: Sprite;
  private _resizeListner: Function;

  constructor(entityFactory: EntityFactory, sprite: Sprite) {
    this._entityFactory = entityFactory;
    this._sprite = sprite;
    this._resizeListner = () => {};
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

    this._calculateScale();
    this._addListners();
  }

  public createNew(): Background {
    return new Background(this._entityFactory, this._sprite.createNew());
  }

  public shutdown() {
    window.removeEventListener("resize", <any>this._resizeListner);
  }

  private _addListners() {
    this._resizeListner = () => {
      this._calculateScale();
    }

    window.addEventListener("resize", <any>this._resizeListner);
  }

  private _calculateScale() {
    if (document.documentElement.clientWidth / document.documentElement.clientHeight > 1) {
      this._sprite.display.setScaleMode(Sizes.fill, Sizes.maintain_ratio, 1);  
    } else if (document.documentElement.clientWidth / document.documentElement.clientHeight < 0.56) {
      this._sprite.display.setScaleMode(Sizes.maintain_ratio, Sizes.fill, 1);
    } else {
      this._sprite.display.setScaleMode(Sizes.normal, Sizes.normal, 1);
    }
  }
}

export default Background;