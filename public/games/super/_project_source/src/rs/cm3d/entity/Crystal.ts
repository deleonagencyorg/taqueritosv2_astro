"use strict";

import { Box3, Box3Helper, Group, Mesh } from "three";
import GameBoard from "./GameBoard";
import {clone} from 'three/examples/jsm/utils/SkeletonUtils';
import AssetManager from "../AssetManager";
import anime from 'animejs';

const MODEL_SCALE = 0.5;
const BB_SCALE = -0.25;

/**
 * @author raizensoft
 * Crystal
 */
export default class Crystal extends Group {

  pb:GameBoard;
  am:AssetManager;
  model:Mesh;
  bh:Box3Helper;
  bb:Box3;

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

    const model = this.model = clone(this.am.models['Crystal']);
    model.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
    model.rotation.x = Math.random() * Math.PI;
    model.rotation.z = Math.random() * Math.PI;
    this.add(model);

    // Bounding box
    this.bb = new Box3();
    this.bb.setFromObject(this.model);

    // Box3 helper
    this.bh = new Box3Helper(this.bb);
    //this.pb.g3d.scene.add(this.bh);
  }

  /**
   * Update crystal
   */
  update(delta:number) {

    this.rotation.x += delta * 5;
    this.rotation.z += delta * 5;
    this.bb.setFromObject(this.model);
    this.bb.expandByScalar(BB_SCALE);
  }

  getBoundingBox():Box3 {

    this.bb.setFromObject(this.model);
    this.bb.expandByScalar(BB_SCALE);
    return this.bb;
  }

  /**
   * Simple shatter animation
   */
  shatter() {

    anime.remove(this.scale);
    anime({
      targets:this.scale,
      x:0.01,
      y:0.01,
      z:0.01,
      duration:this.pb.dopt.shatterDuration!,
      easing:'easeInQuad'
    });
  }

  reset() {

    anime.remove(this.scale);
    this.scale.set(1, 1, 1);
  }
}
