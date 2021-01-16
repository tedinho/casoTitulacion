import { TestBed } from '@angular/core/testing';

import { ObservacionAnteproyectoService } from './observacion-anteproyecto.service';

describe('ObservacionAnteproyectoService', () => {
  let service: ObservacionAnteproyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservacionAnteproyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
