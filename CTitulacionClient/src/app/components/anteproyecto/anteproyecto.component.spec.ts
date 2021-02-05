import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteproyectoComponent } from './anteproyecto.component';

describe('AnteproyectoComponent', () => {
  let component: AnteproyectoComponent;
  let fixture: ComponentFixture<AnteproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnteproyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
