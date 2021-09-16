import Sprite from "../../Kernel/GameObjects/Sprite";
import EntityFactory from "../../Kernel/GameObjects/EntityFactory";

class Button {
  private _entityFactory: EntityFactory;
  private _sprite: Sprite;

  constructor(entityFactory: EntityFactory, sprite: Sprite) {
    this._entityFactory = entityFactory;
    this._sprite = sprite;
  }

  get sprite(): Sprite {
    return this._sprite;
  }

  public init(x: number, y: number, frame: string) {
    this._sprite = this._entityFactory.sprite(x, y, 'main', frame);
    this._sprite.enableInput();
    this._sprite.input.addMouseUp(() => {
      console.log("Button pressed");
    })
  }

  public createNew(): Button {
    return new Button(this._entityFactory, this._sprite.createNew());
  }
}

export default Button;