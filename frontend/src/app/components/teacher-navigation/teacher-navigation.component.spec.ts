import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherNavigationComponent } from './teacher-navigation.component';

describe('TeacherNavigationComponent', () => {
  let component: TeacherNavigationComponent;
  let fixture: ComponentFixture<TeacherNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
