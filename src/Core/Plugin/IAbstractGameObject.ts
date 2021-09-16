interface IAbstractGameObject {
  x: number;
  y: number;
  angle: number;
  visible: boolean;
  alpha: number;
  text: string;
  style: any;
  data: any;
  interactive: boolean;
  on(eventName: string, foo: Function): void;
  destroy(): void;
  anchor: {set: (x: number, y?: number) => {}};
  createNew(): IAbstractGameObject;
}

export default IAbstractGameObject;