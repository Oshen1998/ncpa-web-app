import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalQuestionComponent } from './professional-question.component';

describe('ProfessionalQuestionComponent', () => {
  let component: ProfessionalQuestionComponent;
  let fixture: ComponentFixture<ProfessionalQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
