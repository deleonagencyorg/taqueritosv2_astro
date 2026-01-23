"use strict";

import { Color } from "three";
import GameBoard from "../entity/GameBoard";
import BaseAnimation from "./BaseAnimation";

const SHOW_TIMEOUT = 400;

/**
 * @author raizensoft
 * EnergyBustAnimation
 */
export default class EnergyBustAnimation extends BaseAnimation{

  showId:number;

  constructor(pb:GameBoard) {

    super(pb, 'EnergyBust', {fps:50});
    this.setSize(2, 12);
  }

  show() {

    this.visible = true;
    const anim = this;

    clearTimeout(this.showId);
    this.showId = setTimeout(function() {
      anim.visible = false;
    }, SHOW_TIMEOUT);
  }
}
