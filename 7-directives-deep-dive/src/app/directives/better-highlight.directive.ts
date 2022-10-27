import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // Passes in the background color style to a chosen Element
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  // Listens to the mouseenter Event
  // Gets the eventData
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = 'blue';
  }

  // Listens to the mouseleave Event
  // Gets the eventData
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'yellow';
  }

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // )
}
}
