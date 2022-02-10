import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentComponent } from './components/student/student.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { StudentHomepageComponent } from './components/student-homepage/student-homepage.component';
import {
  StudentsDetailPageComponent,
  UpdateDialog,
} from './components/students-detail-page/students-detail-page.component';
import { TeacherHomepageComponent } from './components/teacher-homepage/teacher-homepage.component';
import { TeacherNavigationComponent } from './components/teacher-navigation/teacher-navigation.component';

const routes: Routes = [
  //student routes
  { path: 'student', component: StudentHomepageComponent },
  { path: 'student/register', component: StudentRegisterComponent },
  { path: 'student/:id', component: StudentsDetailPageComponent },

  //teacher routes
  { path: 'teacher', component: TeacherHomepageComponent },
  { path: 'teacher/:id', component: TeacherNavigationComponent },
  { path: 'students-list', component: StudentListComponent },
  { path: 'students-list/:id', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  StudentListComponent,
  StudentComponent,
  StudentRegisterComponent,
  StudentHomepageComponent,
  StudentsDetailPageComponent,
  UpdateDialog,
  TeacherHomepageComponent,
  TeacherNavigationComponent,
];
