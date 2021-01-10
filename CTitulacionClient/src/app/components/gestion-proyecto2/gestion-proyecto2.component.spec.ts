import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProyecto2Component } from './gestion-proyecto2.component';

describe('GestionProyecto2Component', () => {
  let component: GestionProyecto2Component;
  let fixture: ComponentFixture<GestionProyecto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProyecto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProyecto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
