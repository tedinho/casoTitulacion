import { TestBed } from '@angular/core/testing';

import { CarreraRequisitoService } from './carrera-requisito.service';

describe('CarreraRequisitoService', () => {
  let service: CarreraRequisitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarreraRequisitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
