"use strict";

import BasePanel from "../../game/BasePanel";
import GameScreen from "../screen/GameScreen";
import AssetManager from "../AssetManager";
import GameButton from "../../game/GameButton";

/**
 * @author raizensoft
 * TrophyPanel displays at the end of each game level with button interactions to change game state
 */
export default class TrophyPanel extends BasePanel {

  gs:GameScreen;
  am:AssetManager;
  title:HTMLHeadElement;
  meta:HTMLDivElement;
  timespan:HTMLSpanElement;
  movespan:HTMLSpanElement;
  lvl:HTMLSpanElement;
  btnContainer:HTMLDivElement;
  replayBtn:GameButton;
  nextBtn:GameButton;

  constructor(gs:GameScreen) {

    super();
    this.gs = gs;
    this.am = gs.am;
    this.init();
  }

  protected override init() {

    super.init();
    const el = this.el;
    el.classList.add('rs-trophy-panel');
    el.style.width = el.style.height = '90%';

    // Title
    this.title = document.createElement('h1');
    this.title.className = 'trophy-level-title';
    this.title.innerHTML = 'Level Up';

    // Meta info container
    const meta = this.meta = document.createElement('div');
    meta.className = 'meta-container';
    el.appendChild(meta);

    const timespan = this.timespan = document.createElement('span');
    timespan.innerHTML = 'Time: 100s';
    meta.appendChild(timespan);

    const movespan = this.movespan = document.createElement('span');
    movespan.innerHTML = 'Moves: 000';
    //met.appendChild(movespan);
    
    // Trophy element
    const tc:HTMLDivElement = document.createElement('div');
    tc.className = 'trophy-container';

    const trophy:HTMLImageElement = document.createElement('img');
    trophy.src = 'assets/graphics/trophy.png';
    trophy.draggable = false;
    tc.appendChild(trophy);
    el.appendChild(tc);

    const lvl:HTMLSpanElement = this.lvl = document.createElement('span');
    lvl.className = 'level-label';
    lvl.innerHTML = '1';
    tc.appendChild(lvl);

    const bc = this.btnContainer = document.createElement('div');
    bc.className = 'trophy-button-container';
    el.appendChild(bc);

    // Replay button
    this.replayBtn = new GameButton('icon-undo', this.doReplay.bind(this));
    this.replayBtn.addClass('rs-cm3d-mainbutton-extra');
    bc.appendChild(this.replayBtn.el);

    // Next icon
    this.nextBtn = new GameButton('icon-nextlevel', this.doNext.bind(this));
    this.nextBtn.addClass('rs-cm3d-mainbutton-extra');
    bc.appendChild(this.nextBtn.el);

    // Hide close button
    this.closeBtn.style.display = 'none';
  }

  /**
   * Show panel
   */
  override show() {

    super.show();

    // Update values
    this.setValues(
      this.gs.getPlayingTime(), 
      this.gs.currentLevel + 1);
  }

  /**
   * Hide panel
   */
  override hide() {

    super.hide();
    if (document.body.contains(this.title))
      document.body.removeChild(this.title);
  }

  /**
   * Replay current level
   */
  doReplay() {

    this.am.audios['ButtonClick'].play();
    this.gs.replayLevel();
  }

  /**
   * Play next level
   */
  doNext() {

    this.am.audios['ButtonClick'].play();
    this.gs.nextLevel();
  }

  /**
   * Set trophy values
   */
  setValues(times:number, level:number) {

    this.timespan.innerHTML = 'Times: ' + times + 's'; 
    this.lvl.innerHTML = level.toString();
  };
}
