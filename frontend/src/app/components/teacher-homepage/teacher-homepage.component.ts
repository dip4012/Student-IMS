import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-homepage',
  templateUrl: './teacher-homepage.component.html',
  styleUrls: ['./teacher-homepage.component.css'],
})
export class TeacherHomepageComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;
  token!: any;
  id!: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
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

  async login() {
    const url = 'http://localhost:8080/ims/teacher/auth/login';
    const data = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    await this.http.post<any>(url, data).subscribe(
      (res) => {
        this.id = res.teacher._id;
        this.token = res.token;

        localStorage.setItem('id_token', this.token);
      },
      (error) => {
        console.log(error);
      }
    );

    this.hide = false;

    setTimeout(
      () =>
        this.router.navigate([this.id], { relativeTo: this.activatedRoute }),
      2000
    );
  }
}
