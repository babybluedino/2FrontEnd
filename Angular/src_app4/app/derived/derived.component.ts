import { Component, OnInit } from '@angular/core';
import { BaseComponent as app4 } from '../base/base.component';

@Component({
  selector: 'app-derived',
  templateUrl: './derived.component.html',
  styleUrls: ['./derived.component.css']
})
export class DerivedComponent extends app4 implements OnInit {

  //constructor() { }

  ngOnInit() {
  }

}
