import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMapaComponent } from './app-mapa.component';

describe('AppMapaComponent', () => {
  let component: AppMapaComponent;
  let fixture: ComponentFixture<AppMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
