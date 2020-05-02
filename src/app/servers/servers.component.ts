import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  userNameStatus = '';
  serverName = 'TestServer';
  userName = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateSever() {
    this.serverCreationStatus  ='Server was created! name is ' + this.serverName;
  }
  
  onCreateUserName() {
    this.userNameStatus  ='User : ' + this.userName + ' was created!';
    this.userName = '';
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onUpdateUserName(event: any) {
    this.userName = event.target.value;
  }
}
