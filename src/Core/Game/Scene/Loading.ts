import IGfxLoader from "../../Plugin/IGfxLoader";
import Resource from "../../Data/Resource";
import EntityFactory from "../../Kernel/GameObjects/EntityFactory";

import IScene from "../../Kernel/GameObjects/IScene";


class Loading implements IScene {
  private _gfxLoader: IGfxLoader;
  private _resource: Resource;
  private _entityFactory: EntityFactory;

  constructor(gfxLoader: IGfxLoader, resource: Resource, entityFactory: EntityFactory) {
    this._gfxLoader = gfxLoader;
    this._resource = resource;
    this._entityFactory = entityFactory;
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
    let bg = this._entityFactory.sprite(0, 0, 'preload', 'bg');
    let logo = this._entityFactory.sprite(162, 690-300, 'preload', 'logo');
    let loading = this._entityFactory.text(414, 965, "Loading", {"fontSize": 60, "fill": "white"});

    this._loadFiles().then(() => {
      console.log("_loadFiles complete!");
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

}

export default Loading;