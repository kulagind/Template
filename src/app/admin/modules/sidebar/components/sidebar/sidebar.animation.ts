import {
  animate,
  animateChild,
  AnimationTriggerMetadata,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { StaggerAnimationOptions } from '../../../../types/stagger-animation-options';
import { DefaultAnimationOptions } from '../../../../types/default-animation-options';
import { bezierCurve } from '../../../../functions/bezier-curve.function';

export function firstTranslateYAppearance(
  options: StaggerAnimationOptions
): AnimationTriggerMetadata {

  const { time, name, delay, target } = options;

  const initial = { transform: 'translateX(40px)', opacity: 0 };
  const final = { transform: 'translateX(0)', opacity: 1 };

  // @ts-ignore
  return trigger(name, [

    transition(':enter', [
      // @ts-ignore
      query(target, [
        style(initial),
        stagger(`${delay}ms`, [
          animate(bezierCurve(time), style(final)),
        ]),
      ]),

    ]),
  ]);

}

export function firstWidthAppearance(
  options: DefaultAnimationOptions
): AnimationTriggerMetadata {

  const { time, name } = options;

  const initial = { 'margin-left': '-40px' };
  const final = { 'margin-left': '0px' };

  return trigger(name, [
    transition(':enter', [
      style(initial),
      group([
        query('@*', animateChild() ),
        animate(bezierCurve(time), style(final)),
      ]),
    ]),
  ]);
}

export function complexSidenavAnimation(): AnimationTriggerMetadata[] {
  return [
    firstTranslateYAppearance({ name: 'first-appearance', target: '.sidebar-menu-item', time: 750, delay: 150 }),
    firstWidthAppearance({ name: 'first-width-appearance', time: 550 }),
  ];
}
