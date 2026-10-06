"use strict";

import { Mesh, MeshBasicMaterial, AnimationMixer, Vector3, Box3Helper, Box3, BoxBufferGeometry } from "three";
import AssetManager from "../AssetManager";
import AnimatedModel from "./AnimatedModel";
import GameBoard from "./GameBoard";
import {clone} from 'three/examples/jsm/utils/SkeletonUtils';
import anime from 'animejs';

const MODEL_SCALE = 1.35;
const JUMP_SPEED = 1.35;
const EASING = 'easeOutQuint';
const BLINK_COUNT = 14;

/**
 * @author raizensoft
 * Superman
 */
export default class Superman extends AnimatedModel {

  private pb:GameBoard;
  private am:AssetManager;
  private currentIndex:number;
  private track:Mesh;
  private vy:number;
  private groundY:number;
  private isIdle:boolean;
  private moveId:number;
  private isRunning:boolean;
  private gravity:number;
  private blinkId:number;
  startTimeout:boolean;
  isBlinking:boolean;
  currentHealth:number;
  model:Mesh;
  bb:Box3;
  bh:Box3Helper;

  constructor(pb:GameBoard) {

    super();
    this.pb = pb;
    this.am = pb.am;
    this.modelAnim = this.am.modelAnim['Superman'];
    this.init();
  }

  /**
   * Init class components
   */
  private init() {

    // Init model
    const model:Mesh = this.model = clone(this.am.models['Superman']);
    model.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
    this.add(model);

    // Init mixer
    this.mixer = new AnimationMixer(this.model);
    this.reset();

    // Init tracking box
    this.track = new Mesh(
      new BoxBufferGeometry(1.45, 2.85, 1),
      new MeshBasicMaterial({color:0xffcc00, wireframe:true})
    );
    this.track.position.y = 2;
    this.track.visible = false;
    this.add(this.track);

    // Init bounding box
    this.bb = new Box3();
    this.bh = new Box3Helper(this.bb);
    //this.pb.g3d.scene.add(this.bh);
    this.reset();
  }

  /**
   * Show superman
   */
  show() {

    this.visible = true;
    this.scale.set(0.01, 0.01, 0.01);
    anime.remove(this.scale);
    anime({
      targets:this.scale,
      x:1,
      y:1,
      z:1,
      duration:500,
      easing:'easeOutQuint'
    });
    setTimeout(() => {
      this.startTimeout = true;
    }, 1500);
  }

  /**
   * Hide superman
   */
  hide() {
    this.visible = false;
  }

  /**
   * Do jump
   */
  jump() {

    if (!this.isIdle) return;
    this.am.audios['Jump'].play();
    this.isIdle = false;
    this.isRunning = false;
    this.playJumping();
    this.vy = JUMP_SPEED;
  }

  /**
   * Move superman left
   */
  moveLeft() {

    if (this.currentIndex <= -2) return;
    this.currentIndex--;
    anime.remove(this.rotation);
    anime({
      targets:this.rotation,
      y:-Math.PI * 0.5,
      easing:"easeOutQuint"
    });
    this.doMoving();
  }

  /**
   * Move superman right
   */
  moveRight() {

    if (this.currentIndex >=2) return;
    this.currentIndex++;
    anime.remove(this.rotation);
    anime({
      targets:this.rotation,
      y:Math.PI * 0.5,
      easing:"easeOutQuint"
    });
    this.doMoving();
  }

  private doMoving() {

    const duration = this.pb.dopt.runningDuration!;
    if (!this.isRunning) {
      this.playRunning();
    }
    if (this.isIdle) this.isRunning = true;
    anime.remove(this.position);
    anime({
      targets:this.position,
      x:this.currentIndex * 2,
      easing:EASING,
      duration:duration
    });
    clearTimeout(this.moveId);
    this.moveId = setTimeout(() => {

      this.isRunning = false;
      this.playIdle();
      anime.remove(this.rotation);
      anime({
        targets:this.rotation,
        y:0,
        easing:"easeOutQuint"
      });
    }, duration * 0.8);
  }

  /**
   * Play running animation
   */
  playRunning() {
    this.play('Running');
  }

  /**
   * Play idle animation
   */
  playIdle() {
    this.play('mixamo.com');
  }

  /**
   * Play jump animation
   */
  playJumping() {
    this.play('Falling Idle');
  }

  /**
   * Return current 2d projection
   */
  getProjection():[number, number] {

    // Show coin counter
    const g3d = this.pb.g3d;
    const pos = new Vector3();
    this.getWorldPosition(pos);
    pos.project(g3d.camera);
    const hw = g3d.width * 0.5;
    const hh = g3d.height * 0.5;
    const xp = pos.x * hw + hw;
    const yp = -pos.y * hh + hh;
    return [xp, yp];
  }

  /**
   * Return bounding box
   */
  getBoundingBox():Box3 {

    this.bb.setFromObject(this.track);
    return this.bb;
  }

  /**
   * Reset superman state
   */
  reset() {

    this.currentIndex = 0;
    this.gravity = this.pb.dopt.gravity!;
    this.isRunning = false;
    this.vy = 0;
    this.groundY = -this.pb.imageHeight * 0.45;
    this.isIdle = true;
    this.currentHealth = this.pb.dopt.maxHealth!;
    this.startTimeout = false;
    this.position.x  = 0;
  }

  /**
   * Update model
   */
  update(delta:number) {

    super.update(delta);

    // Update position
    this.vy += this.gravity * delta;
    this.position.y += this.vy;
    if (this.position.y < this.groundY) {

      this.position.y = this.groundY;
      if (!this.isIdle) {
        this.isIdle = true;
        this.playIdle();
      }
    }
  }

  /**
   * Blink effect
   */
  blink() {

    // Blink for a short time
    let count = 0;
    this.isBlinking = true;

    const doBlink = () => {
      
      clearTimeout(this.blinkId);
      if (count++ < BLINK_COUNT) {
        this.visible = !this.visible;
        this.blinkId = setTimeout(doBlink, 50);
      }
      else {
        this.visible = true;
        this.isBlinking = false;
      }
    }
    doBlink();
  }

  /**
   * Decrease current health
   */
  decreaseHealth() {

    this.currentHealth--;
    return this.currentHealth;
  }

  get hitable():boolean {
    return !this.isBlinking && this.startTimeout;
  }
}
