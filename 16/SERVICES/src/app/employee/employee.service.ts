import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private employees = [
    { id: 1, name: 'Scarlett Johnson', role: 'Software Engineer' },
    { id: 2, name: 'Jennifer Lawrence', role: 'UI Designer' },
    { id: 3, name: 'Elizabeth Olsen', role: 'Project Manager' },
    { id: 4, name: 'Emma Watson ', role: 'QA Engineer' },
    { id: 5, name: 'Sakura', role: 'Manager' },
    { id: 6, name: 'Natasha', role: 'Devloper' },
    { id: 7, name: 'Jane Foster', role: 'Mentor' },
    { id: 8, name: ' Kate', role: 'Assistant Manager' }
  ];
  
  constructor() { }
  
  getEmployees() {
    return this.employees;
  }
}