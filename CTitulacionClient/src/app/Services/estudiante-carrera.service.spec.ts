import { TestBed } from '@angular/core/testing';

import { EstudianteCarreraService } from '../estudiante-carrera.service';

describe('EstudianteCarreraService', () => {
  let service: EstudianteCarreraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudianteCarreraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
