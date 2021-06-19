import { Renderer2 } from '@angular/core';

export interface GradientOption {
  offset: number;
  color: string;
}

export class Gradient {

  private gradient!: CanvasGradient;
  private secondaryGradient!: CanvasGradient;
  private gradientOptions: GradientOption[] = [
    { offset: 0.4, color: 'rgba(31, 147, 122, 0.4)'},
    { offset: 0.9, color: 'rgba(31, 147, 122, 1)'},
    { offset: 0, color: 'rgb(255, 255, 255)'},
  ];

  private secondaryGradientOptions: GradientOption[] = [
    { offset: 0, color: 'rgba(31, 147, 122, 1)'},
    { offset: 0.1, color: 'rgba(31, 147, 122, 0.3)'},
    { offset: 0.9, color: 'rgb(255, 255, 255, 0.6)'},
  ];

  constructor(protected readonly renderer: Renderer2) {
    this.initGradient();
    this.initSecondaryGradient();
  }

  public getGradient(): CanvasGradient {
    this.fillGradient(this.gradient, this.gradientOptions);
    return this.gradient;
  }

  public getSecondaryGradient(): CanvasGradient {
    this.fillGradient(this.secondaryGradient, this.secondaryGradientOptions)
    return this.secondaryGradient;
  }

  private fillGradient(target: CanvasGradient, options: GradientOption[]): void {
    for (const color of options) {
      target.addColorStop(color.offset, color.color);
    }
  }

  private initGradient(): void {
    const canvas = this.renderer.createElement('canvas');
    const context = canvas.getContext('2d');
    this.gradient = context.createLinearGradient(0, 0, 0, 1700);
  }

  private initSecondaryGradient(): void {
    const canvas = this.renderer.createElement('canvas');
    const context = canvas.getContext('2d');
    this.secondaryGradient = context.createLinearGradient(0, 0, 0, 1700);
  }
}
