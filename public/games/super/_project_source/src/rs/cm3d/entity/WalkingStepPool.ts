"use strict";

import GameBoard from "./GameBoard";
import WalkingStep from "./WalkingStep";

const DEFAULT_ITEMS = 6;

/**
 * @author raizensoft
 * WalkingStepPool
 */
export default class WalkingStepPool {

  pb:GameBoard;
  pool:WalkingStep[];

  constructor(pb:GameBoard) {

    this.pb = pb;
    this.init();
  }

  /**
   * Init the pool
   */
  private init() {

    this.pool = [];

    for (let i = 0; i < DEFAULT_ITEMS; i++) {

      const p = new WalkingStep(this.pb);
      this.pool.push(p);
    }
  }

  /**
   * Return a new piece
   */
  obtain():WalkingStep {

    if (this.pool.length > 0) {

      const p = this.pool.pop();
      p!.reset();
      return p!;
    }
    else {
      const p = new WalkingStep(this.pb);
      p.reset();
      return p;
    }
  }

  /**
   * Free pool object
   */
  free(p:WalkingStep) {
    this.pool.push(p);
  }

}
