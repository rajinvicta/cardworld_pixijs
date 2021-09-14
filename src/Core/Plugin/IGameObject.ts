interface IGameObject {
  x: number;
  y: number;
  angle: number;
  visible: boolean;
  alpha: number;
  createNew(): IGameObject;
}

export default IGameObject;