import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { DerivedComponent } from './derived/derived.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    DerivedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
