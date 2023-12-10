import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor( private http: HttpClient) 
  { }

  public getAllStudents()
  {
    return this.http.get('http://localhost:8000/student');
  }
}
