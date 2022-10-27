import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class ElseDirective {
  @Input() set ngElse(condition: boolean) {
    if(!condition) {
      // Creates a view in this view container
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else {
      // Removes view from the DOM
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ){ }

}
