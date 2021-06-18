import { DefaultAnimationOptions } from './default-animation-options';

export interface StaggerAnimationOptions extends DefaultAnimationOptions {
  delay: number;
  target?: string;
}
