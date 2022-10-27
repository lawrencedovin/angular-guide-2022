import { Component, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService){}

  onSetToInactive(id: number) {
    this.usersService.getUpdatedStatusID.emit(id);
  }
}
