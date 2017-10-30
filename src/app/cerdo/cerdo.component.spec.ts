import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerdoComponent } from './cerdo.component';

describe('CerdoComponent', () => {
  let component: CerdoComponent;
  let fixture: ComponentFixture<CerdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
