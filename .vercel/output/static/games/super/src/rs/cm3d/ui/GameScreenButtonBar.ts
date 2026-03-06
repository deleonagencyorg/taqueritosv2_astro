"use strict";

import GameButton from "../../game/GameButton";
import GameScreen from "../screen/GameScreen";
import anime from 'animejs';
import AssetManager from "../AssetManager";

/**
 * @author raizensoft
 * Button bar at the bottom of game screen
 */
export default class GameScreenButtonBar {

  gs:GameScreen;
  am:AssetManager;
  el:HTMLDivElement;
  levelBtn:GameButton;
  infoBtn:GameButton;
  homeBtn:GameButton;
  soundBtn:GameButton;
  soundOn:boolean = true;

  constructor(gs:GameScreen) {

    this.gs = gs;
    this.am = gs.am;
    this.init();
  }

  /**
   * Init the buttons
   * @method init
   */
  private init() {

    // Root container
    const el = this.el = document.createElement('div');
    el.className = 'rs-cm3d-gamebuttonbar';

    const am = this.am;

    // Game level button
    this.levelBtn = new GameButton('icon-stack', this.showGameLevels.bind(this));
    this.levelBtn.addClass('rs-cm3d-mainbutton-extra');
    //el.appendChild(this.levelBtn.el);

    // Info Button
    this.infoBtn = new GameButton('icon-info', this.showHelp.bind(this));
    el.appendChild(this.infoBtn.el);

    // Home Button
    this.homeBtn = new GameButton('icon-home', this.showHome.bind(this));
    el.appendChild(this.homeBtn.el);

    // Sound control button
    this.soundBtn = new GameButton('icon-sound-on', this.toggleSound.bind(this));
    el.appendChild(this.soundBtn.el);
  }

  /**
   * Show button bar
   */
  show() {

    anime({
      targets:this.el,
      bottom:15,
      easing:'easeOutQuint',
      duration:800
    });
  }

  /**
   * Hide button bar
   */
  hide() {

    anime({
      targets:this.el,
      bottom:-50,
      easing:'easeOutQuint',
      duration:800
    });
  }

  /**
   * Show image hint
   * @method showHint
   */
  showHint() {

    console.log('Show hint');
    //this.gs.imagePanel.show(this.gs.getCurrentImagePath());
    this.am.audios['ButtonClick'].play();
  }

  /**
   * Show levels selector
   */
  showGameLevels() {
    this.am.audios['ButtonClick'].play();
  }

  /**
   * Replay level
   */
  replayLevel() {

    this.am.audios['ButtonClick'].play();
    this.gs.replayLevel();
  }

  /**
   * Show home page
   */
  showHome() {

    this.am.audios['ButtonClick'].play();
    this.gs.game3d.setPauseState();
    this.gs.cm3d.setHomeScreen();
  }

  /**
   * Show help panel
   */
  showHelp() {

    this.am.audios['ButtonClick'].play();
    this.gs.hpanel.show();
  };

  /**
   * Toggle sound on/off
   */
  toggleSound() {

    const btn = this.soundBtn;
    this.soundOn = !this.soundOn;
    if (this.soundOn) {
      btn.removeClass('icon-sound-off');
      btn.addClass('icon-sound-on');
      this.am.audios['ButtonClick'].play();
    }
    else {
      btn.removeClass('icon-sound-on');
      btn.addClass('icon-sound-off');
    }
    this.am.toggleSound();
  }

  /**
   * Return client width and height
   */
  getClientSize() {
    return [this.el.clientWidth, this.el.clientHeight];
  }
}

