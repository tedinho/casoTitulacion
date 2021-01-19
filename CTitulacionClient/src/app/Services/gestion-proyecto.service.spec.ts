import { TestBed } from '@angular/core/testing';

import { GestionProyectoService } from './gestion-proyecto.service';

describe('GestionProyectoService', () => {
  let service: GestionProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
