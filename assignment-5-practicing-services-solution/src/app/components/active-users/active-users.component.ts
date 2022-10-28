import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit{
  activeUsers: Array<string> = [];

  constructor(private usersService: UsersService){}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
