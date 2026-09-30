"use strict";

import BaseApp from "../three/BaseApp";
import AssetManager from "./AssetManager";
import GameOption from "./GameOption";
import GameScreen from "./screen/GameScreen";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import Game3DContainer from "./Game3DContainer";
import Firework3DSet from "../game3d/Firework3DSet";
import Starfield from "./entity/Starfield";
import { Clock } from "three";

const DEFAULT_CAM_Y = 0;

/**
 * @author raizensoft
 * Game3D is a base class that set up basic game environment and handle game interactions
 */
export default class Game3D extends BaseApp {

  // References
  dopt:GameOption;
  am:AssetManager;
  gs:GameScreen;
  controls:OrbitControls;
  clock:Clock;
  defaultCursor:string;
  state:Game3DState;

  // Game objects
  container:Game3DContainer;
  f3ds:Firework3DSet;
  sf:Starfield;
  
  // Game state
  isHover:boolean;
  isDragging:boolean;
  currentCamY:number;
  revealId:number;
  inTransition:boolean;

  constructor(gs:GameScreen) {

    super();
    this.gs = gs;
    this.dopt = gs.dopt;
    this.am = gs.am;

    this.setCameraMatchProjection();

    // Default cursor
    this.defaultCursor = 'auto';

    // Set up basic threejs components
    this.buildScene();
    //this.enableOrbitControl();
    //this.initMouseDrag();
    this.initKeyboard();
  }

  /**
   * Enable orbit controls
   */
  enableOrbitControl() {

    this.controls = new OrbitControls( this.camera, this.el);
    this.controls.enableDamping = true;
    this.controls.update();
  }

  /**
   * Build scene
   */
  private buildScene() {

    this.clock = new Clock();

    // Parent container of game items
    this.container = new Game3DContainer(this);

    // Add game container
    const scene = this.scene;
    scene.add(this.container);
    
    const am = this.am;

    // Init firework set
    this.f3ds = new Firework3DSet(
      am.textures['Firework'],
      3,
      500,
      function() {
        if (am.audios['Firework'].isPlaying) am.audios['Firework'].stop();
        am.audios['Firework'].play();
      });
    scene.add(this.f3ds);

    // Setup starfield
    this.sf = new Starfield({
      map:this.am.textures['StarLine']
    });
    scene.add(this.sf);

    // Intial game state
    this.setRunningState();

    // Setup raycasting
    this.handleInteraction();

    // Force resizing upon building scene
    this.resizeHandler();
  }

  /**
   * Init mouse dragging function
   */
  private initMouseDrag() {

    const el = this.el;
    let oX:number, clientX:number, oRotZ:number, oY:number, clientY:number, camY:number;
    const g3d = this, container = this.container, pb = container.gameBoard;

    function mouseDownHandler (e:PointerEvent) {

      if (g3d.isHover || g3d.inTransition) return;
      g3d.isDragging = true;
      clientX = e.clientX;
      clientY = e.clientY;
      oX = clientX;
      oY = clientY;
      camY = g3d.camera.position.y;
      oRotZ = container.rotation.z;
      el.addEventListener('pointermove', mouseMoveHandler);
      el.addEventListener('pointerup', mouseUpHandler);
      window.addEventListener('pointermove', mouseMoveHandler);
      window.addEventListener('pointerup', mouseUpHandler);
    }

    function mouseMoveHandler (e:PointerEvent) {

      clientX = e.clientX;
      clientY = e.clientY;
      const deltaX = (clientX - oX) * 0.25;
      const deltaY = (clientY - oY) * 0.75;
      container.currentRotZ = oRotZ + deltaX * Math.PI / 180;
      g3d.currentCamY = camY + deltaY;
    }

    function mouseUpHandler(e:PointerEvent) {
      
      g3d.isDragging = false;
      el.removeEventListener('pointermove', mouseMoveHandler);
      el.removeEventListener('pointerup', mouseUpHandler);
      window.removeEventListener('pointermove', mouseMoveHandler);
      window.removeEventListener('pointerup', mouseUpHandler);
    }
    el.addEventListener('pointerdown', mouseDownHandler);
  }

  /**
   * Init keyboard
   */
  private initKeyboard() {

    const g3d = this;

    function keyDownHandler (e:KeyboardEvent) {

      if (!g3d.isRunningState) return;
      const sm = g3d.container.gameBoard.sm;
      switch (e.code) {

        case 'KeyX':
          if (g3d.gs.sbtn.isVisible)
            g3d.container.gameBoard.shatterCrystals();
          break;

        case 'Space':
          sm.jump();
          break;

        case 'ArrowUp':
          sm.jump();
          break;

        case 'ArrowRight':
          sm.moveRight();
          break;

        case 'ArrowLeft':
          sm.moveLeft();
          break;
      }
    }
    document.body.addEventListener('keydown', keyDownHandler);
  }

  /**
   * Setup raycasting
   */
  private handleInteraction() {

    const camera = this.camera;
    const raycaster = this.raycaster;
    const container = this.container;
    const el = this.el;

    const g3d = this;
    const pb = this.container.gameBoard;

    function doRaycast (e:PointerEvent) {

      if (g3d.inTransition) return;
      if (!g3d.isRunningState) return;

      let oX, oY;
      oX = e.offsetX;
      oY = e.offsetY;

      const spos = pb.sm.getProjection();
      if (e.offsetX > spos[0])
        pb.sm.moveRight();
      else
        pb.sm.moveLeft();

      const mouse = {
        x: (oX / g3d.width) * 2 - 1,
        y: -(oY / g3d.height) * 2 + 1,
      };
      raycaster.setFromCamera( mouse, camera );    

      // Compute intersections
      const intersects = raycaster.intersectObjects(container.children, true);

      for (let i = 0; i < intersects.length; i++ ) {

        /*
        - object : intersected object (THREE.Mesh)
        - distance : distance from camera to intersection (number)
        - face : intersected face (THREE.Face3)
        - faceIndex : intersected face index (number)
        - point : intersection point (THREE.Vector3)
        - uv : intersection point in the object's UV coordinates (THREE.Vector2)
        */
        const item = intersects[i].object;

        // Click handler
        if (e.type === 'pointerdown') {
        }

        // Mouse over and out handler 
        if (e.type === 'pointermove') {

          // Point moving interaction
        }
        break;
      }

      // Mouseout
      if (intersects.length === 0 && e.type === 'pointermove') {

      }
    }

    function mouseUpHandler (e:PointerEvent) {
      
    }

    // Mouse click, over, out
    el.addEventListener('pointerdown', doRaycast);

    // Check mousemove to determine over and out status
    //el.addEventListener('pointermove', doRaycast);

    // Check mousemove to determine over and out status
    //el.addEventListener('pointerup', mouseUpHandler);
  }

  /**
   * Load level
   */
  loadLevel(index:number, callback?:() => void) {

    this.setRunningState();

    this.currentCamY = DEFAULT_CAM_Y;
    this.inTransition = true;

    // Back to level 0
    const levels = this.gs.levels;

    // Back to level 0
    if (index == levels.length) index = 0;

    // Clear reveal animation
    clearInterval(this.revealId);

    const item = levels[index];

    // Initial dragging state
    this.isDragging = false;

    const g3d = this;
    this.container.visible = false;
    this.f3ds.visible = false;

    this.container.gameBoard.prepareBoard(item, function() {

      g3d.container.show();

      // Apply transition in
      callback?.call(g3d);
    });
  }

  /**
   * Override _renderRequest
   */
   protected override renderRequest() {

    super.renderRequest();

    const delta = this.clock.getDelta();

    // Update orbit control
    if (this.controls)
      this.controls.update();

    // Update starfield
    this.sf.update(delta);

    if (this.state == Game3DState.WON || this.state == Game3DState.FIRE_WORK) {
      this.f3ds.update(delta);
    }

    // Update container components
    const c = this.container;

    // Animate lights
    c.glight.animate();

    if (this.state !== Game3DState.RUNNING) return;

    // Update game objects
    c.gameBoard.update(delta);
  }

  /**
   * Set current state to running
   * @method setRunningState
   */
  setRunningState() {

    this.state = Game3DState.RUNNING;
    this.gs.header.show();
  }

  /**
   * Test running state
   */
  get isRunningState()  {
    return (this.state == Game3DState.RUNNING);
  }

  /**
   * Set pausing state
   */
  setPauseState() {
    this.state = Game3DState.PAUSE;
  }

  /**
   * Set current state to won
   */
  setWonState() {

    console.log('won');
    if (!this.isRunningState) return;

    this.state = Game3DState.WON;

    // Show firework
    this.f3ds.visible = true;
    this.f3ds.reset();

    // Setup UI
    this.gs.header.timeBtn.pause();
    this.gs.header.hide();
    this.gs.showWonBar();
    this.am.audios['WonTune'].play();

    // Unlock next level
    this.gs.unlockNextLevel();
  }

  /**
   * Set lose state
   */
  setLoseState() {

    if (!this.isRunningState) return;

    this.state = Game3DState.LOSE;

    // Setup UI
    this.gs.header.timeBtn.pause();
    this.gs.header.hide();
    this.gs.saveBestScore();
    this.gs.showLoseBar();
    this.am.audios['LoseTune'].play();
  }

  /**
   * Resize game
   * @method resize
   */
  resize(rw:number, rh:number) {

    this.width = rw;
    this.height = rh;
    this.camera.aspect = rw / rh;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(rw, rh);
    this.resizeHandler();
    this.container.fitGameBoard();
    this.f3ds.changeRegion(rw, rh);
    this.sf.setRegion(rw, rh);
  }

  /**
   * Override resizeHandler
   */
  override resizeHandler() {

    super.resizeHandler();
    this.setCameraMatchProjection();
  };

  /**
   * Show game element
   */
  show() {
    this.el.style.display = 'block';
  }

  /**
   * Hide this element
   */
  hide() {
    this.el.style.display = 'none';
  }

  /**
   * Destroy the game component and save resoureces
   */
  private destroy() {

  }
}

export enum Game3DState  {
  RUNNING,
  WON,
  LOSE,
  PAUSE,
  FIRE_WORK
}

