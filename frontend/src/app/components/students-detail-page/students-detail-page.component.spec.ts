import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDetailPageComponent } from './students-detail-page.component';

describe('StudentsDetailPageComponent', () => {
  let component: StudentsDetailPageComponent;
  let fixture: ComponentFixture<StudentsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
