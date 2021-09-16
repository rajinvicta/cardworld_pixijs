interface IAbstractGameObject {
  x: number;
  y: number;
  angle: number;
  visible: boolean;
  alpha: number;
  text: string;
  style: any;
  data: any;
  on(eventName: string, foo: Function): void;
  createNew(): IAbstractGameObject;
}

export default IAbstractGameObject;