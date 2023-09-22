import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class AppRedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b';
   }

}
