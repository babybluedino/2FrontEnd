import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  //value recieved frm parent
  @Input()
  initval:number=0;

  @Output()
  change:EventEmitter<number>=new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  incr()
  {
    this.initval++;
    //this value shud also be received by parent
    this.change.emit(this.initval);
  }

  decr()
  {
    this.initval--;
    this.change.emit(this.initval);

  }
}
