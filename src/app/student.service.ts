import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = "http://localhost:8080/student-mgmt"

  constructor(private httpClient:HttpClient) { }
  
  getStudents(): Observable<student[]>
  {
    return this.httpClient.get<student[]>(`${this.baseUrl}/students`);
  }
 
  addStudent(stud:student): Observable<student>
  {
    return this.httpClient.post<student>(`${this.baseUrl}/add`,stud);
  }
  deleteStudent(id:number) : Observable<void>
  {
    return this.httpClient.delete<void>(`${this.baseUrl}/student/${id}`);
  }
}
