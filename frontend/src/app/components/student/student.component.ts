import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  selectedId: any;
  student: any;
  url: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get('id');
    });

    this.url = `http://localhost:8080/ims/teacher/details/students/${this.selectedId}`;
    this.http.get(this.url).subscribe(
      (data) => {
        this.student = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateMarks() {
    this.router.navigate(['update'], { relativeTo: this.activatedRoute });
  }
}
