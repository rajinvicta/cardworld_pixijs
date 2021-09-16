import IAbstractGameObject from "./IAbstractGameObject";
//Place holder object allocated by default to avoid IAbstractGameObject | null situations

class AbstractGameObject implements IAbstractGameObject {
  get x(): number {
    this._denyAccess();
    return 0;
  }

  get y(): number {
    this._denyAccess();
    return 0;
  }

  get angle(): number {
    this._denyAccess();
    return 0;
  }

  get visible(): boolean {
    this._denyAccess();
    return true;
  }

  get alpha(): number {
    this._denyAccess();
    return 1;
  }

  get interactive(): boolean {
    this._denyAccess();
    return false;
  }

  get style(): any {
    this._denyAccess();
    return {};
  }

  get text(): string {
    this._denyAccess();
    return "";
  }

  get data(): any {
    this._denyAccess();
    return {};
  }

  get destroy(): any {
    this._denyAccess();
    return {};
  }


  set x(val: number) {
    this._denyAccess();
  }

  set y(val: number) {
    this._denyAccess();
  }

  set angle(val: number) {
    this._denyAccess();
  }

  set visible(val: boolean) {
    this._denyAccess();
  }

  set alpha(val: number) {
    this._denyAccess();
  }

  set style(val: any) {
    this._denyAccess();
  }

  set interactive(val: boolean) {
    this._denyAccess();
  }

  set text(val: string) {
    this._denyAccess();
  }

  set data(val: any) {
    this._denyAccess();
  }

  set destroy(val: any) {
    this._denyAccess();
  }


  constructor() {

  }

  public createNew(): IAbstractGameObject {
    return new AbstractGameObject();
  }

  public on(eventName: string, foo: Function) {

  }

  private _denyAccess() {
    console.error("Can not access the AbstractGameObject!");
  }
}

export default AbstractGameObject;