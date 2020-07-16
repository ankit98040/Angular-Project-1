import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', this is treated as an attribute
  selector: `.app-servers`,
  //treated as a class
  template: `
  <app-server ></app-server>
  <h3 >hello guys</h3>
  <app-server style="font-family: fantasy;"></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
