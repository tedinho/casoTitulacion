import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-informe-nota',
  templateUrl: './informe-nota.component.html'
})
export class InformeNotaComponent {

  informeNotaForm = new FormGroup({
    validacion: new FormControl(''),
    cuerpo: new FormControl(''),
    observacion: new FormControl(''),
    calificacion_proyecto: new FormControl(''),
  });

  constructor() { }

  registrarInforme()
  {

  }

}
