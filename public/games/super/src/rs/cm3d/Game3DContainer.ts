
"use strict";

import { Group } from "three";
import GameBoard from "./entity/GameBoard";
import Game3D from "./Game3D";
import GameLight from "./GameLight";
import anime from 'animejs';

/**
 * @author raizensoft
 * Contains GameBoard and provide transformation facilities
 */
export default class Game3DContainer extends Group {

  g3d:Game3D;
  glight:GameLight;
  gameBoard:GameBoard;
  currentRotZ:number;

  constructor(g3d:Game3D) {

    super();
    this.g3d = g3d;
    this.init();
  }

  private init() {

    //  Add GameBoard component
    this.gameBoard = new GameBoard(this.g3d);
    this.add(this.gameBoard);

    // Light object
    const glight = this.glight = new GameLight(this.g3d);
    this.add(glight);
  }

  /**
   * Fit puzzle board to current screen dimension
   */
  fitGameBoard() {

    const gs = this.g3d.gs;
    const s0 = gs.header.getClientSize();
    const s1 = gs.bbar.getClientSize();
    const cH = this.g3d.el.clientHeight;
    const cW = this.g3d.el.clientWidth;
    const mw = cW, mh = cH - s0[1] - s1[1] - 10;

    this.g3d.setCameraMatchProjection();
    const zt = this.gameBoard.getScaleFitPosition(mw, mh);
    this.position.z = zt;
    this.glight.setBound(this.gameBoard.getBound());
    this.gameBoard.calRegion();
  }

  /**
   * Show puzzle board with transitioning effect
   */
  show() {

    this.visible = false;
    this.currentRotZ = 0;
    this.fitGameBoard();
    
    // Starting position and rotation
    this.rotation.x = Math.PI / 4;

    const g3c = this;

    // Rotation
    const tX = 0;
    anime.remove(this.rotation);
    anime({
      targets:this.rotation,
      x:tX,
      easing:'easeOutQuad',
      duration:1500,
      complete:function() {
        g3c.gameBoard.start();
      }
    });

    setTimeout(function() {
      g3c.visible = true;
    }, 140);
  }
}
