
"use strict";

import IconButton from "./IconButton";

/**
 * @author raizensoft
 * GameButton class
 */
export default class GameButton extends IconButton {

  protected override init(className:string, clickCallback:() => void) {

    super.init(className, clickCallback);
    this.el.classList.add('rs-cm3d-mainbutton');
  }

  /**
   * Add a new class name
   */
  addClass(className:string) {
    this.el.classList.add(className);
  }

  /**
   * Remove a class name
   */
  removeClass(className:string) {
    this.el.classList.remove(className);
  }
}

