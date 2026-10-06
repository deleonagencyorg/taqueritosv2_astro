"use strict";

import anime from 'animejs';

/**
 * @author raizensoft
 * Base panel classes for all app panel
 */
export default class BasePanel {

  width:number;
  height:number;

  overlay:HTMLDivElement;
  el:HTMLDivElement;
  closeBtn:HTMLSpanElement;

  constructor(width:number = 300, height:number = 300) {

    this.width = width;
    this.height = height;
  }

  /**
   * Init the panel
   */
  protected init() {

    // Overlay
    const ol:HTMLDivElement = this.overlay = document.createElement('div');
    ol.className = 'rs-game-overlay';

    // Root container
    const el = this.el = document.createElement('div');
    el.className = 'rs-game-panel';
    el.style.width = this.width + 'px';
    el.style.height = this.height + 'px';

    // Close button
    const c = this.closeBtn = document.createElement('span');
    c.className = 'rs-closebtn';
    c.innerHTML = '&times';
    el.appendChild(c);
    c.addEventListener('click', this.hide.bind(this));
  }

  /**
   * Show panel in center document
   */
  show() {

    document.body.appendChild(this.overlay);
    document.body.appendChild(this.el);
    anime.remove(this.el);
    anime({
      targets:this.el,
      opacity:[0, 1],
      duration:800,
      easing:'easeOutQuint'
    });
  }

  /**
   * Hide current panel
   */
  hide() {

    if (document.body.contains(this.overlay))
      document.body.removeChild(this.overlay);
    if (document.body.contains(this.el))
      document.body.removeChild(this.el);
  }
}
