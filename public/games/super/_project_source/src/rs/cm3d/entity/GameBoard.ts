"use strict";

import { 
  Group, 
  Object3D,
  BoxBufferGeometry, 
  PlaneBufferGeometry,
  MeshBasicMaterial,
  MeshPhongMaterial, 
  Mesh, 
  FrontSide, 
  Vector3,
  MeshStandardMaterial,
} from "three";
import {clone} from 'three/examples/jsm/utils/SkeletonUtils';
import AssetManager from "../AssetManager";
import Game3D from "../Game3D";
import GameOption from "../GameOption";
import {Level} from "../GameConfig";
import GameScreen from "../screen/GameScreen";
import Superman from "./Superman";
import Crystal from "./Crystal";
import Platform from "./Platform";
import EnergyBustAnimation from "../anim/EnergyBustAnimation";
import EnergyExplodeAnimation from "../anim/EnergyExplodeAnimation";
import Coin from "./Coin";
import ItemContainer from "./ItemContainer";
import EnergyBuzzAnimation from "../anim/EnergyBuzzAnimation";

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 10;

/**
 * @author raizensoft
 * GameBoard contains game components and game logics
 */
export default class GameBoard extends Group {

  // References 
  g3d:Game3D;
  gs:GameScreen;
  am:AssetManager;
  dopt:GameOption;

  // Board components
  private topBoard:BoardComponent;
  private leftBoard:BoardComponent;
  private rightBoard:BoardComponent;
  private bottomBoard:BoardComponent;
  private backBoard:BoardComponent;
  private boardList:BoardComponent[];

  // Data
  imageWidth:number;
  imageHeight:number;
  row:number;
  column:number;
  rt:number;
  level:Level;

  // Entities
  sm:Superman;
  plat:Platform; // Platform
  clist:Crystal[]; // Crystals list
  ic:ItemContainer;

  // Animations
  ebust:EnergyBustAnimation;
  eex:EnergyExplodeAnimation;
  ebuzz:EnergyBuzzAnimation;
  coin:Coin;
  regionMesh:Mesh;

  constructor(g3d:Game3D) {

    super();
    this.g3d = g3d;
    this.gs = g3d.gs;
    this.dopt = g3d.dopt;
    this.am = g3d.am;
    this.init();
  }

  /**
   * Init game components
   */
  private init() {

    // Default board size
    this.imageWidth = BOARD_WIDTH;
    this.imageHeight = BOARD_HEIGHT;
    this.buildBoard();

    // Init Superman
    const sm = this.sm = new Superman(this);
    sm.playIdle();
    sm.position.y = -this.imageHeight * 0.45;
    sm.visible = false;
    this.add(sm);

    // Int platform
    const plat = this.plat = new Platform(this);
    plat.position.y = -this.imageHeight * 0.5 - 0.5;
    this.add(plat);

    // Init animations
    // Bust
    this.ebust = new EnergyBustAnimation(this);
    this.ebust.visible = false;
    this.add(this.ebust);

    // Explode
    this.eex = new EnergyExplodeAnimation(this);
    this.eex.visible = false;
    this.add(this.eex);

    // Buzz
    this.ebuzz = new EnergyBuzzAnimation(this);
    this.ebuzz.visible = false;
    this.add(this.ebuzz);

    // Init item container
    // Setup crystals
    const crystal:Mesh = this.am.models['Crystal'];
    crystal.renderOrder = 1;
    crystal.traverse((it:Object3D) => {

      if (it instanceof Mesh) {

        const m:Mesh = it as Mesh;
        (<MeshStandardMaterial>m.material).depthTest = false;
      }
    });
    this.ic = new ItemContainer(this);
    this.ic.generate();
    this.add(this.ic);

    // Config region mesh
    this.regionMesh = new Mesh(
      new PlaneBufferGeometry(1, 1),
      new MeshBasicMaterial({color:0xffcc00, transparent:true, opacity:0.5})
    );
    this.regionMesh.visible = false;
    this.add(this.regionMesh);
  }

  /**
   * Build game board scene
   */
  private buildBoard() {

    const d = this.dopt;

    const pb = this;
    this.boardList = [];

    // Make board components
    function makeBoardComponent():BoardComponent {
      
      const geo = new BoxBufferGeometry(10, 10, 10)
      const mat = new MeshPhongMaterial({
        specular:d.pieceSpecular, 
        color: 0x333333,
        emissive: d.pieceEmissive,
        side: FrontSide});
      const bp = new BoardComponent(geo, mat);
      //pb.add(bp);
      pb.boardList.push(bp);
      return bp;
    }

    // Board components
    this.topBoard = makeBoardComponent();
    this.leftBoard = makeBoardComponent();
    this.rightBoard = makeBoardComponent();
    this.bottomBoard = makeBoardComponent();
    this.backBoard = makeBoardComponent();
  }

  /**
   * Scale fit board to specific region
   */
  getScaleFitPosition(targetWidth:number, targetHeight:number):number {
    
    const d = this.dopt;

    // Calculate current board dimensions
    const values = this.getBound();
    const fw = values[0], fh = values[1], depth = values[2];

    const k = d.fitFactor || 0.98;
    const r = fw / fh;

    let rt;
    if (targetWidth / r > targetHeight) {
      rt = targetHeight * k / fh;
    }
    else {
      rt = targetWidth  * k/ fw;
    }
    this.rt = rt;

    const camZ = this.g3d.camera.position.z;
    const zt = camZ - camZ / rt - depth * 0.5;
    return zt;
  }

  /**
   * Arrange board piece
   */
  private arrangeBoard() {

    const d = this.dopt;
    const boardThickness = d.boardThickness!, boardDepth = d.boardDepth!;
    const w = this.imageWidth, h = this.imageHeight;
    let fw = w + 2 * boardThickness, fh = boardThickness, fd = d.pieceDepth! + boardDepth;

    // Top board
    this.topBoard.scale.set(fw / 10, fh / 10, fd / 10);
    this.topBoard.position.set(0, h * 0.5 + 0.5 * boardThickness, -boardDepth * 0.5);

    // Bottom board
    this.bottomBoard.scale.set(fw / 10, fh / 10, fd / 10);
    this.bottomBoard.position.set(0, -h * 0.5 - 0.5 * boardThickness, -boardDepth * 0.5);
    
    fw = boardThickness, fh = h;

    // Left board
    this.leftBoard.scale.set(fw / 10, fh / 10, fd / 10);
    this.leftBoard.position.set(-w * 0.5 - 0.5 * boardThickness, 0, -boardDepth * 0.5);

    // Right board
    this.rightBoard.scale.set(fw / 10, fh / 10, fd / 10);
    this.rightBoard.position.set(w * 0.5 + 0.5 * boardThickness, 0, -boardDepth * 0.5);

    // Back board
    this.backBoard.scale.set(w / 10, h / 10, boardDepth / 10);
    this.backBoard.position.set(0, 0, -fd * 0.5);
  }

  /**
   * Apply board pieces with new image 
   */
  prepareBoard(level:Level, callback:() => void) {

    const pb = this;
    const d = this.dopt;
    this.level = level;

    // Reset superman
    this.sm.visible = false;
    this.sm.reset();

    // Arrange pieces and board
    pb.arrangeBoard();
    pb.visible = true;

    if (callback)
      callback.call(pb.g3d);
  };

  /**
   * Start main game function
   */
  start() {

    this.sm.show();
    this.ebust.position.y = this.sm.position.y;
    this.ebust.reset();
    this.ebust.show();
    this.eex.reset();
    this.g3d.inTransition = false;
  };

  /**
   * Return game board bound dimension
   */
  getBound() {

    const d = this.dopt;

    // Calculate current board dimensions
    const w = this.imageWidth, h = this.imageHeight;
    const 
      fw = w, 
      fh = h, 
      depth = d.pieceDepth! + d.boardDepth!;

    return [fw, fh, depth];
  }

  /**
   * Calculate region
   */
  calRegion() {

    const targetWidth = window.innerWidth;
    const targetHeight = window.innerHeight;

    this.regionMesh.scale.set(targetWidth / this.rt, targetHeight / this.rt, 1);
    //const zpos = -this.parent!.position.z;
    this.ic.calRegion();
  }


  /**
   * Update game board
   */
  update(delta:number) {

    // Update animation
    this.ebust.update(delta);
    this.eex.update(delta);
    this.ebuzz.update(delta);

    // Update items
    this.ic.update(delta);

    // Hit test
    if (this.sm.visible) {

      const smb = this.sm.getBoundingBox();

      // Update Superman
      this.sm.update(delta);
      this.ic.hitTest(smb);
    }
  }

  /**
   * Show energy explode at position
   */
  showExplode(position:Vector3) {

    this.eex.position.copy(position);
    this.eex.show();
  }

  /**
   * Shatter and buzz crystal
   */
  shatterCrystals() {

    if (this.ic.isShattering) return;
    this.g3d.gs.sbtn.hide();
    this.ic.shatterCrystals();
  }

  /**
   * Reset
   */
  reset() {

  }
}

/**
 * Board component
 */
class BoardComponent extends Mesh {
  isBackboard:boolean;
}
