import IScene from "../Kernel/GameObjects/IScene";
import IGameObject from "./IGameObject";

interface ISceneManager {
  init(): void;
  addScene(name: string, scene: IScene): void;
  startScene(name: string): void;
  addObject(obj: IGameObject): void;
  removeObject(obj: IGameObject): void;
}

export default ISceneManager;