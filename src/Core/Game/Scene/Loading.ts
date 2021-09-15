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
      let resourceList = this._resource.createArray([
        {name: "spritesheet", url: "assets/spritesheet.json"}
      ]);

      this._gfxLoader.addResources(resourceList);
      this._gfxLoader.download(() => {}, () => {
        console.log("Download Complete"); 
        resolve();
      });
      
    });
  }

  public create() {
    let logo = this._entityFactory.sprite(20, 20, 'spritesheet', 'logo'); 
    let fps = this._entityFactory.text(500, 200, "Test 2", {"fontSize": 60, "fill": "white"});

    //(<any>window).logo = logo;
  }

  public update() {
    //console.log("updating Xd");
  }

  public shutdown() {

  }

}

export default Loading;