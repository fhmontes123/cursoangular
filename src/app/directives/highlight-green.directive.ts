import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight-green]',
})
export class HighlightGreenDirective {
  private element: ElementRef<HTMLDivElement> = inject(ElementRef);

  constructor(private renderer: Renderer2) {
    console.log('--HighlightGreenDirective');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
  }
}
