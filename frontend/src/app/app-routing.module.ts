import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { StudentComponent } from './components/student/student.component';
import { UpdateMarksComponent } from './components/update-marks/update-marks.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { StudentHomepageComponent } from './components/student-homepage/student-homepage.component';
import {
  StudentsDetailPageComponent,
  UpdateDialog,
} from './components/students-detail-page/students-detail-page.component';

const routes: Routes = [
  { path: 'student', component: StudentHomepageComponent },
  { path: 'student/register', component: StudentRegisterComponent },
  { path: 'student/:id', component: StudentsDetailPageComponent },

  { path: 'students-list', component: StudentListComponent },
  { path: 'students-list/:id', component: StudentComponent },
  { path: 'students-list/:id/update', component: UpdateMarksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  StudentListComponent,
  TeacherListComponent,
  StudentComponent,
  UpdateMarksComponent,
  StudentRegisterComponent,
  StudentHomepageComponent,
  StudentsDetailPageComponent,
  UpdateDialog,
];
