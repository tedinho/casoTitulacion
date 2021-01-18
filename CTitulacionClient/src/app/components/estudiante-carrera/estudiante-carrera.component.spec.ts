import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteCarreraComponent } from './estudiante-carrera.component';

describe('EstudianteCarreraComponent', () => {
  let component: EstudianteCarreraComponent;
  let fixture: ComponentFixture<EstudianteCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudianteCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
