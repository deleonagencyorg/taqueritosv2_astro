"use strict";

import ImagePanel from "../../game/ImagePanel";
import AssetManager from "../AssetManager";
import Game3D from "../Game3D";
import GameConfig, { Level } from "../GameConfig";
import GameOption from "../GameOption";
import CryptoMan from "../CryptoMan";
import GameScreenButtonBar from "../ui/GameScreenButtonBar";
import GameScreenHeader from "../ui/GameScreenHeader";
import GameScreenLoseBar from "../ui/GameScreenLoseBar";
import GameScreenWonBar from "../ui/GameScreenWonBar";
import HelpPanel from "../ui/HelpPanel";
import TrophyPanel from "../ui/TrophyPanel";
import ShatterButton from "../ui/ShatterButton";
import GameOverPanel from "../ui/GameOverPanel";

export default class GameScreen {

  // References
  am:AssetManager;
  cm3d:CryptoMan;
  game3d:Game3D;
  el:HTMLDivElement;
  config:GameConfig;
  dopt:GameOption;

  // Subcomponents
  header:GameScreenHeader;
  bbar:GameScreenButtonBar;
  wbar:GameScreenWonBar;
  lbar:GameScreenLoseBar;
  sbtn:ShatterButton;
  shatterId:number;

  // Data
  currentLevel:number;
  levels:Level[];

  // Panels
  imagePanel:ImagePanel;
  trophyPanel:TrophyPanel;
  hpanel:HelpPanel;
  gopanel:GameOverPanel;

  constructor(cm3d:CryptoMan, config:GameConfig) {

    this.cm3d = cm3d;
    this.config = config;
    this.am = cm3d.assetManager;
    this.dopt = cm3d.defaultOptions;
    this.init();
  }

  private init() {

    // Root element
    const gs = this;
    const el = this.el = document.createElement('div');
    el.className = 'rs-gscreen';
    el.style.width = el.style.height = '100%';
    el.style.display = 'none';

    // Setup level data
    this.levels = this.config.data.levels;

    // Setup panels
    this.initPanel();

    // Header
    this.header = new GameScreenHeader(this);
    el.appendChild(this.header.el);
    
    // ButtonBar
    this.bbar = new GameScreenButtonBar(this);
    el.appendChild(this.bbar.el);

    // Wonbar
    this.wbar = new GameScreenWonBar(this);
    el.appendChild(this.wbar.el);

    // Lose bar
    this.lbar = new GameScreenLoseBar(this);
    el.appendChild(this.lbar.el);

    // ShatterButton
    this.sbtn = new ShatterButton(this, () => {
      this.game3d.container.gameBoard.shatterCrystals();
    });
    document.body.appendChild(this.sbtn.el);
    this.sbtn.show();

    // Game3d
    this.game3d = new Game3D(this);
    el.appendChild(this.game3d.el);

    // Initial parameters
    this.currentLevel = 0;
  }

  /**
   * Build panels
   */
  private initPanel() {

    // Image panel
    this.imagePanel = new ImagePanel(this.applyNewLevel.bind(this));

    // Trophy panel
    this.trophyPanel = new TrophyPanel(this);

    this.gopanel = new GameOverPanel(this);

    // Help Panel
    if (this.cm3d.homeScreen )
      this.hpanel = this.cm3d.homeScreen.hpanel;
    else
      this.hpanel = new HelpPanel(this);
  }

  /**
   * Load a level index
   */
  loadLevel(levelIndex:number) {

    const gs = this;

    // Hide current panels
    this.trophyPanel.hide();
    this.wbar.hide();
    this.gopanel.hide();
    this.lbar.hide();
    this.sbtn.reset();
    this.sbtn.show();

    // Show active bar
    this.showButtonBar();

    function onLoadCallback () {

      gs.reset();
      gs.header.hbar.reset();
      gs.header.timeBtn.resume();
      gs.header.levelBtn.setScore(0);
    }
    this.game3d.loadLevel(levelIndex, onLoadCallback);
    this.currentLevel = levelIndex;
  }

  /**
   * Load next level
   */
  nextLevel() {

    // Calculate next level index
    let index = this.currentLevel + 1;

    // Back to level 0
    if (index == this.levels.length)
      index = 0;
    this.loadLevel(index);
  }

  /**
   * Unlock the next level
   */
  unlockNextLevel() {

    let index = this.currentLevel + 1;

    // Back to level 0
    if (index < this.levels.length) {
      this.cm3d.pref.saveUnlock(index);
    }
  }

  /**
   * Replay current level
   */
  replayLevel() {
    this.loadLevel(this.currentLevel);
  }

  /**
   * Reset meta component
   */
  reset() {

    this.header.timeBtn.reset();
    this.header.moveBtn.reset();
    this.header.levelBtn.reset();
  }

  /**
   * Apply game level
   */
  applyNewLevel(level?:number) {

    this.cm3d.root.appendChild(this.el);
    this.transitionIn();
    const d = this.cm3d.getAppDimension();
    this.game3d.resize(d[0], d[1]);
    this.game3d.startRendering();
    if (level == undefined) level = 0;
    this.loadLevel(level);
  }

  /**
   * Show game screen
   */
  show(level?:number) {
    this.imagePanel.showImageSource('assets/graphics/tutor.png');
  }

  /**
   * Hide game screen
   */
  hide() {

    this.cm3d.root.removeChild(this.el);
    this.game3d.stopRendering();
  }

  /**
   * Show game won bar
   */
  showWonBar() {

    this.bbar.hide();
    var wbar = this.wbar;
    setTimeout(function() {
      wbar.show("Level Passed");
    }, 400);
  }

  /**
   * Show game lose bar
   */
  showLoseBar() {

    this.bbar.hide();
    var lbar = this.lbar;
    setTimeout(function() {
      lbar.show("Game Over");
    }, 400);
    this.gopanel.show();
  }

  /**
   * Show button bar
   */
  showButtonBar() {

    this.wbar.hide();
    var bbar = this.bbar;
    setTimeout(function() {
      bbar.show();
    }, 400);
  }

  /**
   * Transition in
   */
  transitionIn() {
    this.el.style.display = 'block';
  }

  /**
   * Transition out
   */
  transitionOut() {

  }

  /**
   * Return playing time
   */
  getPlayingTime() {
    return this.header.timeBtn.currentTime;
  }

  /**
   * Add current move count
   */
  addMoveCount() {
    this.header.moveBtn.addCount(1);
  }

  /**
   * Add score
   */
  addScore(val:number) {
    this.header.levelBtn.addScore(val);
  }

  /**
   * Return current score
   */
  getCurrentScore():number {
    return this.header.levelBtn.currentScore;
  }

  /**
   * Save best score
   */
  saveBestScore() {
    this.cm3d.pref.saveBestScore(this.getCurrentScore());
  }

  /**
   * Resizing handler
   */
  resize(rw:number, rh:number) {
    this.game3d.resize(rw, rh);
  }

  /**
   * Dispose resources
   */
  dispose() {

  }
}
