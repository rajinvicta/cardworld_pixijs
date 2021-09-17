type PositionMode = {x: Positions, y: Positions, modifier: Positions};
type SizeMode = {x: Sizes, y: Sizes, modifier: Sizes};

class ScaleMode {
  private _positionMode: PositionMode;
  private _sizeMode: SizeMode;
  private _containerMode: ContainerMode;

  constructor() {
    this._positionMode = {x: Positions.left, y: Positions.left, modifier: 1};
    this._sizeMode = {x: Sizes.normal, y: Sizes.normal, modifier: 1};
    this._containerMode = ContainerMode.gameplay;
  }

  get positionMode(): PositionMode {
    return this._positionMode;
  }

  get sizeMode(): SizeMode {
    return this._sizeMode;
  }

  get containerMode(): ContainerMode {
    return this._containerMode;
  }

  set positionMode(val: PositionMode) {
    this._positionMode = val;
  }

  set sizeMode(val: SizeMode) {
    this._sizeMode = val;
  }

  set containerMode(val: ContainerMode) {
    this._containerMode = val;
  }

  createNew(): ScaleMode {
    return new ScaleMode();
  }
}

export default ScaleMode;

export enum Positions {
  left,
  right,
  center
}

export enum ContainerMode {
  global,
  gameplay
}

export enum Sizes {
  normal,
  fill,
  maintain_ratio
}