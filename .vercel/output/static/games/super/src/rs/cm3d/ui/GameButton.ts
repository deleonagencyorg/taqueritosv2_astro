"use strict";

import IconButton from "../../game/IconButton";

export default class GameButton extends IconButton {

  protected override init(className:string, clickCallback:() => void) {

    super.init(className, clickCallback);
    this.el.classList.add('rs-cm3d-mainbutton');
  }

}
