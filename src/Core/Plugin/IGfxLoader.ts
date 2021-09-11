import * as PIXI from "pixi.js"
import type { Dict } from '@pixi/utils';

import Resource from "../Data/Resource";

interface IGfxLoader {
  addResources(resList: Resource[]): void;
  download(onProgress: Function, onComplete: Function): Promise<Dict<PIXI.LoaderResource>>;
}

export default IGfxLoader;