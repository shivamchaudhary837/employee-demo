// import necessary modules, ActivatedRoute, and EmployeeService

import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee/employee.module";
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../employee.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId: number| any;
  employee: Employee | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: { [x: string]: string | number; }) => {
      this.employeeId = +params['employeeId'];
      this.getEmployeeDetails();
    });
  }

  getEmployeeDetails(): void {
    this.employeeService.getEmployeeById(this.employeeId).subscribe((employee: any) => {
      this.employee = employee;
    });
  }
}
