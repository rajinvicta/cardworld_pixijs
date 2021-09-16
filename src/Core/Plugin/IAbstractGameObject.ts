interface IAbstractGameObject {
  x: number;
  y: number;
  angle: number;
  visible: boolean;
  alpha: number;
  text: string;
  style: any;
  data: any;
  createNew(): IAbstractGameObject;
}

export default IAbstractGameObject;