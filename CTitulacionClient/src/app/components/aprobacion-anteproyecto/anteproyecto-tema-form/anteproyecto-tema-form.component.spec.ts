import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteproyectoTemaFormComponent } from './anteproyecto-tema-form.component';

describe('AnteproyectoTemaFormComponent', () => {
  let component: AnteproyectoTemaFormComponent;
  let fixture: ComponentFixture<AnteproyectoTemaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnteproyectoTemaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnteproyectoTemaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
