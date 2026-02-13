"use strict";

import { Group, Mesh } from "three";
import AssetManager from "../AssetManager";
import GameBoard from "./GameBoard";
import {clone} from 'three/examples/jsm/utils/SkeletonUtils';

const P_COUNT = 5;
const MODEL_SCALE = 1;

/**
 * @author raizensoft
 * Platform
 */
export default class Platform extends Group {

  pb:GameBoard;
  am:AssetManager;

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

    const offsetX = -P_COUNT * 2 * 0.5 + 1;
    for (let i = 0; i < P_COUNT; i++) {

      const cube:Mesh = clone(this.am.models['CubeGrass']);
      cube.position.x = i * 2 + offsetX;
      this.add(cube);
    }
  }

  /**
   * Reset platform
   */
  reset() {

  }

}
