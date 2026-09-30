"use strict";

import { Group, Texture } from "three";
import Firework3D  from './Firework3D';

/**
 * @author raizensoft
 * A group of random Firework3D object
 */
export default class Firework3DSet extends Group{

  map:Texture;
  numFireworks:number;
  interval:number;
  callback?:() => void;

  constructor(map:Texture, numFireworks:number = 3, interval:number = 500, callback?:() => void) {

    super();
    this.map = map;
    this.numFireworks = numFireworks;
    this.interval = interval;
    this.callback = callback;
    this.init();
  }

  private init() {

    // Create firework objects
    for (let  i = 0; i < this.numFireworks; i++) {
      const fw = new Firework3D({map:this.map, callback:this.callback});
      this.add(fw);
    }
  }

  update(delta:number) {

    for (let i = 0; i < this.children.length; i++) {
      const fw = this.children[i] as Firework3D;
      fw.update(delta);
    }
  }

  changeRegion(width:number, height:number) {

    this.children.forEach(function(it) {
      (it as Firework3D).setRegion(width, height);
    });
  }

  reset() {

    this.children.forEach(function(it) {
      (it as Firework3D).reset();
    });
  }
}

