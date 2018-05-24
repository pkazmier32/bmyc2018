import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubinfoComponent } from './clubinfo.component';

describe('ClubinfoComponent', () => {
  let component: ClubinfoComponent;
  let fixture: ComponentFixture<ClubinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
