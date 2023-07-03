import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentApplicationComponent } from './recruitment-application.component';

describe('RecruitmentApplicationComponent', () => {
  let component: RecruitmentApplicationComponent;
  let fixture: ComponentFixture<RecruitmentApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitmentApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
