class SceneData {
  private _name: string;
  private _scene: any;
  private _container: any;

  constructor() {
    this._name = "";
  }

  get name(): string {
    return this._name;
  }

  get scene(): any {
    return this._scene;
  }

  get container(): any {
    return this._container;
  }

  set name(val: string) {
    this._name = val;
  }

  set scene(val: any) {
    this._scene = val;
  }

  set container(val: any) {
    this._container = val;
  }

  public createNew(name: string, scene: any): SceneData {
    let sd = new SceneData();
    sd.name = name;
    sd.scene = scene;

    return sd;
  }
}

export default SceneData;