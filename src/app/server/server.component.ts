import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
  })
export class ServerComponent {
    serverId = 0;
    serverStatus = 'offline';

    constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
      this.serverId =  Math.random() * 1000 % 5;
    }

    getBackgroundColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    getServerStatus() {
      return this.serverStatus;
    }
}
