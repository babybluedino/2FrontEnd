import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { InventoryService } from '../service/inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  employees:Employee;
  constructor(private inv:InventoryService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      data=>{
        let empId=data['id'];
        this.employees=this.inv.getItemById(empId);
      }
    );
  }

}
