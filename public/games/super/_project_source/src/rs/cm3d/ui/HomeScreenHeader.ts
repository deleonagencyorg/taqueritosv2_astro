"use strict";

import HomeScreen from "../screen/HomeScreen";
import anime from 'animejs';

/**
 * @author raizensoft
 * The header element in home screen
 */
export default class HomeScreenHeader {

  hs:HomeScreen;
  el:HTMLDivElement;
  title:HTMLHeadElement;
  info:HTMLSpanElement;
  progress:HTMLDivElement;
  progressInner:HTMLDivElement;
  logo:HTMLImageElement;
  isMobile:boolean;

  constructor(hs:HomeScreen) {

    this.hs = hs;
    this.init();
  }

  /**
   * Build sub components
   */
  private init() {

    // Test mobile environment
    this.isMobile = (document.createElement('span').ontouchstart === null);

    // Container
    const el = this.el = document.createElement('div');
    el.className = 'rs-hscreen-header';

    const config = this.hs.config;

    // App title
    this.title = document.createElement('h1');
    this.title.className = 'app-title';
    this.title.innerHTML = config.strings.APP_TITLE;
    el.appendChild(this.title);

    // App info
    this.info = document.createElement('span');
    this.info.className = 'app-info';
    this.info.innerHTML = config.strings.APP_INFO;
    el.appendChild(this.info);
    
    // Progressbar
    this.progress = document.createElement('div');
    this.progress.className = 'app-progress';
    this.progressInner = document.createElement('div');
    this.progressInner.className = 'app-progress-inner';
    el.appendChild(this.progress);
    this.progress.appendChild(this.progressInner);
    this.setProgress(0);

    // Logo
    this.logo = document.createElement('img');
    this.logo.className = 'app-logo';
    this.logo.src = 'assets/graphics/logo.png';
    this.logo.onmousedown = function(e) {
      e.preventDefault();
    };
    el.appendChild(this.logo);
  }

  /**
   * Set current loading progress
   */
  setProgress(value:number) {
    this.progressInner.style.width = value + '%';
  }

  /**
   * Hide progress bar
   */
  hideProgress() {

    const p = this.progress;
    anime({
      targets:p,
      opacity:0,
      easing:'easeOutQuint',
      complete:function() {
        p.style.display = 'none';
      }
    });
  }

  /**
   * Hide logo
   */
  hideLogo() {

    const l = this.logo;
    const isMobile = this.isMobile;

    anime({
      targets:l,
      opacity:0,
      easing:'easeOutQuint',
      complete:function() {

        if (isMobile) {
          l.style.display = 'none';
          return;
        }
        anime.remove(l);
        anime({
          targets:l,
          width:32,
          marginTop:20,
          opacity:1
        });
      }
    });
  }

  /**
   * Move header to top position
   */
  moveTop() {

    this.hideProgress();
    this.hideLogo();
    anime({
      targets:this.el,
      top:0,
      translateY:0,
      easing:'easeOutQuint',
      duration:1200
    });
  }

  /**
   * Center this component
   */
  center() {

    const am = this.hs.cm3d.assetManager;
    const el = this.el;

    anime({
      targets:this.el,
      top:'50%',
      translateY:'-50%',
      duration:1400,
      update:function() {

        if (am.showDelay) {

          anime.remove(el);
          anime({
            targets:el,
            top:0,
            translateY:0,
            duration:0
          });
        }
      }
    });
  }
}
