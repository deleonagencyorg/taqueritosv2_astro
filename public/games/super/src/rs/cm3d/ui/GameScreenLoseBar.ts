"use strict";

import GameButton from "../../game/GameButton";
import AssetManager from "../AssetManager";
import GameScreen from "../screen/GameScreen";
import anime from 'animejs';

/**
 * @author raizensoft
 * The bar will appear in lose game screen
 */
export default class GameScreenLoseBar {

  gs:GameScreen;
  el:HTMLDivElement;
  replayBtn:GameButton;
  status:HTMLHeadElement;
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

    // Replay button
    this.replayBtn = new GameButton('icon-undo', this.doReplay.bind(this));
    this.replayBtn.addClass('rs-cm3d-mainbutton-extra');
    el.appendChild(this.replayBtn.el);

    // Status
    this.status = document.createElement('h1');
    this.status.className = 'trophy-level-title';
    this.status.innerHTML = 'DRAW';
  }

  /**
   * Replay current level
   */
  doReplay() {

    this.am.audios['ButtonClick'].play();
    this.gs.replayLevel();
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

 /**
   * Set won/lose/draw status
   */
  setStatus(status:string) {
    this.status.innerHTML = status;
  }
}
