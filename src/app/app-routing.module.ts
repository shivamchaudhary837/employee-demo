import { RouterModule, Routes } from "@angular/router";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeFormComponent } from "./employee-form/employee-form.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/add', component: EmployeeFormComponent },
  { path: 'employee/:employeeId', component: EmployeeDetailsComponent },
  // Add route for updating employee if needed
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
