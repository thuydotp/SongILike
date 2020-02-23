import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic-anchor]'
})
export class DynamicAnchorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
