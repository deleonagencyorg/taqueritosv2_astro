"use strict";

import BasePanel from "../../game/BasePanel";
import CryptoMan from "../CryptoMan";

/**
 * @author raizensoft
 * CreditPanel shows credit information from config file
 */
export default class CreditPanel extends BasePanel {

  cm3d:CryptoMan;
  content:HTMLDivElement;

  constructor(cm3d:CryptoMan) {

    super();
    this.cm3d = cm3d;
    this.init();
  }

  /**
   * Create panel content
   */
  protected override init() {

    super.init();
    const el = this.el;
    el.classList.add('rs-cm3d-cpanel');
    el.style.width = '90%';
    el.style.height = 'auto';

    const c = this.content = document.createElement('div');
    const strings = this.cm3d.config.strings;
    c.innerHTML = '<h3>' + strings.APP_TITLE + '</h3>';
    c.innerHTML += '<p>'+ strings.CREDIT_TEXT + '</p>';
    el.appendChild(c);
  }
}

