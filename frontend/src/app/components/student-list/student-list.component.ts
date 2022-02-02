import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { StudentListService } from 'src/app/services/student-list.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  public class: any;
  public sec: any;
  url: any;
  students: any;
  classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  sections = ['A', 'B', 'C', 'D'];

  isStudentsPresent = false;

  ColumnsToDisplay = [
    'name',
    'gender',
    'email',
    'class',
    'section',
    'roll',
    'hobby',
    'scienceMarks',
    'mathsMarks',
    'computerMarks',
    'about',
  ];

  constructor(
    private studentsListService: StudentListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getClass(event: MatSelectChange) {
    this.class = event.value;
  }
  getSec(event: MatSelectChange) {
    this.sec = event.value;
  }

  onSearch() {
    this.url = `http://localhost:8080/ims/teacher/details/students/${this.class}/${this.sec}`;
    this.studentsListService.getStudents(this.url).subscribe(
      (data) => (this.students = data),
      (error) => console.log(error)
    );

    if (!this.students) this.isStudentsPresent = false;
    else this.isStudentsPresent = true;
  }

  getAbout(student: any) {
    console.log(student);

    this.router.navigate([student._id], { relativeTo: this.activatedRoute });
  }
}
