import IScene from "../../Kernel/GameObjects/IScene";


class Loading implements IScene {
  constructor() {

  }

  public async preload() {

  }

  public create() {
    console.log("Hello World!");
  }

  public update() {
    console.log("updating Xd");
  }

  public shutdown() {

  }

}

export default Loading;