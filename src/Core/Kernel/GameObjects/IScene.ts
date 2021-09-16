interface IScene {
  preload(): Promise<any>;
  create(): void;
  update(dt?: number): void;
  shutdown(): void;
}

export default IScene;