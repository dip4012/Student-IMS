import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { StudentComponent } from './components/student/student.component';
const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'teachers', component: TeacherListComponent },
  { path: 'student', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentListComponent, TeacherListComponent, StudentComponent]
