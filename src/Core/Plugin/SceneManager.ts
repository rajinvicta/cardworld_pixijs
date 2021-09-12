import SceneData from "../Data/SceneData";
import PixiLayer from "./Pixi/PixiLayer";

class SceneManager {
  private _pixiLayer: PixiLayer;
  private _sceneData: SceneData;

  private _sceneList:SceneData[];

  constructor(pixiLayer: PixiLayer, sceneData: SceneData) {
    this._pixiLayer = pixiLayer;
    this._sceneData = sceneData;

    this._sceneList = [];
  }

  public addScene(name: string, scene: any) {
    if (!this._exists(name)) {
      this._addScene(name, scene);
    } else {
      console.error("Scene name '%s' already exists!", name);
    }
  }

  public startScene(name: string) {
    let scn = this._getScene(name);

    if (scn) {
      console.log("Starting Scene", scn);
    } else {
      console.error("No scene with the name '%s' found", name);
    }
  }

  private _addScene(name: string, scene: any) {
    let sd = this._createSceneData(name, scene);
    sd.container = this._createContainer();

    this._sceneList.push(sd);
  }

  private _exists(name: string): boolean {
    let scn = this._getScene(name);

    if (scn == null) {
      return false;
    } else {
      return true;
    }
  }

  private _getScene(name: string): {name: string, scene: any} | null {
    for (let c = 0; c < this._sceneList.length; c++) {
      if (this._sceneList[c].name == name) return this._sceneList[c];
    }

    return null;
  }


  private _createSceneData(name: string, scene: any): SceneData {
    return this._sceneData.createNew(name, scene);
  }

  private _createContainer(): any {
    return this._pixiLayer.createContainer();
  }
}

export default SceneManager;