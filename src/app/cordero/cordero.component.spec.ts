import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorderoComponent } from './cordero.component';

describe('CorderoComponent', () => {
  let component: CorderoComponent;
  let fixture: ComponentFixture<CorderoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorderoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
