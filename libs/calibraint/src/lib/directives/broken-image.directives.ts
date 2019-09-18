// Angular Imports
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[brokenImage]',
  providers: [NgModel],
})

// used like <img brokenImage [src]="'/assets/img/profile.jpg' | addDomain: imageBase"/>
export class BrokenImageDirective {
  @Input() loaded: boolean;
  @Output() loadedChange: EventEmitter<boolean> = new EventEmitter();

  constructor(private renderer: Renderer2,
              el: ElementRef) {
    this.renderer.listen(el.nativeElement, 'error', () => {
      this.loadedChange.emit(false);
      this.renderer.addClass(el.nativeElement, 'hide');
    });

    this.renderer.listen(el.nativeElement, 'load', () => {
      this.loadedChange.emit(true);
      this.renderer.removeClass(el.nativeElement, 'hide');
    });
  }
}
