"use strict";

import AssetManager from "../AssetManager";
import GameConfig from "../GameConfig";
import CryptoMan from "../CryptoMan";
import CreditPanel from "../ui/CreditPanel";
import HelpPanel from "../ui/HelpPanel";
import HomeScreenHeader from "../ui/HomeScreenHeader";
import HomeScreenMenu from "../ui/HomeScreenMenu";
import anime from 'animejs';

const SHOW_DELAY = 1500;

/**
 * @author raizensoft
 * Main game home screen
 */
export default class HomeScreen {

  config:GameConfig;
  cm3d:CryptoMan;
  loaded:boolean;
  assetManager:AssetManager;
  el:HTMLDivElement;
  header:HomeScreenHeader;
  menu:HomeScreenMenu;
  hpanel:HelpPanel;
  cpanel:CreditPanel;

  constructor(cm3d:CryptoMan) {

    this.cm3d = cm3d;
    this.loaded = false;
    this.config = cm3d.config;
    this.init();
  }

  private init() {

    const hs = this;
    const el = this.el = document.createElement('div');
    el.className = 'rs-hscreen';
    el.style.width = el.style.height = '100%';
    el.style.display = 'none';

    // Header 
    this.header = new HomeScreenHeader(this);

    // Menu
    this.menu = new HomeScreenMenu(this);
    
    // Panel
    this.hpanel = new HelpPanel(null);

    // Credit
    this.cpanel = new CreditPanel(this.cm3d);
  }

  /**
   * Load assets
   */
  load() {

    this.el.style.display = 'block';
    this.el.appendChild(this.header.el);
    this.header.center();

    // AssetManager callbacks
    const am = this.cm3d.assetManager;
    const hs = this;
    const header = this.header;
    const menu = this.menu;

    am.onLoad = function() {

      setTimeout(function() {

        am.showDelay = true;

        // Move header to top app
        header.moveTop();

        // Show menu
        hs.el.appendChild(menu.el);
        menu.show();

        // Play background music
        if (am.audios['BackgroundMusic']) 
          am.audios['BackgroundMusic'].play();

      }, SHOW_DELAY);
    };

    am.onProgress = (url:string, loaded:number, total:number) => {
      hs.header.setProgress(loaded/total * 100);
    }
    this.cm3d.assetManager.load();
  }

  /**
   * Perform transition in
   */
  transitionIn() {

    this.el.style.display = 'block';
    anime({
      targets:this.el,
      translateY:0,
      easing:'easeOutQuint',
      opacity:1,
      duration:1200
    });
  }

  /**
   * Perform transition out
   */
  transitionOut() {

    const el = this.el;
    anime({
      targets:this.el,
      translateY:-400,
      easing:'easeOutQuint',
      opacity:0,
      duration:1200,
      complete:function() {
        el.style.display = 'none';
      }
    });
  }

  /**
   * Show screen
   */
  show() {

    this.cm3d.root.appendChild(this.el);
    if (!this.cm3d.assetManager.loaded) {
      this.load();
      return;
    }
    this.transitionIn();
  }

  /**
   * Hide screen
   */
  hide() {

    this.cm3d.root.removeChild(this.el);
    this.transitionOut();
  }

  /**
   * Start new game
   */
  startNewGame() {
    this.cm3d.setGameScreen();
  }

  /**
   * Show help panel
   */
  showHelp() {
    this.hpanel.show();
  }

  /**
   * Show credit panel
   */
  showCredit() {
    this.cpanel.show();
  }

  /**
   * Resize screen handler
   */
  resize(rw:number, rh:number) {

    //TODO to be implemented
  }
}
