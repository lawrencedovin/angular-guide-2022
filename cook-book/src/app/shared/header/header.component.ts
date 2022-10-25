import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() routeSelectedEvent = new EventEmitter<string>();

  onSelectRoute(route: string) {
    this.routeSelectedEvent.emit(route);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
