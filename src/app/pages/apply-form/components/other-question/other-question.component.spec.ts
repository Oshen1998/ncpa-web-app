import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherQuestionComponent } from './other-question.component';

describe('OtherQuestionComponent', () => {
  let component: OtherQuestionComponent;
  let fixture: ComponentFixture<OtherQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
