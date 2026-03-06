"use strict";

import BasePanel from "./BasePanel";

const SCALE = 0.85;

/**
 * @author raizensoft
 * ImagePanel display app image in a panel
 */
export default class ImagePanel extends BasePanel {

  img:HTMLImageElement;
  callback?:() => void;

  constructor(callback?:() => void) {

    super();
    this.callback = callback;
    this.init();
  }
  protected override init() {

    super.init();

    this.el.classList.add('rs-image-panel');

    const img = this.img = document.createElement('img');
    this.el.appendChild(this.img);
    this.el.style.width = this.el.style.height = 'auto';

    const ip = this;
    function closePanel(e:MouseEvent) {
      
      ip.callback?.call(ip);
      ip.hide();
    }

    // Config event
    this.closeBtn.addEventListener('click', closePanel);
    img.addEventListener('click', closePanel);

    // Constraint img dimension
    img.onload = function() {

      const r = img.naturalWidth / img.naturalHeight;
      if (img.naturalHeight >= window.innerHeight) {

        img.height = window.innerHeight * SCALE;
        img.width = img.height * r;
      }
      if (img.naturalWidth >= window.innerWidth) {

        img.width = window.innerWidth * SCALE;
        img.height = img.width / r;
      }
    };
  }

  /**
   * Show an image with input src
   */
  showImageSource(src:string) {

    this.img.src = src;
    super.show();
  }
}
