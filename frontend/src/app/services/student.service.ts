import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/services/Student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  url: any;

  constructor(private http: HttpClient) {}

  getStudent(id: any): Observable<Student[]> {
    this.url = `http://localhost:8080/ims/teacher/details/students/${id}`;
    return this.http.get<Student[]>(this.url);
  }
}
