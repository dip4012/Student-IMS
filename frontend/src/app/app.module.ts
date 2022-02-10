import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTokenService } from './services/add-token.service';
import { TeacherHomepageComponent } from './components/teacher-homepage/teacher-homepage.component';
import { TeacherNavigationComponent } from './components/teacher-navigation/teacher-navigation.component';

@NgModule({
  declarations: [AppComponent, routingComponents, TeacherHomepageComponent, TeacherNavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
