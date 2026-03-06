"use strict";

import ImageButton from "../../game/ImageButton";
import GameScreen from "../screen/GameScreen";

/**
 * @author raizensoft
 * ShatterButton
 */
export default class ShatterButton extends ImageButton {

  gs:GameScreen;
  showId:number;
  isVisible:boolean;

  constructor(gs:GameScreen, callback?:() => void) {

    super('assets/graphics/ShatterButton.png', callback);
    this.gs = gs;
  }

  /**
   * Init class components
   */
  protected override init() {

    super.init();
    this.el.className = 'rs-shatter-button';
  }

  show() {
    this.el.style.display = 'block';
    this.isVisible = true;
  }

  hide() {

    this.el.style.display = 'none';
    this.isVisible = false;
    clearTimeout(this.showId);
    this.showId = setTimeout(() => {
      this.show();
    }, Math.random() * 4000 + this.gs.dopt.shatterDuration! + 1000);
  }

  reset() {
    clearTimeout(this.showId);
    this.isVisible = false;
  }
}
