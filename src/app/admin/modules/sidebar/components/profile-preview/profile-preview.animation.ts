import { animate, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';
import { DefaultAnimationOptions } from '../../../../types/default-animation-options';
import { bezierCurve } from '../../../../functions/bezier-curve.function';

export function firstScaleAppearance(
  options: any
): AnimationTriggerMetadata {

  const { name, time } = options;

  const initial = { transform: 'scale(0.1)', opacity: 0.5 };
  const final = { transform: 'scale(1)', opacity: 1 };

  return trigger(name, [
    transition(':enter', [
      style(initial),
      animate(bezierCurve(time), keyframes([
        style(initial),
        style(final)])),
    ]),
  ]);

}

export function firstTranslateXAppearance(
  options: DefaultAnimationOptions
): AnimationTriggerMetadata {

  const { name, time } = options;

  const initial = { transform: 'translateX(-70px)', opacity: 0.1 };
  const final = { transform: 'translateX(0)', opacity: 1 };

  return trigger(name, [
    transition(':enter', [
      style(initial),
      animate(bezierCurve(time), style(final)),
    ]),
  ]);

}

export function complexProfilePreviewAnimation(): AnimationTriggerMetadata[] {
  return [
    firstScaleAppearance({ name: 'first-scale-appearance', time: 650 }),
    firstTranslateXAppearance({ name: 'first-translate-appearance', time: 950 }),
  ];
}
