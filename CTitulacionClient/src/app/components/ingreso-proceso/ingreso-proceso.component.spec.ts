import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoProcesoComponent } from './ingreso-proceso.component';

describe('IngresoProcesoComponent', () => {
  let component: IngresoProcesoComponent;
  let fixture: ComponentFixture<IngresoProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoProcesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
