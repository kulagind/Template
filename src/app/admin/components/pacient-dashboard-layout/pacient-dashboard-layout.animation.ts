import {StaggerAnimationOptions} from "../../types/stagger-animation-options";
import {animate, AnimationTriggerMetadata, query, stagger, style, transition, trigger} from "@angular/animations";
import {bezierCurve} from "../../functions/bezier-curve.function";

export function firstScaleAppearance(
  options: StaggerAnimationOptions
): AnimationTriggerMetadata {

  const { time, name, delay, target } = options;

  const initial = { transform: 'scale(0.8)', opacity: 0 };
  const final = { transform: 'scale(1)', opacity: 1 };

  return trigger(name, [

    transition(':enter', [
      query(target, [
        style(initial),
        stagger(`${delay}ms`, [
          animate(bezierCurve(time), style(final)),
        ]),
      ]),

    ]),
  ]);

}
