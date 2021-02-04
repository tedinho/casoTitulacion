import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeXEstudianteComponent } from './informe-x-estudiante.component';

describe('InformeXEstudianteComponent', () => {
  let component: InformeXEstudianteComponent;
  let fixture: ComponentFixture<InformeXEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeXEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeXEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
