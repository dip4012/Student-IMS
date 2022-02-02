import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  selectedId: any;
  student: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get('id');
    });

    this.studentService.getStudent(this.selectedId).subscribe(
      (data) => {
        this.student = data;
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

  updateMarks() {
    this.router.navigate(['update'], { relativeTo: this.activatedRoute });
  }
}
