import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteproyectoListComponent } from './anteproyecto-list.component';

describe('AnteproyectoListComponent', () => {
  let component: AnteproyectoListComponent;
  let fixture: ComponentFixture<AnteproyectoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnteproyectoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnteproyectoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
