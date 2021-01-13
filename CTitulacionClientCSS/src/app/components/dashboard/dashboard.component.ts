import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent  {

  constructor(private gestionService: GestionProyectoService) { }

  //Formulario Reactivo de login
  informeForm = new FormGroup({

    titulo: new FormControl(''),
    cuerpo: new FormControl(''),
    observacion: new FormControl(''),
    email: new FormControl(localStorage.getItem('email'))

  });

  registrarInforme(){
    console.warn(this.informeForm.value);
    this.gestionService.registrarInforme(this.informeForm.value)
      .subscribe(respu =>{
        console.log(respu)
      });
  }

}
