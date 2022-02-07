import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

interface Student {
  name: String;
  gender: String;
  email: String;
  class: String;
  section: String;
  roll: Number;
  hobby: String;
  scienceMarks: Number;
  mathsMarks: Number;
  computerMarks: Number;
}

export interface DialogData {
  email: String;
  class: Number;
  section: String;
  roll: Number;
}

@Component({
  selector: 'app-students-detail-page',
  templateUrl: './students-detail-page.component.html',
  styleUrls: ['./students-detail-page.component.css'],
})
export class StudentsDetailPageComponent implements OnInit {
  public student: any;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const url = 'http://localhost:8080/ims/student/details';
    this.http.get<Student>(url).subscribe(
      (data) => {
        this.student = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateDialog, {
      data: {
        email: this.student.email,
        class: this.student.class,
        section: this.student.section,
        roll: this.student.roll,
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      const url = 'http://localhost:8080/ims/student/details';
      this.http.patch<any>(url, res).subscribe(
        (data) => (this.student = data),
        (error) => console.log(error.error.message)
      );
    });
  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}

@Component({
  selector: 'update-dialog',
  templateUrl: './update-dialog.html',
})
export class UpdateDialog {
  constructor(
    public dialogRef: MatDialogRef<UpdateDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
