import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
  <app-server style="font-family: fantasy;"></app-server>
  <h3 style="font-family: fantasy;">hello guys</h3>
  <app-server style="font-family: fantasy;"></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
