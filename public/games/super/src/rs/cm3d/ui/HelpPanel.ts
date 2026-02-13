"use strict";

import BasePanel from "../../game/BasePanel";
import Scroller from "../../game/Scroller";
import GameScreen from "../screen/GameScreen";

const CONTENT_PATH = 'assets/text/helpcontent.html';

/**
 * @author raizensoft
 * HelpPanel shows up helpin information from config file
 */
export default class HelpPanel extends BasePanel {

  /** GameScreen reference **/
  private gs:GameScreen | null;
  container:HTMLDivElement;
  scroller:Scroller;

  constructor(gs:GameScreen | null) {

    super();
    this.gs = gs;
    this.init();
  }

  protected override init() {

    super.init();
    const el = this.el;
    el.classList.add('rs-cm3d-helppanel');
    el.style.width = el.style.height = '90%';

    // Playing instruction
    const c = this.container = document.createElement('div');
    c.className = 'rs-helpcontainer';
    el.appendChild(c);

    // Setup scroller
    this.scroller = new Scroller(this.container);

    // Setup content
    const req = new XMLHttpRequest();
    req.addEventListener("load", function(e) {
      const result = this.responseText;
      c.innerHTML = result;
    });
    req.open("GET", CONTENT_PATH);
    req.send();
  }

  override show() {

    super.show();
    this.gs?.game3d.setPauseState();
  }

  override hide() {

    super.hide();
    this.gs?.game3d.setRunningState();
  }
}

