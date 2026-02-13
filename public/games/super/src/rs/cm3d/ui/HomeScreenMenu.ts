"use strict";

import HomeScreen from "../screen/HomeScreen";
import anime from 'animejs';

/**
 * @author raizensoft
 * Home screen menu
 */
export default class HomeScreenMenu {

  hs:HomeScreen;
  el:HTMLDivElement;
  con:HTMLDivElement;

  constructor(hs:HomeScreen) {

    this.hs = hs;
    this.init();
  }

  private init() {

    // Root container
    const el = this.el = document.createElement('div');
    el.className = 'rs-hscreenmenu';

    this.con = document.createElement('div');
    this.con.className = 'menu-list';
    el.appendChild(this.con);

    const config = this.hs.config;
    const hs = this.hs;

    // Menu items
    this.addItem(config.strings.NEW_GAME, function() {
      hs.startNewGame();
    });

    if (config.general.useHelpPanel)
      this.addItem(config.strings.HELP, function() {
        hs.showHelp();
      });

    if (config.general.useCreditPanel)
      this.addItem(config.strings.CREDITS, function() {
        hs.showCredit();
      });
  }

  /**
   * Add a menu item with label and callback
   */
  addItem(label:string, clickCallback?:() => void) {

    const item = document.createElement('div') as HTMLDivElement;
    item.className = 'menu-item';
    item.innerHTML = label;
    item.style.opacity = '0';
    this.con.appendChild(item);

    // Interaction
    const am = this.hs.cm3d.assetManager;
    item.addEventListener('click', function() {
      if (clickCallback)
        clickCallback.call(this);
      am.audios['ButtonClick'].play();
    });
  }

  /**
   * Show the menu
   */
  show() {

    anime({
      targets:'.rs-hscreenmenu .menu-item',
      opacity:1,
      easing:'easeOutQuad',
      delay:anime.stagger(150, {start:500})
    });
  };

}
