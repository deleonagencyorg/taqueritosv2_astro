"use strict";

import {Mesh, PlaneBufferGeometry, MeshBasicMaterial, NormalBlending, Blending} from 'three';
import AssetManager from '../AssetManager';
import GameBoard from '../entity/GameBoard';

/**
 * @author raizensoft
 * Base animation class
 */
export default abstract class BaseAnimation extends Mesh {
  
  pb:GameBoard
  am:AssetManager;
  fdata:any[];
  etime:number;
  animName:string;
  fps:number;
  depthTest:boolean;
  blending:undefined|Blending;
  totalFrames:number;

  /**
   * Create new animation mesh
   */
  constructor(pb:GameBoard, 
              animName:string, 
              args?:{
                fps?:number,
                totalFrames?:number,
                depthTest?:boolean,
                blending?:undefined|Blending
              }) {

    super();
    this.animName = animName;
    this.pb = pb;
    this.am = pb.am;
    args = args || {};
    this.fps = args.fps || 24;
    this.totalFrames = args.totalFrames || 24;
    this.depthTest = args.depthTest || false;
    this.blending = args.blending || NormalBlending;
    this.init();
  }

  /**
   * Initialize animation data
   */
  protected init() {

    const am = this.am;
    this.fdata = [];

    const frames = am.atlasData[this.animName].frames;
    const atlasTex = am.atlas[this.animName];

    let iw:number = atlasTex.image.width, ih:number = atlasTex.image.height;
    for (let k in frames) {

      const f = frames[k].frame;

      this.fdata[k] = {

        repeat:[f.w / iw, f.h / ih],
        offsetX: ((f.x) / iw),
        offsetY: 1 - (f.h / ih) - (f.y / ih)
      };
    }

    // Display plane
    this.geometry = new PlaneBufferGeometry(1, 1);
    this.material = new MeshBasicMaterial({
      depthTest:this.depthTest, 
      blending:this.blending,
      //blending:NormalBlending,
      transparent:true, 
      map:atlasTex});

    // Reset to default values
    this.reset();
  }

  /**
   * Set animation size
   */
  setSize(width:number, height:number) {
    this.scale.set(width, height, 1);
  }

  /**
   * Update animation
   */
  update(delta:number) {

    if (!this.visible) return;
    this.etime += delta;
    const currentFrame = Math.floor(this.etime * this.fps) % this.totalFrames;
    
    const fdata = this.fdata[currentFrame];
    const mat = this.material as MeshBasicMaterial;
    mat.map!.repeat.set(fdata.repeat[0], fdata.repeat[1]);
    mat.map!.offset.x = fdata.offsetX;
    mat.map!.offset.y = fdata.offsetY;
  };

  /**
   * Reset animation data
   */
  reset() {
    this.etime = 0;
  }

};

