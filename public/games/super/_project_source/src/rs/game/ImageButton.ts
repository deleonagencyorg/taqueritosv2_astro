
/**
 * @author raizensoft
 * ImageButton
 */
export default abstract class ImageButton {

  el:HTMLImageElement;
  src:string;
  callback?:() => void;

  constructor(src:string, callback?:() => void) {

    this.src = src;
    this.callback = callback;
    this.init();
  }

  /**
   * Init class components
   */
  protected init() {

    const el = this.el = document.createElement('img');
    el.draggable = false;

    function disableLongPress (e:TouchEvent) {
      e.returnValue = false;
    }
    el.addEventListener("touchstart", disableLongPress);
    el.addEventListener("touchend", disableLongPress);
    el.addEventListener("touchmove", disableLongPress);
    el.addEventListener("touchcancel", disableLongPress);

    // Event handler
    el.addEventListener('load', this.onImageLoaded.bind(this));
    el.src = this.src;

    el.addEventListener('pointerdown', this.onButtonClick.bind(this));
  }

  /**
   * On image loaded
   */
  protected onImageLoaded(e:Event) {

  }

  /**
   * Button click handler
   */
  protected onButtonClick(e:PointerEvent) {
    this.callback?.call(this);
  }
}
