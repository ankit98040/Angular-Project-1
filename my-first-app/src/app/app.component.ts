import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'] here we can pass multiple css stylesheets in this list
  styles:[`
    h1, p{
      color:dodgerblue;
      padding-top: 48px;
      font-family:fantasy;
    }
  `]
})
export class AppComponent {
  name = name;
}
