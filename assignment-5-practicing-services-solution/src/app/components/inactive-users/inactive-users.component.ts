import { Component, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent {
  inactiveUsers: Array<string> = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
