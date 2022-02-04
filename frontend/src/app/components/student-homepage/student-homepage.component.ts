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

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
}
