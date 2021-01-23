import { TestBed } from '@angular/core/testing';

import { EvidenciaCarreraService } from './evidencia-carrera.service';

describe('EvidenciaCarreraService', () => {
  let service: EvidenciaCarreraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvidenciaCarreraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
