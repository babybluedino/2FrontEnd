import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['/']">Home</a>&nbsp;&nbsp;&nbsp;
    <a [routerLink]="['/about']">About</a>&nbsp;&nbsp;&nbsp;
    <a [routerLink]="['/help']">Help</a>&nbsp;&nbsp;&nbsp;
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }
