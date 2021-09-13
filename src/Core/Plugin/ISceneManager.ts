import IScene from "../Kernel/GameObjects/IScene";

interface ISceneManager {
  addScene(name: string, scene: IScene): void;
  startScene(name: string): void;
}

export default ISceneManager;