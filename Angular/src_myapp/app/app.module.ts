import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RemoveSpaces } from './remove-space';
import { FilterData } from './filterData';


@NgModule({
  declarations: [
    AppComponent,RemoveSpaces,FilterData
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
