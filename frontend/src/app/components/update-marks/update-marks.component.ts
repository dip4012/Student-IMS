import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-update-marks',
  templateUrl: './update-marks.component.html',
  styleUrls: ['./update-marks.component.css'],
})
export class UpdateMarksComponent implements OnInit {
  studentId: any;
  computer: any;
  science: any;
  maths: any;
  data: any;
  url: any;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.studentId = params.get('id');
    });
  }

  updateMarks() {
    this.url = `http://localhost:8080/ims/teacher/details/students/${this.studentId}`;

    this.data = {
      "scienceMarks": this.science,
      "mathsMarks": this.maths,
      "computerMarks": this.computer,
    };


    this.http.patch(this.url, this.data).subscribe(
      (res) => {
        console.log(`Marks succesfully updated`);
      },
      (error) => {
        console.log(error);
      }
    );

    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
