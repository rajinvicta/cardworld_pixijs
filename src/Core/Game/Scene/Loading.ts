import IScene from "../../Kernel/GameObjects/IScene";


class Loading implements IScene {
  constructor() {

  }

  public preload() {

  }

  public create() {
    console.log("Hello World!");
  }

  public update() {
    console.log("updating Xd");
  }

}

export default Loading;