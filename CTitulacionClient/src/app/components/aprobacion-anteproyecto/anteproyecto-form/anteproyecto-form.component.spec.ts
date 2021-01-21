import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteproyectoFormComponent } from './anteproyecto-form.component';

describe('AnteproyectoFormComponent', () => {
  let component: AnteproyectoFormComponent;
  let fixture: ComponentFixture<AnteproyectoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnteproyectoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnteproyectoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
