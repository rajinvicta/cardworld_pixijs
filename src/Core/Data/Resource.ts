class Resource {
  private _name: string;
  private _url: string;

  constructor() {
    this._name = "";
    this._url = "";
  }

  get name(): string {
    return this._name;
  }

  get url(): string {
    return this._url;
  }

  set name(val: string) {
    this._name = val;
  }

  set url(val: string) {
    this._url = val;
  }

  public createNew(): Resource {
    return new Resource();
  }
}

export default Resource;