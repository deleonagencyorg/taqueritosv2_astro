"use strict";

import AssetManager from "./AssetManager";
import GameConfig from "./GameConfig";
import GameOption from "./GameOption";
import Preferences from "./Preferences";
import GameScreen from "./screen/GameScreen";
import HomeScreen from "./screen/HomeScreen";

const RESIZE_TIMEOUT = 200;
const CONFIG_PATH = "config.json";

/**
 * @author raizensoft
 * CryptoMan entry class
 */
export default class CryptoMan {

  // References
  assetManager:AssetManager;
  root:HTMLDivElement;
  isMobile:boolean;
  pref:Preferences;
  activeScreen:GameScreen | HomeScreen | null;

  // Data
  config:GameConfig;
  defaultOptions:GameOption;

  // Screens
  homeScreen:HomeScreen;
  gameScreen:GameScreen;

  /**
   * Bootstrap the app
   */
  constructor(input:HTMLDivElement, options:GameOption = {}) {

    // Setup root element
    this.root = input;
    this.root.style.position = 'relative';
    this.root.style.display = 'block';
    this.root.style.overflow = 'hidden';

    // Start loading config
    this.loadConfig();

    // Apply default options
    this.defaultOptions = Object.assign(options, {

      pieceDistance:0.3,
      pieceBottom:2,
      pieceDepth:0.4,
      pieceSpecular:0x111111, 
      pieceEmissive: 0x010101,
      pieceColor: 0xcccccc,
      boardDimension:3,
      boardThickness:0.25,
      boardDepth:0.6,
      boardMaxWidth:7,
      boardMaxHeight:8,
      fitFactor:0.95,
      ambientLight:0x333333,
      lightMovingSpeed:0.1,
      runningDuration:800,
      numCoins:8,
      coinSpeed:6,
      numCrystals:2,
      crystalSpeed:10,
      gravity:-7.5,
      maxHealth:3,
      scoreUnit:10,
      shatterDuration:2000
    });

    // Setup gallery resize handler
    const cm3d = this;
    window.addEventListener('resize', function() {
      cm3d.resize();
    });

    // Set up background music on mobile devices
    document.body.addEventListener('click', function(e) {

      //const bgSound = cm3d.assetManager.bgSound;
      //bgSound.context.resume();
      //if (bgSound && !bgSound.isPlaying) {
        //bgSound.play();
      //}
    });
  }

  /**
   * Load game configuration
   */
  loadConfig() {

    // Load main config.json
    const cm3d = this;
    const req = new XMLHttpRequest();
    req.addEventListener("load", function(e) {

      const result = JSON.parse(this.response);
      cm3d.config = result;
      cm3d.initComponents();
    });
    req.open("GET", CONFIG_PATH);
    req.send();
  }

  /**
   * Init compponents
   */
  initComponents() {

    const cm3d = this;
    const dopt = this.defaultOptions;
    const config = this.config;

    // Preferences
    this.initPreferences();
    
    // Default screen
    this.activeScreen = null;

    // Asset managers
    this.assetManager = new AssetManager(this);

    // Bypass mode
    if (window.location.search.includes('bypass'))  {

      this.assetManager.onLoad = function() {
        cm3d.setGameScreen();
      };
      this.assetManager.load();
    }
    else
    // Home Screen as default screen
    this.setHomeScreen();

    // Force resizing on intialization
    setTimeout(function() {
      cm3d.resize();
    }, RESIZE_TIMEOUT);
  }

  /**
   * Initialize preferences
   */
  initPreferences() {
    this.pref = new Preferences(this.config, localStorage.getItem("CryptoMan"));
  }

  /**
   * Set active screen
   */
  setScreen(screen:GameScreen|HomeScreen) {

    if (this.activeScreen) {
      this.activeScreen.hide();
    };
    screen.show();
    this.activeScreen = screen;
  }

  /**
   * Set active game screen
   */
  setGameScreen() {

    if (!this.gameScreen) {
      this.gameScreen = new GameScreen(this, this.config);
    }
    this.setScreen(this.gameScreen);
  }

  /**
   * Set home screen as active screen
   */
  setHomeScreen() {

    if (!this.homeScreen)
      this.homeScreen = new HomeScreen(this);
    this.setScreen(this.homeScreen);
  }

  /**
   * Return current app dimension
   */
  getAppDimension():[number, number] {
    return [this.root.offsetWidth, this.root.offsetHeight];
  }

  /**
   * Resize handler
   */
  resize() {

    const d = this.getAppDimension();
    const rw = d[0], rh = d[1];
    if (this.activeScreen)
      this.activeScreen.resize(rw, rh);
  }

  /**
   * Dispose resources
   */
  dispose() {

  }
}

