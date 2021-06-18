import { Renderer2 } from '@angular/core';

export interface GradientOption {
  offset: number;
  color: string;
}

export class Gradient {

  private gradient!: CanvasGradient;
  private gradientOptions: GradientOption[] = [
    { offset: 0.9, color: 'rgba(31, 147, 122, 1)'},
    { offset: 0.4, color: 'rgba(31, 147, 122, 0.4)'},
    { offset: 0, color: 'rgb(255, 255, 255)'},
  ];

  constructor(protected readonly renderer: Renderer2) {
    this.initGradient();
    this.fillGradient();
  }

  public getGradient(): CanvasGradient {
    return this.gradient;
  }

  private fillGradient(): void {
    for (const color of this.gradientOptions) {
      this.gradient.addColorStop(color.offset, color.color);
    }
  }

  private initGradient(): void {
    const canvas = this.renderer.createElement('canvas');
    const context = canvas.getContext('2d');
    this.gradient = context.createLinearGradient(0, 0, 0, 1700);
  }
}
