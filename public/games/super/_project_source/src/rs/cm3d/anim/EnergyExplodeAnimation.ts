"use strict";

import GameBoard from "../entity/GameBoard";
import BaseAnimation from "./BaseAnimation";

const SHOW_DELAY = 400;

/**
 * @author raizensoft
 * Fire targeting animation
 */
export default class EnergyExplodeAnimation extends BaseAnimation {

  private showId:number;

  constructor(pb:GameBoard) {

    super(pb, 'EnergyExplode', {depthTest:false, totalFrames:12, fps:30});
    this.setSize(3, 3);
  }

  show() {

    this.visible = true;
    clearTimeout(this.showId);
    this.showId = setTimeout(() => {
      this.visible = false;
    }, SHOW_DELAY);
  }
}
