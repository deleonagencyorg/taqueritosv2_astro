"use strict";

import { AnimationAction, AnimationMixer, AnimationClip, LoopOnce, Group } from "three";

/**
 * @author raizensoft
 * AnimatedModel
 */
export default abstract class AnimatedModel extends Group {

  currentAction:AnimationAction;
  mixer:AnimationMixer;
  modelAnim:any[];

  /**
   * Play a clip name
   */
  play(name:string) {

    if (this.currentAction)
      this.currentAction.fadeOut(0.75);

    const clip = AnimationClip.findByName( this.modelAnim, name);
    const action = this.mixer.clipAction( clip );
    this.currentAction = action;

    action.clampWhenFinished = true;
    action
    .reset()
    .setEffectiveTimeScale(1)
    .setEffectiveWeight(1)
    .play();
  }

  /**
   * Play animation once
   */
  playOnce(name:string) {

    if (this.currentAction)
      this.currentAction.fadeOut(0.75);

    const clip = AnimationClip.findByName( this.modelAnim, name);
    const action = this.mixer.clipAction( clip );
    this.currentAction = action;

    action.clampWhenFinished = true;
    action
    .reset()
    .setLoop(LoopOnce, 1)
    .setEffectiveTimeScale(1)
    .setEffectiveWeight(1)
    .play();
  }

  /**
   * Update model animation
   */
  update(delta:number) {
    this.mixer.update(delta);
  }

}
