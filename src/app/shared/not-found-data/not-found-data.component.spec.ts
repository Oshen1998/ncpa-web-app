import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundDataComponent } from './not-found-data.component';

describe('NotFoundDataComponent', () => {
  let component: NotFoundDataComponent;
  let fixture: ComponentFixture<NotFoundDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
