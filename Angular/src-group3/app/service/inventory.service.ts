import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  employees:Employee[];

  constructor() {
    this.employees=[
      {id:101,name:'saran',basic:20000,hra:20,dept:'human resoure'},
      {id:102,name:'raj',basic:30000,hra:30,dept:'data analytics'},
    ];
   }

   getAllItems(){
     return this.employees;
   }

   add( employee:Employee ){
    this.employees.push(employee);
  }

  getItemById(idInputed:number):Employee
  {
    let emp:Employee=null;
    emp = this.employees.find(
      (i) =>(i.id==idInputed)
    );
    return emp;
  }

  deleteItemById(idInputed:number){
       let indexToDel = this.employees.findIndex(
          (i)=>(i.id == idInputed)
       );
       this.employees.splice(indexToDel,1);
  }

  update(item:Employee){
    let indexToUpd = this.employees.findIndex(
      (i)=>(i.id==item.id)
    );
    this.employees[indexToUpd]=item;
  }

}
