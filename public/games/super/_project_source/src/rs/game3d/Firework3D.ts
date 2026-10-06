"use strict";

import { Texture, Points, BufferGeometry, PointsMaterial, AdditiveBlending, BufferAttribute} from "three";

const EASING = 0.1;
const colors:number[] = [0xffffff, 0xffff00, 0xdaff00, 0xff00a4, 0xf3ff00];

/*
 * @author raizensoft
 * Firework3D class
 */
export default class Firework3D extends Points {

  config:FireworkConfig;
  targetPos:BufferAttribute;
  regionWidth:number;
  regionHeight:number;
  state:Firework3DState = Firework3DState.EXPLODED;
  velocity:number[] = [];

  constructor(config:FireworkConfig) {

    super();
    this.config = Object.assign(config, {
      launchHeight:300,
      sphereRadius:200,
      color:0xffcc00,
      size:72,
      numParticles:24
    });
    this.init();
  }

  private init() {

    const config = this.config;

    // Geometry
    this.geometry = new BufferGeometry();

    // Current position attribute
    const currentArray = new Float32Array(config.numParticles! * 3);
    const cpos = new BufferAttribute(currentArray, 3);
    this.geometry.setAttribute('position', cpos);

    // Target array holds target positions of each vertex
    const targetArray = new Float32Array(config.numParticles! * 3);

    // Target position
    const tpos = this.targetPos = new BufferAttribute(targetArray, 3);

    const minRadius = 50;

    for (let i = 0; i < config.numParticles!; i++) {

      let tx, ty, tz;
      tx = 2 * Math.random() * config.sphereRadius! - config.sphereRadius! + minRadius;
      ty = 2 * Math.random() * config.sphereRadius! - config.sphereRadius! + minRadius;
      tz = 2 * Math.random() * config.sphereRadius! - config.sphereRadius! + minRadius;
      tpos.setXYZ(i, tx, ty, tz);
      this.velocity[i] = 0;
    }

    // Setup material
    const pickColor = colors[Math.floor(Math.random() * colors.length)];
    this.material = new PointsMaterial({
      size: config.size,
      color: pickColor,
      opacity: 1,
      transparent: true,
      blending:AdditiveBlending,
      depthTest: false,
      map:config.map
    });
    this.material.needsUpdate = true;
  }

  /**
   * Set region
   * @method setRegion
   */
  setRegion(regionWidth:number, regionHeight:number) {

    this.regionWidth = regionWidth;
    this.regionHeight = regionHeight;
  }

  /**
   * Update firework state
   */
  update(delta:number) {

    const cpos = this.geometry.getAttribute('position');
    const tpos = this.targetPos;
    const c = this.config;

    if (this.state == Firework3DState.EXPLODED) {

      for (let i = 0; i < c.numParticles!; i++) {

        let x = cpos.getX(i), y = cpos.getY(i), z = cpos.getZ(i);
        cpos.setXYZ(i,
                    x + (tpos.getX(i) - x) * EASING,
                    y + (tpos.getY(i) - y) * EASING,
                    z + (tpos.getZ(i) - z) * EASING);
        if (Math.abs(tpos.getX(i) - x) < 0.5) {
          this.state = Firework3DState.FALLING;
        }
      }
    }
    else {
      const gravity = -80 * delta;
      for (let i = 0; i < c.numParticles!; i++) {

        let y = cpos.getY(i);
        this.velocity[i] += gravity;
        cpos.setY(i, y + this.velocity[i]);
      }
      const mat = this.material as PointsMaterial;
      mat.opacity += (0 - mat.opacity) * 0.05;
      if (mat.opacity <= 0.025)
        this.reset();
    }
    cpos.needsUpdate = true;
  }

  /**
   * Reset firework particles
   */
  reset() {

    this.rotation.z = 0;

    if (this.regionWidth) {

      this.position.x = Math.random() * this.regionWidth - this.regionWidth * 0.5;
      const hlh = this.regionHeight - this.config.launchHeight!;
      this.position.y = Math.random() * hlh - hlh * 0.5;
    };
    this.state = Firework3DState.EXPLODED;
    const mat = this.material as PointsMaterial;
    mat.opacity = 1;
    mat.color.set(colors[Math.floor(Math.random() * colors.length)]);
    mat.needsUpdate = true;

    const config = this.config;
    const cpos = this.geometry.getAttribute('position');
    const tpos = this.targetPos;
    const minRadius = 50;

    for (let i = 0; i < config.numParticles!; i++) {

      let tx, ty, tz;
      tx = 2 * Math.random() * config.sphereRadius! - config.sphereRadius! + minRadius;
      ty = 2 * Math.random() * config.sphereRadius! - config.sphereRadius! + minRadius;
      tz = 2 * Math.random() * config.sphereRadius! - config.sphereRadius! + minRadius;
      tpos.setXYZ(i, tx, ty, tz);

      // Reset current positions
      this.velocity[i] = 0;
      cpos.setXYZ(i, 0, 0, 0);
    }
    cpos.needsUpdate = true;
    if (config.callback) config.callback.call(this);
  }
}

/**
 * FireWork state
 */
export enum Firework3DState {

  EXPLODED,
  FALLING
}

/**
 * FireWork configuration
 */
export interface FireworkConfig {

  launchHeight?:number;
  sphereRadius?:number;
  color?:number;
  size?:number;
  numParticles?:number;
  map?:Texture;
  callback?:() => void;
}

