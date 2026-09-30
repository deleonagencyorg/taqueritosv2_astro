"use strict";

import { Mesh, PlaneGeometry, MeshPhongMaterial } from "three";
import GameBoard from "./GameBoard";
import AssetManager from "../AssetManager";

/**
 * @author raizensoft
 * WalkingStep
 */
export default class WalkingStep extends Mesh {

  pb:GameBoard;
  am:AssetManager;
  currentScale:number;
  isHightLight:boolean;
  blinkId:number;

  constructor(pb:GameBoard) {

    super();
    this.pb = pb;
    this.am = pb.am;
    this.init();
  }

  /**
   * Init class components
   */
  private init() {

    const geometry = new PlaneGeometry(1, 1);
    const material = new MeshPhongMaterial({specular:0x222222, map:this.am.textures['Step']});
    this.geometry = geometry;
    this.material = material;
  }
  
  rotateLeft() {
    this.rotation.z = Math.PI;
  }

  rotateRight() {
    this.rotation.z = 0;
  }

  rotateUp() {
    this.rotation.z = Math.PI * 0.5;
  }

  rotateDown() {
    this.rotation.z = -Math.PI * 0.5;
  }

  /**
   * Resize walking step
   */
  setSize(size:number) {

    this.currentScale = size;
    this.scale.set(size, size, size);
  }

  /**
   * Reset state
   */
  reset() {

    this.currentScale = 1;
    this.isHightLight = false;
    this.scale.set(1, 1, 1);
    this.rotateRight();
    const mat = this.material as MeshPhongMaterial;
    mat.map = this.am.textures['Step'];
  }

  /**
   * Set step as hight light step
   */
  setHightLight() {

    this.isHightLight = true;
    (<MeshPhongMaterial>this.material).map = this.am.textures['HStep'];
  }

  /**
   * Blink santa
   */
  blink() {
    
    // Blink for a short time
    let count = 0;

    const doBlink =  () => {
      
      clearTimeout(this.blinkId);
      if (count++ < 8) {
        this.visible = !this.visible;
        this.blinkId = setTimeout(doBlink, 50);
      }
      else {
        this.visible = true;
      }
    }
    doBlink();
  }
}

