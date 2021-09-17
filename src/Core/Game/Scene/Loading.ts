import IGfxLoader from "../../Plugin/IGfxLoader";
import Resource from "../../Kernel/Data/Resource";
import EntityFactory from "../../Kernel/GameObjects/EntityFactory";

import IScene from "../../Kernel/GameObjects/IScene";
import ISceneManager from "../../Plugin/ISceneManager";

import Background from "../GameItems/Background";


class Loading implements IScene {
  private _gfxLoader: IGfxLoader;
  private _resource: Resource;
  private _entityFactory: EntityFactory;
  private _sceneManager: ISceneManager;
  private _background: Background;

  constructor(gfxLoader: IGfxLoader, resource: Resource, background: Background,
  entityFactory: EntityFactory, sceneManager: ISceneManager) {
    this._gfxLoader = gfxLoader;
    this._resource = resource;
    this._background = background;
    this._entityFactory = entityFactory;
    this._sceneManager = sceneManager;
  }

  public async preload(): Promise<void> {
    return new Promise((resolve: Function, reject: Function) => {
      let loading = this._entityFactory.text(414, 965, "Loading", {"fontSize": 60, "fill": "white"});

      let resourceList = this._resource.createArray([
        {name: "preload", url: "assets/preload.json"}
      ]);

      this._gfxLoader.addResources(resourceList);
      this._gfxLoader.download(() => {}, () => {
        resolve();
      });
      
    });
  }

  public create() {
    this._background.init('preload');
    let logo = this._entityFactory.sprite(162, 690-300, 'preload', 'logo');
    let loading = this._entityFactory.text(414, 965, "Loading", {"fontSize": 60, "fill": "white"});

    this._loadFiles().then(() => {
      this._startMenu();
    })
  }

  public update() {
    //console.log("updating Xd");
  }

  public shutdown() {
    console.log("Good bye world!");
  }

  private async _loadFiles(): Promise<void> {
    return new Promise((resolve: Function, reject: Function) => {
      let resourceList = this._resource.createArray([
        {name: "main", url: "assets/main.json"}
      ]);

      this._gfxLoader.addResources(resourceList);
      this._gfxLoader.download(() => {}, () => {
        console.log("Download Complete"); 
        resolve();
      });
    });
  }

  private _startMenu() {
    this._sceneManager.startScene('Menu');
  }

}

export default Loading;