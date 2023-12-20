import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersQuestionComponent } from './masters-question.component';

describe('MastersQuestionComponent', () => {
  let component: MastersQuestionComponent;
  let fixture: ComponentFixture<MastersQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastersQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MastersQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
