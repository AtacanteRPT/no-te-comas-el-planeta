import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAcercaNosotrosComponent } from './app-acerca-nosotros.component';

describe('AppAcercaNosotrosComponent', () => {
  let component: AppAcercaNosotrosComponent;
  let fixture: ComponentFixture<AppAcercaNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAcercaNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAcercaNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
