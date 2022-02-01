import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Students } from 'src/app/services/Students';

@Injectable({
  providedIn: 'root',
})
export class StudentListService {
  constructor(private http: HttpClient) {}

  getStudents(url: any): Observable<Students[]> {
    return this.http.get<Students[]>(url);
  }
}
