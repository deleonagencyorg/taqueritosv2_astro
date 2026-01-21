"use strict";

import { 
  Mesh, 
  Box3,
  CylinderBufferGeometry, 
  MeshPhongMaterial, 
  MeshBasicMaterial, 
  BoxHelper } from "three";
import AssetManager from "../AssetManager";
import GameBoard from "./GameBoard";

const RADIUS = 0.5;
const DEPTH = 0.15;
const SEGMENT = 32;
const SIDE_COLOR = 0xeeeeee;

/**
 * @author raizensoft
 * Coin
 */
export default class Coin extends Mesh {

  pb:GameBoard;
  am:AssetManager;
  theMaterial:MeshPhongMaterial;
  bh:BoxHelper;
  bb:Box3;
  speedX:number;
  speedY:number;
  isHit:boolean;

  constructor(pb:GameBoard) {

    super();
    this.pb = pb;
    this.am = pb.am;
    this.speedX = Math.random() * 5;
    this.speedY = Math.random() * 5;
    this.init();
  }

  /**
   * Init class components
   */
  private init() {

    const sideMat = new MeshBasicMaterial({color:SIDE_COLOR});
    sideMat.depthTest = false;
    this.geometry = new CylinderBufferGeometry(RADIUS, RADIUS, DEPTH, SEGMENT);
    this.theMaterial = new MeshPhongMaterial();
    this.theMaterial.depthTest = false;
    this.material = [sideMat, this.theMaterial, this.theMaterial];
    this.rotation.x = Math.random() * Math.PI;
    this.rotation.z = Math.random() * Math.PI;
    this.bb = new Box3();
    this.reset();
  }

  /**
   * Reset coin
   */
  reset() {

    const coins = this.pb.g3d.gs.config.data.coins;
    const theCoin = coins[Math.floor(Math.random() * coins.length)];
    this.theMaterial.map = this.am.textures[theCoin];
    this.theMaterial.needsUpdate = true;
    this.isHit = false;
  }

  /**
   * Update coin
   */ 
  update(delta:number) {

    this.rotation.x += delta * this.speedX;
    this.rotation.z += delta * this.speedY;
  }

  getBoundingBox() {

    this.bb.setFromObject(this);
    return this.bb;
  }
}
