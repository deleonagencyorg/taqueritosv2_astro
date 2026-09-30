"use strict";

import { Texture, Points, BufferGeometry, PointsMaterial, AdditiveBlending, BufferAttribute} from "three";

const EASING = 0.1;
const colors:number[] = [0xffffff, 0xffff00, 0xdaff00, 0xff00a4, 0xf3ff00];

/*
 * @author raizensoft
 * Starfield class
 */
export default class Starfield extends Points {

  config:StarfieldConfig;
  targetPos:BufferAttribute;
  regionWidth:number;
  regionHeight:number;
  velocity:number[] = [];

  constructor(config:StarfieldConfig) {

    super();
    this.config = Object.assign(config, {
      color:0xffcc00,
      size:100,
      numParticles:10,
      regionWidth:100,
      regionHeight:100
    });
    this.renderOrder = -1;
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
    this.setRegion(this.regionWidth, this.regionHeight);

    // Setup material
    const pickColor = colors[Math.floor(Math.random() * colors.length)];
    this.material = new PointsMaterial({
      size: config.size,
      //color: pickColor,
      opacity: 1,
      sizeAttenuation:false,
      transparent: false,
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

    const c = this.config;
    c.regionWidth = regionWidth;
    c.regionHeight = regionHeight;

    const cpos = this.geometry.getAttribute('position');

    for (let i = 0; i < c.numParticles!; i++) {

      let tx, ty, tz;
      tx = Math.random() * c.regionWidth! - 0.5 * c.regionWidth!;
      ty = Math.random() * c.regionHeight! - 0.5 * c.regionHeight!;
      tz = 0;
      cpos.setXYZ(i, tx, ty, tz);
    }
    cpos.needsUpdate = true;
  }

  /**
   * Update firework state
   */
  update(delta:number) {

    const cpos = this.geometry.getAttribute('position');
    const c = this.config;

    for (let i = 0; i < c.numParticles!; i++) {

      let y = cpos.getY(i);
      y -=  800 * delta
      if (y < -c.regionHeight! * 0.5) {
        y = c.regionHeight! * 0.5 + 10;
        let x = Math.random() * c.regionWidth! - 0.5 * c.regionWidth!;
        cpos.setXY(i, x, y);
      }
      else
      cpos.setY(i, y);
    }
    cpos.needsUpdate = true;
  }
}

/**
 * FireWork configuration
 */
export interface StarfieldConfig {

  color?:number;
  size?:number;
  numParticles?:number;
  map?:Texture;
  regionWidth?:number;
  regionHeight?:number;
  callback?:() => void;
}

