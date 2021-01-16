import { TestBed } from '@angular/core/testing';

import { PeriodoLectivoService } from './periodo-lectivo.service';

describe('PeriodoLectivoService', () => {
  let service: PeriodoLectivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodoLectivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
