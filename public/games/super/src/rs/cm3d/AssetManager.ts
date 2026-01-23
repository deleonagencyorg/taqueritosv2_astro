"use strict";

// Resources path
const AUDIOS_PATH = 'assets/sounds';
const GRAPHICS_PATH = 'assets/graphics';
const TEXTURES_PATH = 'assets/textures';
const MODEL_PATH = 'assets/models';
const DATA_PATH = 'data';

import { LoadingManager, AudioListener, Audio, AudioLoader, TextureLoader, Texture, Object3D, FileLoader } from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader';
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader';
import GameConfig from './GameConfig';
import CryptoMan from './CryptoMan';

/**
 * AssetManager is a main class used to load external assets and resources
 * @author raizensoft
 */
export default class AssetManager {

  // Generic properties
  cm3d:CryptoMan;
  loadingManager:LoadingManager;
  loaded:boolean = false;
  onLoad:() => void;
  onProgress:(url:string, loaded:number, total:number) => void;
  soundOn:boolean = true;
  showDelay:boolean;
  config:GameConfig;

  // Textures
  BoardTextures:Texture[];

  // Music and sounds
  audioList:Audio[] = [];
  
  // Models bag
  models:{
    [key:string]:any
  };

  // Model animations bag
  modelAnim:{
    [key:string]:any
  };

  // Textures bag
  textures:{
    [key:string]:Texture
  };

  // Texture atlas bag
  atlas:{
    [key:string]:Texture
  };

  // Texture atlas data bag
  atlasData:{
    [key:string]:AtlasData
  };

  // Audios bags
  audios:{
    [key:string]:Audio
  }

  /**
   * Create new Santa Hat
   */
  constructor(cm3d:CryptoMan) {

    this.cm3d = cm3d;
    this.config = cm3d.config;
    this.init();
  }

  /**
   * Init loading manager
   */
  private init() {

    // Init LoadingManager
    const lm = this.loadingManager = new LoadingManager();
    const am = this;

    // Init models bag
    this.models = {};
    this.modelAnim = {};
    this.atlasData = {};
    this.atlas = {};
    this.audios = {};
    this.textures = {};

    lm.onLoad = function() {

      am.loaded = true;

      console.log('Assets loaded');
      if (am.onLoad)
        am.onLoad.call(am);
    };

    lm.onProgress = function(url:string, loaded:number, total:number)  {
      if (am.onProgress)
        am.onProgress.call(am, url, loaded, total);
    };
  }

  /**
   * Start loading assets
   */
  load() {

    this.loadAudios(['BackgroundMusic', 'ButtonClick', 'LoseTune', 'CollectCoin', 'Jump', 'EExplosion', 'GetHit']);
    // Load coins texture
    this.loadTextures(this.config.data.coins);
    this.loadTextures(['Firework', 'StarLine']);
    this.loadTextureAtlas(['EnergyBuzz', 'EnergyBust', 'EnergyExplode'])
    //this.loadBoardTextures();
    this.loadGLBModels(['Superman', 'CubeGrass', 'Crystal']);
    this.loadFBXModels();
  }

  /**
   * Load audio asset
   * @method loadAudio
   */
  private loadAudios(audioList:string[] = []) {

    const am = this;

    // Audio 
    const listener = new AudioListener();

    const loadSingleAudio = (name:string, callback?:() => void) => {

      const audio = new Audio(listener);
      const audioLoader = new AudioLoader(am.loadingManager);

      audioLoader.load(AUDIOS_PATH + '/' + name + '.mp3', function(buffer) {

        audio.setBuffer(buffer);

        am.audios[name] = audio;
        if (callback)
          callback.call(am);
      });
    }

    for (let i=0; i < audioList.length; i++) {
      loadSingleAudio(audioList[i]);
    };
  }

  /**
   * Load app textures
   */
  private loadTextures(texList:string[] = []) {

    const am = this;
    const tloader = new TextureLoader(this.loadingManager);

    const loadSingleTexture = function(name:string) {
      
      tloader.load(GRAPHICS_PATH + '/' + name + '.png', function(tex:Texture) {
        am.textures[name] = tex;
      });
    }

    for (let i = 0; i < texList.length; i++) {
      loadSingleTexture(texList[i]);
    }
  }

  /**
   * Load board textures
   */
  private loadBoardTextures() {

    const am = this;

    // Board textures
    const btexList = this.cm3d.config.general.boardTextures;
    const boardLoader = new TextureLoader(this.loadingManager);
    this.BoardTextures = [];

    const loadBoardTexture = function(path:string) {
      
      boardLoader.load(GRAPHICS_PATH + '/' + path, function(tex:Texture) {
        am.BoardTextures.push(tex);
      });
    }

    for (var i = 0; i < btexList.length; i++) {
      loadBoardTexture(btexList[i]);
    }
  }

  /**
   * Load GLB models
   */
  private loadGLBModels(modelList:string[] = []) {

    const am = this;
    const ml = new GLTFLoader(am.loadingManager);

    // Set up DRACOLoader
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath( 'libs/draco/' );
    ml.setDRACOLoader(dracoLoader);

    const loadSingleModel = function(name:string) {
      
      ml.load(MODEL_PATH + '/' + name + '.glb', function(gltf) {

        const model = gltf.scene;
        am.models[name] = model;
        if (gltf.animations) 
          am.modelAnim[name] = gltf.animations;
        model.frustumCulled = false;
      });
    }

    for (let i = 0; i < modelList.length; i++) {
      loadSingleModel(modelList[i]);
    }
  }

  /**
   * Load FBX models
   */
  private loadFBXModels(modelList:string[] = []) {

    // Load wolf model
    const am = this;
    const ml = new FBXLoader(this.loadingManager);

    class ParsedObject3D extends Object3D {
      isMesh:boolean;
    }

    const loadSingleModel = function(name:string) {

      ml.load(MODEL_PATH + '/' + name + '.fbx', function (object ) {

        am.models[name] = object;
        am.modelAnim[name] = object.animations;

        object.traverse(function (child) {

          const pchild = child as ParsedObject3D;
          if (pchild.isMesh) {
            //console.log(child);
            //child.frustumCulled = false;
          }
        });
      });
    }

    for (let i = 0; i < modelList.length; i++) {
      loadSingleModel(modelList[i]);
    }
  }

  /**
   * Load texture animation
   */
  private loadTextureAtlas(texList:string[] = []) {

    const am = this;
    const jloader = new FileLoader(this.loadingManager);
    const texloader = new TextureLoader(this.loadingManager);

    const loadSingleAtlas = function(name:string) {

      jloader.load(TEXTURES_PATH + '/' + name + '.json', function(obj) {
        am.atlasData[name] = JSON.parse(<string>obj);
      });

      // Load atlas
      texloader.load(TEXTURES_PATH + '/' + name + '.png', function(tex:Texture) {
        am.atlas[name] = tex;
      });
    }

    // Load json data
    for (let i = 0; i < texList.length; i++) {
      loadSingleAtlas(texList[i]);
    }
  };

  /**
   * Toggle sound
   */
  toggleSound() {

    this.soundOn = !this.soundOn;

    if (this.soundOn) {
      for (let au in this.audios) {
        this.audios[au].setVolume(1);
      }
    }
    else {
      for (let au in this.audios) {
        this.audios[au].setVolume(0);
      }
    }
  }
}

interface AtlasFrame {

  frame:{
    x:number;
    y:number;
    w:number;
    h:number;
  }
}

export interface AtlasData {

  frames:AtlasFrame[];
}
