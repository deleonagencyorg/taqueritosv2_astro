"use strict";

import GameScreen from "../screen/GameScreen";

const FULL_HEART = '#f24437';
const EMPTY_HEART = '#333333';

/**
 * @author raizensoft
 * HeartBar
 */
export default class HeartBar {

  gs:GameScreen;
  el:HTMLDivElement;
  hlist:HTMLSpanElement[];
  maxHealth:number;
  value:number;

  constructor(gs:GameScreen) {

    this.gs = gs;
    this.maxHealth = gs.dopt.maxHealth!;
    this.init();
  }

  /**
   * Init heart component
   */
  private init() {
    
    const el = this.el = document.createElement('div');
    el.className = 'rs-heartbar';

    // Heart list
    this.hlist = [];
    for (let i = 0; i < this.maxHealth; i++) {

      const h = document.createElement('span');
      h.className = 'rs-heart-item icon-heart';
      h.style.color = FULL_HEART;
      el.appendChild(h);
      this.hlist.push(h);
    }
  }

  /**
   * Set health bar value
   */
  setValue(val:number) {
    
    this.value = val;
    this.setHeartColor(this.maxHealth, EMPTY_HEART);
    this.setHeartColor(val, FULL_HEART);
  }

  /**
   * Set heart item color
   */
  setHeartColor(total:number, color:string) {
    
    for (let i = 0; i < total; i++) {

      const h = this.hlist[i];
      h.style.color = color;
    }
  }

  /**
   * Reset heart bar
   */
  reset() {

    this.value = this.maxHealth;
    this.setValue(this.maxHealth);
  }

}
