import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultHighlightColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  // Passes in the background color style to a chosen Element
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultHighlightColor;
  }

  // Listens to the mouseenter Event
  // Gets the eventData
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  // Listens to the mouseleave Event
  // Gets the eventData
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultHighlightColor;
  }
}
