import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    AboutComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
