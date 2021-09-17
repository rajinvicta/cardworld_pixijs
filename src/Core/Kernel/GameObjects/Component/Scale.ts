import Config from "../../Control/Config";
import ScaleMode, {Positions, Sizes, ContainerMode} from "../../Data/ScaleMode";

class Scale {
  private _config: Config;
  private _scaleMode: ScaleMode;

  private _x: number;
  private _y: number;

  constructor(config: Config, scaleMode: ScaleMode) {
    this._config = config;
    this._scaleMode = scaleMode;
    
    this._x = 1;
    this._y = 1;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get mode(): ScaleMode {
    return this._scaleMode;
  }

  set x(val: number) {
    this._x = val;
  }

  set y(val: number) {
    this._y = val;
  }

  public resizeX(val: number): number {
    return (val * this._x) * this._getRatio();
  }

  public resizeY(val: number): number {
    return (val * this._y) * this._getRatio();
  }

  public placeX(val: number): number {
    let base = this._getContainerXStart();

    if (this._scaleMode.positionMode.x == Positions.left) {
      //Do nothing
    } else if (this._scaleMode.positionMode.x == Positions.center) {
      base = this._getScreen().x / 2;
    } else {
      base = this._getScreen().x;
    }

    let scaledVal = this._getRatio() * val;

    return base + scaledVal;
  }

  public placeY(val: number): number {
    let base = this._getContainerYStart();

    if (this._scaleMode.positionMode.y == Positions.left) {
      //Do nothing
    } else if (this._scaleMode.positionMode.y == Positions.center) {
      base = this._getScreen().y / 2;
    } else {
      base = this._getScreen().y;
    }

    let scaledVal = this._getRatio() * val;

    return base + scaledVal;
  }


  public createNew(): Scale {
    return new Scale(this._config, this._scaleMode.createNew());
  }


  private _getContainerXStart(): number {
    if (this._scaleMode.containerMode == ContainerMode.gameplay) {
      let screen = this._getScreen();
      let current = this._getCurrentXY();
      let diff = current.x - screen.x;

      console.log("current(%s) screen(%s) + diff(%s) + halfDiff(%s)", current.x, screen.x, diff, (diff / 2));

      return (diff / 2);
    } else {
      return 0;
    }
  }

  private _getContainerYStart(): number {
    if (this._scaleMode.containerMode == ContainerMode.gameplay) {
      let screen = this._getScreen();
      let current = this._getCurrentXY();
      let diff = current.y - screen.y;

      return diff / 2;
    } else {
      return 0;
    }
  }
  

  private _getScreen(): {x: number, y: number} {
    if (this._scaleMode.containerMode == ContainerMode.gameplay) {
      return this._getContainerXY();
    } else {
      return this._getCurrentXY();
    }
  }

  private _getContainerXY() {
    let original = this._getOriginalXY();
    let ratio = this._getRatio();

    return {x: original.x * ratio, y: original.y * ratio};
  }

  private _getRatio() {
    let original = this._getOriginalXY();
    let current = this._getCurrentXY();


    let ratio1 = current.y / original.y;
    let ratio2 = current.x / original.x;

    if (ratio1 * original.x <= current.x) {
      return ratio1;
    } else {
      return ratio2;
    }
  }


  private _getOriginalXY() {
    return {x: this._config.width, y: this._config.height};
  }

  private _getCurrentXY() {
    return {x: window.innerWidth, y: window.innerHeight};
  }


}

export default Scale;










/*
      1. Decide container size
      2. Calculate Size Ratio
      3. Calculate X and Y scale normal
      4. Calculate position
      5. Add scale pixi support
      6. Add scale to display and position

*/