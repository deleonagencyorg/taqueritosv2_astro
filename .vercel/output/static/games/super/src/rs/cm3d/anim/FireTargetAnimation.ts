"use strict";

import GameBoard from "../entity/GameBoard";
import BaseAnimation from "./BaseAnimation";

/**
 * @author raizensoft
 * Fire targeting animation
 */
export default class FireTargetAnimation extends BaseAnimation {

  constructor(pb:GameBoard) {

    super(pb, 'FireTarget', {depthTest:true});
    this.setSize(1, 1);
  }
}
