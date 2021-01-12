import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiasProyectoComponent } from './guias-proyecto.component';

describe('GuiasProyectoComponent', () => {
  let component: GuiasProyectoComponent;
  let fixture: ComponentFixture<GuiasProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiasProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiasProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
