"use strict";

import GameScreen from "../screen/GameScreen";
import AssetManager from "../AssetManager";
import anime from 'animejs';
import HeartBar from "./HeartBar";

/**
 * @author raizensoft
 * Header components of game screen
 */
export default class GameScreenHeader {

  // References
  gs:GameScreen;
  am:AssetManager;
  el:HTMLDivElement;

  // Header buttons
  timeBtn:HeaderTimeButton;
  levelBtn:HeaderLevelButton;
  moveBtn:HeaderMoveButton;
  hbar:HeartBar;

  constructor(gs:GameScreen) {

    this.gs = gs;
    this.am = gs.am;
    this.init();
  }

  private init() {

    // GameScreen reference
    const gs = this.gs;

    // Root container
    const el = this.el = document.createElement('div');
    el.className = 'rs-cm3d-gameheader';

      // Time button
    this.timeBtn = new HeaderTimeButton(this);
    //el.appendChild(this.timeBtn.el);

    // Level button
    this.levelBtn = new HeaderLevelButton(this);
    el.appendChild(this.levelBtn.el);

    // Move button
    this.moveBtn = new HeaderMoveButton(this);
    //el.appendChild(this.moveBtn.el);
    
    // Heart bar
    this.hbar = new HeartBar(this.gs);
    el.appendChild(this.hbar.el);
  }

  /**
    * Return client size dimension
  */
  getClientSize() {
    return [this.el.clientWidth, this.el.clientHeight];
  }

  /**
    * Show the header
  */
  show() {

    anime({
      targets:this.el,
      top:4,
      easing:'easeOutQuint',
      duration:800
    });
  }

  /**
    * Hide the header
  */
  hide() {

    anime({
      targets:this.el,
      top:-80,
      easing:'easeOutQuint',
      duration:800
    });
  }
}

/**
 * @author raizensoft
 * Time button in header
*/
export class HeaderTimeButton {

  gh:GameScreenHeader;
  am:AssetManager;
  el:HTMLDivElement;
  isPlaying:boolean = false;
  currentTime:number;
  ticon:HTMLSpanElement;
  tval:HTMLSpanElement;
  tpause:HTMLSpanElement;
  timeId:number;

  constructor(gh:GameScreenHeader) {

    this.gh = gh;
    this.am = gh.am;
    this.init();
  }

  private init() {

    const el = this.el = document.createElement('div');
    el.className = 'rs-cm3d-timebtn';
    this.isPlaying = false;
    this.currentTime = 0;

    const gh = this.gh;
    const am = this.am;
    const tbtn = this;
    el.addEventListener('click', function() {

      am.audios['ButtonClick'].play();
      //tbtn.toggleTime();
    });

    // Time icon
    const ti = this.ticon = document.createElement('span');
    el.appendChild(ti);
    ti.className = 'icon-timer';
    
    // Time value
    const tv = this.tval = document.createElement('span');
    tv.className = 'timebtn-value';
    el.appendChild(tv);
    tv.innerHTML = '00:00:00';
    
    // Pause button
    const tp = this.tpause = document.createElement('span');
    tp.className = 'icon-pausetime';
    el.appendChild(tp);
  }

  /**
   * Start elapsed time
   */
  resume() {
    
    clearInterval(this.timeId);
    this.timeId = setInterval(this.timeTick.bind(this), 1000);
    this.isPlaying = true;
    this.tpause.className = 'icon-pausetime';
  };

  /**
   * Pause the timer
   */
  pause() {

    clearInterval(this.timeId);
    this.isPlaying = false;
    this.tpause.className = 'icon-playtime';
  }

  /**
   * Reset timer value
   */
  reset() {

    this.currentTime = 0;
    this.tval.innerHTML = "00:00:00";
  }

  /**
   * Time ticking handler
   * @method timeTick
   */
  timeTick() {

    this.currentTime += 1;
    const c = this.currentTime;
    const h = Math.floor(c / 3600); 
    const m = Math.floor((c - h * 3600) / 60); 
    const s = (c - h * 3600) % 60;

    function format(n:number) {
      if (n < 10)
        return "0" + n;
      else
        return n;
    }
    this.tval.innerHTML = format(h) + ":" + format(m) + ":" + format(s);
  }

  /**
   * Toggle time 
   * @method toggleTime
   */
  toggleTime() {

    //if (!this.gh.gs.game3d.isRunningState()) return;
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.resume();
    }
    else
      this.pause();
  }
}

/**
 * @author raizensoft
 * Level button
 */
export class HeaderLevelButton {

  gh:GameScreenHeader;
  el:HTMLDivElement;
  label:HTMLSpanElement;
  btn:HTMLSpanElement;
  currentLevel:number;
  currentScore:number;

  /**
   * Create new level button
   */
  constructor(gh:GameScreenHeader) {

    this.gh = gh;
    this.init();
  }

  private init() {

    const el = this.el = document.createElement('div');
    el.className = 'rs-cm3d-levelbtn';

    // Label
    this.label = document.createElement('span');
    this.label.className = 'levelbtn-label';
    el.appendChild(this.label);

    // Shuffle button
    this.btn = document.createElement('span');
    this.btn.className = 'levelbtn-shuffle icon-undo';
    //el.appendChild(this.btn);

    // Default
    this.reset();
  }

  /**
   * Set current level label
   */
  setLevel(level:number) {

    this.currentLevel = level;
    this.label.innerHTML = "Score: " + level;
  }

  /**
   * Set score
   */
  setScore(score:number) {

    this.currentScore = score;
    this.label.innerHTML = "Score: " + score;;
  }

  /**
   * Add level tracking
   */
  addLevel(val:number) {
    this.setLevel(this.currentLevel + val);
  }

  /**
   * Add score
   */
  addScore(val:number) {
    this.setScore(this.currentScore + val);
  }

  /**
   * Reset level
   */
  reset() {

    this.setLevel(0);
    this.setScore(0);
  }
}

/**
 * @author raizensoft
 * Move button
 */
export class HeaderMoveButton {
  
  gh:GameScreenHeader;
  el:HTMLDivElement;
  micon:HTMLSpanElement;
  mval:HTMLSpanElement;
  count:number;

  constructor(gh:GameScreenHeader) {

    this.gh = gh;
    this.init();
  }

  private init() {

    const el = this.el = document.createElement('div');
    el.className = 'rs-cm3d-movebtn';
    this.count = 0;

    // Move icon
    const mi = this.micon = document.createElement('span');
    el.appendChild(mi);
    mi.className = 'icon-quill';

    // Move value
    const mv = this.mval = document.createElement('span');
    mv.className = 'movebtn-value';
    el.appendChild(mv);
    mv.innerHTML = '000';
  }

  /**
   * Add count value
   */
  addCount(val:number) {

    this.count += val;
    let n = this.count;
    let c = 0;
    let s = "";
    while (n >= 10) {
      c++;
      n = n / 10;
    }
    c = 3 - c - 1;
    for (var i = 0; i < c; i++) s += "0";
    this.mval.innerHTML = s + this.count;
  } 

  /**
   * Reset count number
   */
  reset() {

    this.count = 0;
    this.mval.innerHTML = "000";
  }
}
