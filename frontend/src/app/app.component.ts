import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ABC School';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  toStudent() {
    this.router.navigate(['student'], { relativeTo: this.activatedRoute });
  }

  toTeacher() {
    this.router.navigate(['teacher'], { relativeTo: this.activatedRoute });
  }
}
