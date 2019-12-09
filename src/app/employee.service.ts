import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http: HttpClient) { }

  getEmployeesList(): Observable<any> {
    return this.http.get('/employees');
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post('/employees/addEmployee', employee);
  }
  
  
  
}
