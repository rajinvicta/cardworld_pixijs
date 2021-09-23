import SmartDepend from '../Dep/SmartDepend';

import CardWorld from '../../src/Core/CardWorld';
import Background from '../../src/Core/Game/GameItems/Background';
import Button from '../../src/Core/Game/GameItems/Button';
import Deck from '../../src/Core/Game/GameItems/Deck';
import FPSCounter from '../../src/Core/Game/GameItems/FPSCounter';
import TextImage from '../../src/Core/Game/GameItems/TextImage';
import CardMode from '../../src/Core/Game/Scene/CardMode';
import FireMode from '../../src/Core/Game/Scene/FireMode';
import Loading from '../../src/Core/Game/Scene/Loading';
import Menu from '../../src/Core/Game/Scene/Menu';
import MixMode from '../../src/Core/Game/Scene/MixMode';
import Config from '../../src/Core/Kernel/Control/Config';
import ExecTime from '../../src/Core/Kernel/Control/ExecTime';
import Loop from '../../src/Core/Kernel/Control/Loop';
import ParticleSystem from '../../src/Core/Kernel/Control/ParticleSystem';
import ScaleManager from '../../src/Core/Kernel/Control/ScaleManager';
import FunObj from '../../src/Core/Kernel/Data/FunObj';
import Resource from '../../src/Core/Kernel/Data/Resource';
import ScaleMode from '../../src/Core/Kernel/Data/ScaleMode';
import SceneData from '../../src/Core/Kernel/Data/SceneData';
import Display from '../../src/Core/Kernel/GameObjects/Component/Display';
import Input from '../../src/Core/Kernel/GameObjects/Component/Input';
import Label from '../../src/Core/Kernel/GameObjects/Component/Label';
import Position from '../../src/Core/Kernel/GameObjects/Component/Position';
import Scale from '../../src/Core/Kernel/GameObjects/Component/Scale';
import CoreEntity from '../../src/Core/Kernel/GameObjects/CoreEntity';
import CoreScene from '../../src/Core/Kernel/GameObjects/CoreScene';
import EntityFactory from '../../src/Core/Kernel/GameObjects/EntityFactory';
import Sprite from '../../src/Core/Kernel/GameObjects/Sprite';
import Text from '../../src/Core/Kernel/GameObjects/Text';
import AbstractGameObject from '../../src/Core/Plugin/AbstractGameObject';
import GfxLoader from '../../src/Core/Plugin/GfxLoader';
import PixiLayer from '../../src/Core/Plugin/Pixi/PixiLayer';
import PxPoint from '../../src/Core/Plugin/Pixi/PxPoint';
import PxText from '../../src/Core/Plugin/Pixi/PxText';
import SceneManager from '../../src/Core/Plugin/SceneManager';
import Screen from '../../src/Core/Plugin/Screen';
import TweenJs from '../../src/Core/Plugin/TweenJs';




class ControlContainer {
  private _smartDepend: SmartDepend;

  protected _CardWorld: any;
protected _Background: any;
protected _Button: any;
protected _Deck: any;
protected _FPSCounter: any;
protected _TextImage: any;
protected _CardMode: any;
protected _FireMode: any;
protected _Loading: any;
protected _Menu: any;
protected _MixMode: any;
protected _Config: any;
protected _ExecTime: any;
protected _Loop: any;
protected _ParticleSystem: any;
protected _ScaleManager: any;
protected _FunObj: any;
protected _Resource: any;
protected _ScaleMode: any;
protected _SceneData: any;
protected _Display: any;
protected _Input: any;
protected _Label: any;
protected _Position: any;
protected _Scale: any;
protected _CoreEntity: any;
protected _CoreScene: any;
protected _EntityFactory: any;
protected _Sprite: any;
protected _Text: any;
protected _AbstractGameObject: any;
protected _GfxLoader: any;
protected _PixiLayer: any;
protected _PxPoint: any;
protected _PxText: any;
protected _SceneManager: any;
protected _Screen: any;
protected _TweenJs: any;


  constructor() {
    this._smartDepend = new SmartDepend();

    this._addModules();
    this._addDepends();
  }

  public getMain(): CardWorld {
    let spEntity = <CardWorld>this._smartDepend.resolve(this._CardWorld);

    return spEntity;
  }

  private _addModules() {
    this._CardWorld = this._smartDepend.addModule(CardWorld, false);
this._Background = this._smartDepend.addModule(Background, false);
this._Button = this._smartDepend.addModule(Button, false);
this._Deck = this._smartDepend.addModule(Deck, false);
this._FPSCounter = this._smartDepend.addModule(FPSCounter, false);
this._TextImage = this._smartDepend.addModule(TextImage, false);
this._CardMode = this._smartDepend.addModule(CardMode, false);
this._FireMode = this._smartDepend.addModule(FireMode, false);
this._Loading = this._smartDepend.addModule(Loading, false);
this._Menu = this._smartDepend.addModule(Menu, false);
this._MixMode = this._smartDepend.addModule(MixMode, false);
this._Config = this._smartDepend.addModule(Config, false);
this._ExecTime = this._smartDepend.addModule(ExecTime, false);
this._Loop = this._smartDepend.addModule(Loop, true);
this._ParticleSystem = this._smartDepend.addModule(ParticleSystem, false);
this._ScaleManager = this._smartDepend.addModule(ScaleManager, true);
this._FunObj = this._smartDepend.addModule(FunObj, false);
this._Resource = this._smartDepend.addModule(Resource, false);
this._ScaleMode = this._smartDepend.addModule(ScaleMode, false);
this._SceneData = this._smartDepend.addModule(SceneData, false);
this._Display = this._smartDepend.addModule(Display, false);
this._Input = this._smartDepend.addModule(Input, false);
this._Label = this._smartDepend.addModule(Label, false);
this._Position = this._smartDepend.addModule(Position, false);
this._Scale = this._smartDepend.addModule(Scale, false);
this._CoreEntity = this._smartDepend.addModule(CoreEntity, false);
this._CoreScene = this._smartDepend.addModule(CoreScene, false);
this._EntityFactory = this._smartDepend.addModule(EntityFactory, false);
this._Sprite = this._smartDepend.addModule(Sprite, false);
this._Text = this._smartDepend.addModule(Text, false);
this._AbstractGameObject = this._smartDepend.addModule(AbstractGameObject, false);
this._GfxLoader = this._smartDepend.addModule(GfxLoader, false);
this._PixiLayer = this._smartDepend.addModule(PixiLayer, true);
this._PxPoint = this._smartDepend.addModule(PxPoint, false);
this._PxText = this._smartDepend.addModule(PxText, false);
this._SceneManager = this._smartDepend.addModule(SceneManager, true);
this._Screen = this._smartDepend.addModule(Screen, false);
this._TweenJs = this._smartDepend.addModule(TweenJs, false);

  }

  private _addDepends() {
    this._smartDepend.addDependency(this._CardWorld, this._Config);
this._smartDepend.addDependency(this._CardWorld, this._Loop);
this._smartDepend.addDependency(this._CardWorld, this._Screen);
this._smartDepend.addDependency(this._CardWorld, this._SceneManager);
this._smartDepend.addDependency(this._CardWorld, this._Loading);
this._smartDepend.addDependency(this._CardWorld, this._Menu);
this._smartDepend.addDependency(this._CardWorld, this._CardMode);
this._smartDepend.addDependency(this._CardWorld, this._MixMode);
this._smartDepend.addDependency(this._CardWorld, this._FireMode);


this._smartDepend.addDependency(this._Background, this._EntityFactory);
this._smartDepend.addDependency(this._Background, this._Sprite);
this._smartDepend.addDependency(this._Background, this._FPSCounter);
this._smartDepend.addDependency(this._Background, this._Config);


this._smartDepend.addDependency(this._Button, this._EntityFactory);
this._smartDepend.addDependency(this._Button, this._Sprite);


this._smartDepend.addDependency(this._Deck, this._EntityFactory);


this._smartDepend.addDependency(this._FPSCounter, this._EntityFactory);
this._smartDepend.addDependency(this._FPSCounter, this._Text);
this._smartDepend.addDependency(this._FPSCounter, this._Screen);


this._smartDepend.addDependency(this._TextImage, this._EntityFactory);


this._smartDepend.addDependency(this._CardMode, this._EntityFactory);
this._smartDepend.addDependency(this._CardMode, this._SceneManager);
this._smartDepend.addDependency(this._CardMode, this._ExecTime);
this._smartDepend.addDependency(this._CardMode, this._Button);
this._smartDepend.addDependency(this._CardMode, this._Sprite);
this._smartDepend.addDependency(this._CardMode, this._Deck);
this._smartDepend.addDependency(this._CardMode, this._Deck);
this._smartDepend.addDependency(this._CardMode, this._Background);


this._smartDepend.addDependency(this._FireMode, this._EntityFactory);
this._smartDepend.addDependency(this._FireMode, this._SceneManager);
this._smartDepend.addDependency(this._FireMode, this._Button);
this._smartDepend.addDependency(this._FireMode, this._Background);
this._smartDepend.addDependency(this._FireMode, this._ParticleSystem);


this._smartDepend.addDependency(this._Loading, this._GfxLoader);
this._smartDepend.addDependency(this._Loading, this._Resource);
this._smartDepend.addDependency(this._Loading, this._Background);
this._smartDepend.addDependency(this._Loading, this._EntityFactory);
this._smartDepend.addDependency(this._Loading, this._SceneManager);


this._smartDepend.addDependency(this._Menu, this._EntityFactory);
this._smartDepend.addDependency(this._Menu, this._SceneManager);
this._smartDepend.addDependency(this._Menu, this._Button);
this._smartDepend.addDependency(this._Menu, this._Sprite);
this._smartDepend.addDependency(this._Menu, this._Background);


this._smartDepend.addDependency(this._MixMode, this._EntityFactory);
this._smartDepend.addDependency(this._MixMode, this._ExecTime);
this._smartDepend.addDependency(this._MixMode, this._SceneManager);
this._smartDepend.addDependency(this._MixMode, this._Button);
this._smartDepend.addDependency(this._MixMode, this._Background);
this._smartDepend.addDependency(this._MixMode, this._TextImage);


this._smartDepend.addDependency(this._Loop, this._FunObj);


this._smartDepend.addDependency(this._ParticleSystem, this._EntityFactory);


this._smartDepend.addDependency(this._Display, this._AbstractGameObject);
this._smartDepend.addDependency(this._Display, this._Scale);
this._smartDepend.addDependency(this._Display, this._Screen);


this._smartDepend.addDependency(this._Input, this._AbstractGameObject);


this._smartDepend.addDependency(this._Label, this._AbstractGameObject);


this._smartDepend.addDependency(this._Position, this._AbstractGameObject);
this._smartDepend.addDependency(this._Position, this._Scale);


this._smartDepend.addDependency(this._Scale, this._Config);
this._smartDepend.addDependency(this._Scale, this._ScaleMode);
this._smartDepend.addDependency(this._Scale, this._AbstractGameObject);


this._smartDepend.addDependency(this._CoreEntity, this._Position);
this._smartDepend.addDependency(this._CoreEntity, this._Display);
this._smartDepend.addDependency(this._CoreEntity, this._Input);
this._smartDepend.addDependency(this._CoreEntity, this._AbstractGameObject);
this._smartDepend.addDependency(this._CoreEntity, this._ScaleManager);


this._smartDepend.addDependency(this._CoreScene, this._Position);
this._smartDepend.addDependency(this._CoreScene, this._Display);
this._smartDepend.addDependency(this._CoreScene, this._Input);
this._smartDepend.addDependency(this._CoreScene, this._AbstractGameObject);
this._smartDepend.addDependency(this._CoreScene, this._ScaleManager);


this._smartDepend.addDependency(this._EntityFactory, this._Sprite);
this._smartDepend.addDependency(this._EntityFactory, this._Text);
this._smartDepend.addDependency(this._EntityFactory, this._TweenJs);


this._smartDepend.addDependency(this._Sprite, this._Position);
this._smartDepend.addDependency(this._Sprite, this._Display);
this._smartDepend.addDependency(this._Sprite, this._Input);
this._smartDepend.addDependency(this._Sprite, this._ScaleManager);
this._smartDepend.addDependency(this._Sprite, this._AbstractGameObject);
this._smartDepend.addDependency(this._Sprite, this._Screen);
this._smartDepend.addDependency(this._Sprite, this._SceneManager);


this._smartDepend.addDependency(this._Text, this._Position);
this._smartDepend.addDependency(this._Text, this._Display);
this._smartDepend.addDependency(this._Text, this._Input);
this._smartDepend.addDependency(this._Text, this._Label);
this._smartDepend.addDependency(this._Text, this._AbstractGameObject);
this._smartDepend.addDependency(this._Text, this._Screen);
this._smartDepend.addDependency(this._Text, this._SceneManager);
this._smartDepend.addDependency(this._Text, this._ScaleManager);


this._smartDepend.addDependency(this._GfxLoader, this._PixiLayer);


this._smartDepend.addDependency(this._PixiLayer, this._PxText);


this._smartDepend.addDependency(this._PxText, this._PxPoint);


this._smartDepend.addDependency(this._SceneManager, this._PixiLayer);
this._smartDepend.addDependency(this._SceneManager, this._SceneData);
this._smartDepend.addDependency(this._SceneManager, this._Loop);
this._smartDepend.addDependency(this._SceneManager, this._ScaleManager);


this._smartDepend.addDependency(this._Screen, this._PixiLayer);



  }

}

export default ControlContainer;