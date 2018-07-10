import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorsailingComponent } from './juniorsailing.component';

describe('JuniorsailingComponent', () => {
  let component: JuniorsailingComponent;
  let fixture: ComponentFixture<JuniorsailingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuniorsailingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorsailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
