import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteproyectoTemaListComponent } from './anteproyecto-tema-list.component';

describe('AnteproyectoTemaListComponent', () => {
  let component: AnteproyectoTemaListComponent;
  let fixture: ComponentFixture<AnteproyectoTemaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnteproyectoTemaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnteproyectoTemaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
