import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponentComponent } from './question-component.component';

describe('QuestionComponentComponent', () => {
  let component: QuestionComponentComponent;
  let fixture: ComponentFixture<QuestionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
