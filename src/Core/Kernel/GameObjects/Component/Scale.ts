import Config from "../../Control/Config";
import ScaleMode, {Positions, Sizes, ContainerMode} from "../../Data/ScaleMode";

class Scale {
  private _config: Config;
  private _scaleMode: ScaleMode;

  constructor(config: Config, scaleMode: ScaleMode) {
    this._config = config;
    this._scaleMode = scaleMode;
  }

  public scaleX(val: number): number {
    return val;
  }

  public scaleY(val: number): number {
    return val;
  }

  public placeX(val: number): number {
    return val;
  }

  public placeY(val: number): number {
    return val;
  }


  public getContainerXY() {
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