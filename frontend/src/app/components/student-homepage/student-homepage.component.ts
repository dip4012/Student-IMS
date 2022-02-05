import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-homepage',
  templateUrl: './student-homepage.component.html',
  styleUrls: ['./student-homepage.component.css'],
})
export class StudentHomepageComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;
  id: any;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  toRegister() {
    this.hide = false;
    setTimeout(
      () =>
        this.router.navigate(['register'], { relativeTo: this.activatedRoute }),
      2000
    );
  }

  login() {
    const url = 'http://localhost:8080/ims/student/auth/login';
    const data = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.http.post(url, data).subscribe(
      (res) => {
        this.id = res;
      },
      (error) => {
        console.log(error);
      }
    );

    this.router.navigate([this.id], { relativeTo: this.activatedRoute });
  }
}
