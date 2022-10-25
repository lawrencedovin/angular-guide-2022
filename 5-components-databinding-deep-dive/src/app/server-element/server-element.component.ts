import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input() element: any;
  @ViewChild('heading', {static: true}) heading: ElementRef;
  @ContentChild('contentParagraph', {static: true}) contentParagraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges called');
    // console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    // console.log('Text Content' + this.heading.nativeElement.textContent);
    console.log('Content Paragraph' + this.contentParagraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    // console.log('Text Content' + this.heading.nativeElement.textContent);
    console.log('Content Paragraph' + this.contentParagraph.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy called');
  }

}
