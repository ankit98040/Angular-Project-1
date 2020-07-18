import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  //styleUrls: ['./success-alert.component.css']
  styles: [`
    p {
      padding:20px;
      background-color: mistyrose;
      border: 1px solid pink;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
