"use strict";

import { Group, PointLight, PointLightHelper, AmbientLight } from "three";
import Game3D from "./Game3D";
import GameOption from "./GameOption";

/**
 * @author raizensoft
 * The game main lights including point light and ambient light
 */
export default class GameLight extends Group{

  g3d:Game3D;
  dopt:GameOption;
  speed:number;
  bound:number[];
  dirX:number;
  lights:CustomPointLight[];

  constructor(g3d:Game3D) {

    super();
    this.dopt = g3d.dopt;
    this.speed = this.dopt.lightMovingSpeed!;
    this.g3d = g3d;
    this.init();
  }

  private init() {

    // Default bound values
    this.bound = [300, 400, 10];
    this.dirX = 1;
    const lights:CustomPointLight[] = this.lights = [];

    const intensity = 0.85;
    lights[0] = new CustomPointLight( 0xeeeeee, intensity, 0 );
    lights[1] = new CustomPointLight( 0xeeeeee, intensity, 0, 1);
    lights[0].oZ = 4;
    lights[1].oZ = 10;

    //this.add( lights[ 0 ] );
    this.add( lights[ 1 ] );

    // Light visual helpers
    //const scene = this.g3d.scene;
    //const h1 = new PointLightHelper(lights[0], 1);
    //const h2 = new PointLightHelper(lights[1], 2);
    //scene.add(h1);
    //scene.add(h2);

    const ambientLight = new AmbientLight( this.dopt.ambientLight, 0.8);
    this.add( ambientLight );
  }

  /**
   * Move and animate lights
   */
  animate() {
    
    this.lights[1].position.x += this.dirX * this.speed;
    const lX = this.lights[1].position.x;
    if (lX > this.bound[0] * 0.5 || lX < -this.bound[0] * 0.5)
      this.dirX = -this.dirX;
  }

  /**
   * Set boundary for light movements
   */
  setBound(bound:number[], shiftZ?:number) {

    this.bound = bound;
    const l1 = this.lights[1];
    l1.position.set(bound[0] * 0.5, 0, l1.oZ);
  }
}

class CustomPointLight extends PointLight {
  oZ:number;
}
