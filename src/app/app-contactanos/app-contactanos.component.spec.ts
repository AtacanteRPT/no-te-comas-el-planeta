import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactanosComponent } from './app-contactanos.component';

describe('AppContactanosComponent', () => {
  let component: AppContactanosComponent;
  let fixture: ComponentFixture<AppContactanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContactanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
