interface IScene {
  preload(): Promise<any>;
  create(): void;
  update(): void;
  shutdown(): void;
}

export default IScene;