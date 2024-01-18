import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlQuestionComponent } from './al-question.component';

describe('AlQuestionComponent', () => {
  let component: AlQuestionComponent;
  let fixture: ComponentFixture<AlQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
