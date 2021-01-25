import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudProrrogaComponent } from './solicitud-prorroga.component';


describe('SolicitudProrrogaComponent', () => {
  let component: SolicitudProrrogaComponent;
  let fixture: ComponentFixture<SolicitudProrrogaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudProrrogaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudProrrogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
