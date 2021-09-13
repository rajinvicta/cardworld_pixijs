interface IScene {
  preload(): Promise<void>;
  create(): void;
  update(): void;
  shutdown(): void;
}

export default IScene;