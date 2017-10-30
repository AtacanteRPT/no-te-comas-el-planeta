import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConocenosComponent } from './app-conocenos.component';

describe('AppConocenosComponent', () => {
  let component: AppConocenosComponent;
  let fixture: ComponentFixture<AppConocenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppConocenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConocenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
