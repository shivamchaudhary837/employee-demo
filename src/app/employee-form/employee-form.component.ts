// import necessary modules and EmployeeService

import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee/employee.module";
import { EmployeeService } from "../employee.service";


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})



export class EmployeeFormComponent implements OnInit {
  employee: Employee = {
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  


  saveEmployee(): void {
    this.employeeService.saveEmployee(this.employee).subscribe(
      () => {
        // Handle success (e.g., show a success message)
      },
      (error) => {
        console.error('Error saving employee:', error);
        // Handle error (e.g., show an error message)
      }
    );
  }
  
}
