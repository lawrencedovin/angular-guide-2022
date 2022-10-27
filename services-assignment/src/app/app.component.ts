import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activeUsers: Array<string> = [];
  inactiveUsers: Array<string> = [];

  constructor(private usersService: UsersService){}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
