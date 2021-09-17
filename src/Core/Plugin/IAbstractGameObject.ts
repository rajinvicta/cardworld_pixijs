interface IAbstractGameObject {
  x: number;
  y: number;
  angle: number;
  width: number;
  height: number;
  visible: boolean;
  alpha: number;
  text: string;
  style: any;
  data: any;
  interactive: boolean;
  scale: {x: number, y: number}
  on(eventName: string, foo: Function): void;
  destroy(): void;
  anchor: {set: (x: number, y?: number) => {}};
  createNew(): IAbstractGameObject;
}

export default IAbstractGameObject;