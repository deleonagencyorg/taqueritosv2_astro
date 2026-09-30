"use strict";

import { Box3, Group } from "three";
import EnergyExplodeAnimation from "../anim/EnergyExplodeAnimation";
import AssetManager from "../AssetManager";
import GameOption from "../GameOption";
import Coin from "./Coin";
import Crystal from "./Crystal";
import GameBoard from "./GameBoard";

/**
 * @author raizensoft
 * ItemContainer manages coin and crystal generation
 */
export default class ItemContainer extends Group {

  private pb:GameBoard;
  private am:AssetManager;
  private dopt:GameOption;
  private regionWidth:number;
  private regionHeight:number;
  private coinSpeed:number;
  private crystalSpeed:number;
  private shatterId:number;
  isShattering:boolean;
  cyIndex:number;
  copieces:Coin[];
  cypieces:Crystal[];

  constructor(pb:GameBoard) {

    super();
    this.pb = pb;
    this.am = pb.am;
    this.dopt = pb.dopt;
    this.copieces = [];
    this.cypieces = [];
    this.init();
  }

  /**
   * Init class components
   */
  private init() {

    this.regionWidth = this.pb.imageWidth;
    this.regionHeight = this.pb.imageHeight;
    this.coinSpeed = this.dopt.coinSpeed!;
    this.crystalSpeed = this.dopt.crystalSpeed!;
    this.isShattering = false;
    this.cyIndex = 0;
  }

  /**
   * Generate coins
   */
  generate() {

    // Generate coin
    const w = this.pb.imageWidth, h = this.pb.imageHeight;
    for (let i = 0; i < this.dopt.numCoins!; i++) {

      const co = new Coin(this.pb);
      co.position.x = Math.random() * w - w * 0.5;
      co.position.y = Math.random() * h - h * 0.5;
      this.copieces.push(co);
      this.add(co);
    }

    // Generate Crystals
    for (let i = 0; i < this.dopt.numCrystals!; i++) {

      const cy = new Crystal(this.pb);
      cy.position.x = Math.random() * w - w * 0.5;
      cy.position.y = Math.random() * h - h * 0.5;
      this.cypieces.push(cy);
      this.add(cy);
    }
  }

  calRegion() {

    const w = this.regionWidth = window.innerWidth / this.pb.rt;
    const h = this.regionHeight = window.innerHeight / this.pb.rt;

    this.copieces.forEach((it:Coin) => {
      it.position.x = Math.random() * w - w * 0.5;
      it.position.y = Math.random() * h - h * 0.5;
    });

    this.cypieces.forEach((it:Crystal) => {
      it.position.x = Math.random() * w - w * 0.5;
      it.position.y = Math.random() * h - h * 0.5;
    });
  }

  /**
   * Check if any coins hit the box
   */
  hitTest(box:Box3) {

    // Coin hit test
    this.copieces.forEach((it:Coin) => {
      if (!it.isHit && it.getBoundingBox().intersectsBox(box)) {

        if (this.am.audios['CollectCoin'].isPlaying)
          this.am.audios['CollectCoin'].stop();
        this.am.audios['CollectCoin'].play();
        this.pb.showExplode(it.position);
        this.pb.g3d.gs.addScore(this.pb.dopt.scoreUnit!);
        it.position.x = Math.random() * this.regionHeight - this.regionHeight * 0.5;
        it.position.y = this.regionHeight * 0.5 + 1;
      }
    });

    if (this.isShattering) return;

    // Crystal hit test
    this.cypieces.forEach((it:Crystal) => { 
      if (it.getBoundingBox().intersectsBox(box)) {
        if (this.pb.sm.hitable) {

          this.am.audios['GetHit'].play();
          const hp = this.pb.sm.decreaseHealth();
          this.pb.sm.blink();
          const hbar = this.pb.g3d.gs.header.hbar;
          if (hp > 0){
            hbar.setValue(hp);
          }
          else  {
            this.pb.g3d.setLoseState();
          }
        }
      }
    });
  }

  /**
   * Update game time
   */
  update(delta:number) {

    this.copieces.forEach((it:Coin) => {

      it.update(delta);
      it.position.y -= this.coinSpeed * delta;
      if (it.position.y < -this.regionHeight * 0.5 - 1) {
        it.position.x = Math.random() * this.regionHeight - this.regionHeight * 0.5;
        it.position.y = this.regionHeight * 0.5 + 1;
        it.reset(); // Update texture
      }
    });

    if (this.isShattering) {
      if (this.cyIndex == this.cypieces.length)
        this.cyIndex = 0;
      this.pb.ebuzz.position.copy(this.cypieces[this.cyIndex].position);
      this.cyIndex++;
      this.cypieces.forEach((it:Crystal) => {
        it.update(delta);
      });
      return;
    }
    this.cypieces.forEach((it:Crystal) => {

      it.update(delta);
      it.position.y -= this.crystalSpeed * delta;
      if (it.position.y < -this.regionHeight * 0.5 - 1) {
        it.position.x = Math.random() * this.regionHeight - this.regionHeight * 0.5;
        it.position.y = this.regionHeight * 0.5 + 1;
      }
    });
  }

  /**
   * Shatter crystals
   */
  shatterCrystals() {

    this.isShattering = true;
    this.am.audios['EExplosion'].play();
    this.cyIndex = 0;
    this.pb.ebuzz.visible = true;
    this.cypieces.forEach((it:Crystal) => {
      it.shatter();
    });

    // Reset crystals
    clearTimeout(this.shatterId);
    this.shatterId = setTimeout(() => {

      this.pb.ebuzz.visible = false;
      this.cypieces.forEach((it:Crystal) => {

        it.reset();
        it.position.x = Math.random() * this.regionHeight - this.regionHeight * 0.5;
        it.position.y = this.regionHeight * 0.5 + 1;
      });
      this.isShattering = false;
    }, this.dopt.shatterDuration!);
  }
}
