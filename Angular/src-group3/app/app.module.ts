import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule,NgModel} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { HomeComponent } from './home/home.component';

const routesMap: Routes=[
  {path:'',component:HomeComponent},
  {path:'efc',component:EmployeeFormComponent},
  {path:'elc',component:EmployeeListComponent},
  {path:'evc/:id',component:EmployeeViewComponent},
  {path:'ie/:id',component:EmployeeFormComponent},
 ];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    EmployeeViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesMap),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
