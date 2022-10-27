import { Component, OnInit, Output } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UsersService, private loggingService: LoggingService) {}

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.loggingService.logStatusChange(this.users[id], 'inactive');
    this.userService.setToInactive(id);
  }
}
