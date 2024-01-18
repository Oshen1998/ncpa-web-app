import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeQuestionComponent } from './degree-question.component';

describe('DegreeQuestionComponent', () => {
  let component: DegreeQuestionComponent;
  let fixture: ComponentFixture<DegreeQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreeQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegreeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
