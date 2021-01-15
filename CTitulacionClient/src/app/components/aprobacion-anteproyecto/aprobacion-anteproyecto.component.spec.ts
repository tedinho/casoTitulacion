import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionAnteproyectoComponent } from './aprobacion-anteproyecto.component';

describe('AprobacionAnteproyectoComponent', () => {
  let component: AprobacionAnteproyectoComponent;
  let fixture: ComponentFixture<AprobacionAnteproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobacionAnteproyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobacionAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
