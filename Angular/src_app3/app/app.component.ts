import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app3';
  count:number=6;

  counta:number[]=[5,4,2,8,2,2]
  //count:number[]=[{Fname:'xyz',sub:'subject',},4,2,8,2,2];
  //can send array of obj

  //********************/

  //provide a method for event calback
  currVal:number=2;

  changeVal(event)
  {
    this.currVal=event;
  }
}
