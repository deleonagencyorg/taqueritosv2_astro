"use strict";

import BasePanel from "../../game/BasePanel";
import GameButton from "../../game/GameButton";
import AssetManager from "../AssetManager";
import GameScreen from "../screen/GameScreen";
import anime from 'animejs';

/**
 * @author raizensoft
 * GameOverPanel
 */
export default class GameOverPanel extends BasePanel {

  gs:GameScreen;
  am:AssetManager;
  title:HTMLHeadElement;
  meta:HTMLDivElement;
  panelText:HTMLSpanElement;
  panelText2:HTMLSpanElement;
  btnContainer:HTMLDivElement;
  replayBtn:GameButton;

  constructor(gs:GameScreen) {

    super();
    this.gs = gs;
    this.am = gs.am;
    this.init();
  }

  /**
   * Init class components
   */
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
    const met = this.meta = document.createElement('div');
    met.className = 'meta-container';
    el.appendChild(met);

    const panelText = this.panelText = document.createElement('span');
    panelText.innerHTML = "Score: 100";
    panelText.style.color = '#ccc';
    met.appendChild(panelText);

    const panelText2 = this.panelText2 = document.createElement('span');
    panelText2.innerHTML = "Best Score: 100";
    panelText2.style.fontSize = '28px';
    panelText2.style.fontWeight = 'bolder';
    met.appendChild(panelText2);

    // Trophy element
    const tc = document.createElement('div');
    tc.className = 'trophy-container';

    const trophy = document.createElement('img');
    trophy.src = 'assets/graphics/trophy.png';
    trophy.draggable = false;
    tc.appendChild(trophy);
    el.appendChild(tc);

    const bc = this.btnContainer = document.createElement('div');
    bc.className = 'trophy-button-container';
    el.appendChild(bc);

    // Replay button
    this.replayBtn = new GameButton('icon-undo', this.doReplay.bind(this));
    bc.appendChild(this.replayBtn.el);

    // Hide close button
    this.closeBtn.style.display = 'none';
  }

  /**
   * Show panel
   */
  override show() {

    super.show();
    this.setScore(this.gs.getCurrentScore());
  }

  /**
   * Set best score
   */
  setScore(score:number) {
    this.panelText.innerHTML = 'Score: ' + score;
    this.panelText2.innerHTML = 'Best Score: ' + this.gs.cm3d.pref.data.bestScore;
  }

  /**
   * Hide panel
   */
  hide() {
    super.hide();
  }

  /**
   * Replay current level
   */
  doReplay() {

    this.am.audios['ButtonClick'].play();
    this.gs.replayLevel();
  }
}
