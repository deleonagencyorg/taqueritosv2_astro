
"use strict";

/**
 * Base class for icon buttons
 */
export default class IconButton {

  el:HTMLSpanElement;

  constructor(className:string, clickCallback:() => void) {
    this.init(className, clickCallback);
  }

  protected init(className:string, clickCallback:() => void) {

    const el = this.el = document.createElement('span');
    el.className = className;
    el.style.display = 'block';
    el.style.cursor = 'pointer';
    el.style.borderRadius = '50%';
    el.style.textAlign = 'center';

    const btn = this;
    if (clickCallback)
      el.addEventListener('click', function(e) {
        clickCallback.call(btn);
      });
  }

  addClass(className:string) {
    this.el.classList.add(className);
  }

  removeClass(className:string) {

    this.el.classList.remove(className);
  }
}
