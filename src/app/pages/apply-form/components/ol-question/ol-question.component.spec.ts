import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlQuestionComponent } from './ol-question.component';

describe('OlQuestionComponent', () => {
  let component: OlQuestionComponent;
  let fixture: ComponentFixture<OlQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
