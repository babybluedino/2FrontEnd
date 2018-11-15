import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  @Input()
  isBase: boolean=true;
      
  val:string="this is the data....";
  constructor() { }

  ngOnInit() {
  }

}
