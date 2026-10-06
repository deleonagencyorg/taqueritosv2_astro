"use strict";

/**
 * @author raizensoft
 * Provide scrolling function for div element
 */
export default class Scroller {

  el:HTMLDivElement;
  scrollId:number;

  constructor(el:HTMLDivElement) {

    this.el = el;
    this.el.style.overflow = 'hidden';
    this.init();
  }

  private init() {

    const el = this.el;
    const scroller = this;
    let oY:number, topY:number, panelTargetY:number, clientY:number;

    function scrollHandler () {

      el.scrollTop += (panelTargetY - el.scrollTop) * 0.075;
      scroller.scrollId = requestAnimationFrame(scrollHandler);
    }

    function mouseDownHandler(e:PointerEvent)  {

      clientY = e.clientY;

      /*
      if (e.touches) {
        clientY = e.touches[0].clientY;
      }
      else {
        clientY = e.clientY;
      }
      */
      oY = clientY;
      topY = panelTargetY = el.scrollTop;
      el.addEventListener('pointermove', mouseMoveHandler);
      el.addEventListener('pointerup', mouseUpHandler);
      window.addEventListener('pointermove', mouseMoveHandler);
      window.addEventListener('pointerup', mouseUpHandler);
      cancelAnimationFrame(scroller.scrollId);
      scroller.scrollId = requestAnimationFrame(scrollHandler);
      el.style.cursor = 'grab';
    }

    function mouseMoveHandler(e:PointerEvent)  {

      //e.preventDefault();

      clientY = e.clientY;

      /*
      if (e.changedTouches) {
        clientY = e.changedTouches[0].clientY;
      }
      else {
        clientY = e.clientY;
      }
      */
      var delta = (clientY - oY) * 2.5;
      var range = el.scrollHeight - scroller.el.clientHeight;
      var target = topY - delta;
      if (target > range) target = range;
      if (target < 0) target = 0;
      panelTargetY = target;
      el.style.cursor = 'grabbing';
    }

    function mouseUpHandler(e:PointerEvent)  {

      el.removeEventListener('pointermove', mouseMoveHandler);
      el.removeEventListener('pointerup', mouseUpHandler);
      window.removeEventListener('pointermove', mouseMoveHandler);
      window.removeEventListener('pointerup', mouseUpHandler);
      cancelAnimationFrame(scroller.scrollId);
      el.style.cursor = 'grab';
    }

    el.addEventListener('pointerdown', mouseDownHandler);
    el.addEventListener('mouseover', function(e) {
      el.style.cursor = 'grab';
    });
  }
}
