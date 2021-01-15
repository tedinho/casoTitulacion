import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAnteproyectoComponent } from './gestion-anteproyecto.component';

describe('GestionAnteproyectoComponent', () => {
  let component: GestionAnteproyectoComponent;
  let fixture: ComponentFixture<GestionAnteproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAnteproyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
