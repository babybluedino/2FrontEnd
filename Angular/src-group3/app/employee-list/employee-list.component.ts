import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { InventoryService } from '../service/inventory.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];
  constructor(private inv: InventoryService) { }

  ngOnInit() {
    this.employees=this.inv.getAllItems();
  }

  deleteItem(id:number){

    if(confirm("Are you sure you want to delete Employee#" + id)){
    this.inv.deleteItemById(id);
    this.employees=this.inv.getAllItems();
  }
  }
}


