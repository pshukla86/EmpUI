import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html"
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employeeService.getEmployeesList().subscribe(res=>{
      this.employees = res['employeeList'];
    }, err=>({

    }));
    }
  
  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }
}
