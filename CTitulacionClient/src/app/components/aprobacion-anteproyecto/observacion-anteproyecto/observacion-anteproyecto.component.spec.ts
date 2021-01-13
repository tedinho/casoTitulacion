import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacionAnteproyectoComponent } from './observacion-anteproyecto.component';

describe('ObservacionAnteproyectoComponent', () => {
  let component: ObservacionAnteproyectoComponent;
  let fixture: ComponentFixture<ObservacionAnteproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservacionAnteproyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservacionAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
