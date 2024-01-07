import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee/employee.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:9090/employees';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl); // Removed /allEmployees
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  saveEmployee(employee: Employee): Observable<any> {
    return this.http.post(`${this.apiUrl}/saveEmployee`, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateEmployee/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
