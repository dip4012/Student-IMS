import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordValidator } from 'src/app/custom validators/password.validator';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent implements OnInit {
  public personalDetails!: FormGroup;
  public emailPassword!: FormGroup;
  public terms!: FormGroup;
  public id: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personalDetails = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      class: ['', Validators.required],
      section: ['', Validators.required],
      roll: ['', Validators.required],
      gender: ['', Validators.required],
      hobby: [''],
    });

    this.emailPassword = this.formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: PasswordValidator }
    );

    this.terms = this.formBuilder.group({
      accepted: [false],
    });
  }

  onSubmit() {
    const url = 'http://localhost:8080/ims/student/auth/register';
    const data = {
      name: this.personalDetails.get('name')?.value,
      password: this.emailPassword.get('password')?.value,
      gender: this.personalDetails.get('gender')?.value,
      email: this.emailPassword.get('email')?.value,
      class: this.personalDetails.get('class')?.value,
      section: this.personalDetails.get('section')?.value,
      roll: this.personalDetails.get('roll')?.value,
      hobby: this.personalDetails.get('hobby')?.value,
    };

    this.http.post(url, data).subscribe(
      (res) => {
        this.id = res;
      },
      (error) => {
        console.log(error);
      }
    );

    this.router.navigate(['..', this.id], { relativeTo: this.activatedRoute });
  }
}
