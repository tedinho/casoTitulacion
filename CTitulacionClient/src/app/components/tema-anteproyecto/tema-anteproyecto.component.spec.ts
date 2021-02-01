import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaAnteproyectoComponent } from './tema-anteproyecto.component';

describe('TemaAnteproyectoComponent', () => {
  let component: TemaAnteproyectoComponent;
  let fixture: ComponentFixture<TemaAnteproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaAnteproyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
