import { TestBed } from '@angular/core/testing';

import { DocenteCarreraService } from './docente-carrera.service';

describe('DocenteCarreraService', () => {
  let service: DocenteCarreraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocenteCarreraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
