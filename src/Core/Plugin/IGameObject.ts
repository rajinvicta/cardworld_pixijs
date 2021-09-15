interface IGameObject {
  x: number;
  y: number;
  angle: number;
  visible: boolean;
  alpha: number;
  text: string;
  style: any;
  data: any;
  createNew(): IGameObject;
}

export default IGameObject;