import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkQuestionComponent } from './work-question.component';

describe('WorkQuestionComponent', () => {
  let component: WorkQuestionComponent;
  let fixture: ComponentFixture<WorkQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
