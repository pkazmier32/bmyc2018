import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmyccalendarComponent } from './bmyccalendar.component';

describe('BmyccalendarComponent', () => {
  let component: BmyccalendarComponent;
  let fixture: ComponentFixture<BmyccalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmyccalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmyccalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
