"use strict";

import GameButton from "../../game/GameButton";
import AssetManager from "../AssetManager";
import GameScreen from "../screen/GameScreen";
import anime from 'animejs';

/**
 * @author raizensoft
 * The bar will appear in won game screen
 */
export default class GameScreenWonBar {

  gs:GameScreen;
  el:HTMLDivElement;
  status:HTMLHeadElement;
  nextBtn:GameButton;
  am:AssetManager;

  constructor(gs:GameScreen) {

    this.gs = gs;
    this.am = gs.am;
    this.init();
  }

  private init() {

    // Root container
    const el = this.el = document.createElement('div');
    el.className = 'rs-cm3d-gamewonbar';
    el.style.bottom = '-85px';

    // Status
    this.status = document.createElement('h1');
    this.status.className = 'trophy-level-title';
    this.status.innerHTML = 'DRAW';

    // Next icon
    this.nextBtn = new GameButton('icon-nextlevel', this.doNext.bind(this));
    this.nextBtn.addClass('rs-cm3d-mainbutton-extra');
    el.appendChild(this.nextBtn.el);
  }

  /**
   * Load next level
   */
  doNext() {

    this.am.audios['ButtonClick'].play();
    this.gs.nextLevel();
  }

  /**
   * Show the bar
   */
  show(status:string) {

    anime({
      targets:this.el,
      bottom:12,
      easing:'easeOutQuint',
      duration:800
    });
    this.setStatus(status);
    document.body.appendChild(this.status);
    this.gs.trophyPanel.show();
  }

 /**
   * Set won/lose/draw status
   */
  setStatus(status:string) {
    this.status.innerHTML = status;
  }

  /**
   * Hide the bar
   */
  hide() {

    anime({
      targets:this.el,
      bottom:-85,
      easing:'easeOutQuint',
      duration:800
    });
    if (document.body.contains(this.status))
      document.body.removeChild(this.status);
  }
}

