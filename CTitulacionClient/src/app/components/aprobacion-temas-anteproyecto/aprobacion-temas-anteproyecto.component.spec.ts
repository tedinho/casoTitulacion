import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionTemasAnteproyectoComponent } from './aprobacion-temas-anteproyecto.component';

describe('AprobacionTemasAnteproyectoComponent', () => {
  let component: AprobacionTemasAnteproyectoComponent;
  let fixture: ComponentFixture<AprobacionTemasAnteproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobacionTemasAnteproyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobacionTemasAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
