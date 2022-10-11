import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Dropdown } from '../models/dropdown.model';
import dropdownData from "../../assets/dropdown-data.json";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {

  serverStatuses: Array<Dropdown> = dropdownData;

  onSubmit(serverForm: NgForm) {
    let {serverName, serverStatus} = serverForm.value;
    console.log(serverForm.value);
    console.log(`Server Name: ${serverName}`);
    console.log(`Server Status: ${serverStatus}`);
  }
}
