import { Component, OnInit } from '@angular/core';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {

  stClass='one two';
  stClassArray=['one','two']

  color:string
  size:number
  show:string
  displayText:string

  constructor() {
    this.color='pink';
    this.size=16;
    this.displayText='show-class';
    this.show='visible';
   }

  toggle()
  {
    //alert('toggled '+this.show);
    if(this.show=='visible')
    {
      this.show='hidden';
    }
    else
    {
      this.show='visible';
    }
  }

  ngOnInit() {
  }

}
