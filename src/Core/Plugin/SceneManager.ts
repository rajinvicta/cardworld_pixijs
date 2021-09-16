import SceneData from "../Kernel/Data/SceneData";
import IScene from "../Kernel/GameObjects/IScene"
import PixiLayer from "./Pixi/PixiLayer";
import Loop from "../Kernel/Control/Loop";
import IAbstractGameObject from "./IAbstractGameObject";

class SceneManager {
  private _pixiLayer: PixiLayer;
  private _sceneData: SceneData;
  private _loop: Loop;
  private _currentScene: SceneData | null;

  private _canUpdate: boolean;

  private _sceneList:SceneData[];

  constructor(pixiLayer: PixiLayer, sceneData: SceneData, loop: Loop) {
    this._pixiLayer = pixiLayer;
    this._sceneData = sceneData;
    this._loop = loop;

    this._currentScene = null;

    this._canUpdate = false;

    this._sceneList = [];

    console.log("SceneManager allocated!");
  }

  public init() {
    this._loop.addFunction(this._update, this);
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
      this._handleSceneStart(scn);
    } else {
      console.error("No scene with the name '%s' found", name);
    }
  }

  public addObject(obj: IAbstractGameObject) {
    if (this._currentScene) {
      this._pixiLayer.addObject(this._currentScene.container, obj);
    }
  }

  public removeObject(obj: IAbstractGameObject) {
    if (this._currentScene) {
      this._pixiLayer.removeObject(this._currentScene.container, obj);
    }
  }

  private _update() {
    if (this._currentScene && this._canUpdate) {
      this._currentScene.scene.update();
    }
  }

  private _addScene(name: string, scene: IScene) {
    let sd = this._createSceneData(name, scene);
    sd.container = this._createContainer();

    this._sceneList.push(sd);
  }

  private _handleSceneStart(scene: SceneData) {
    if (this._currentScene != null) {
      this._currentScene.scene.shutdown();
    }

    if (this._pixiLayer.stage) {
      this._pixiLayer.stage.removeChildren();
      this._pixiLayer.stage.addChild(scene.container);
    }

    this._canUpdate = false;
    this._currentScene = scene;

    this._currentScene.scene.preload().then(() => {
      this._canUpdate = true;

      scene.scene.create();
    });
  }

  private _exists(name: string): boolean {
    let scn = this._getScene(name);

    if (scn == null) {
      return false;
    } else {
      return true;
    }
  }

  private _getScene(name: string): SceneData | null {
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