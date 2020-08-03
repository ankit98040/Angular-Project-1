import { Component, OnInit } from '@angular/core';

/*@Component({
  //selector: '[app-servers]', this is treated as an attribute
  selector: `.app-servers`,
  //treated as a class
  template: `
  <app-server ></app-server>
  <h3 >hello guys</h3>
  <app-server style="font-family: fantasy;"></app-server>`,
  styleUrls: ['./servers.component.css']
})*/

@Component({
  selector:'app-servers',
  templateUrl:'./servers.component.html'

})
export class ServersComponent implements OnInit {
  serverId:number= 10;
  serverStatus:string= 'offline';
  allowNewServer=false;
  serverCreationStatus='No server was created';
  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000)
   }
  ngOnInit(){

  }

  onCreateServer(){
    this.serverCreationStatus='server created'
  }
}
