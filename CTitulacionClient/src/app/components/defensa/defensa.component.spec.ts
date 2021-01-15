import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensaComponent } from './defensa.component';

describe('DefensaComponent', () => {
  let component: DefensaComponent;
  let fixture: ComponentFixture<DefensaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefensaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
