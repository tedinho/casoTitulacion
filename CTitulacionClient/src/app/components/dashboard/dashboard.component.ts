import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent  {


  estudiantes: any;

  constructor(private gestionService: GestionProyectoService) {
    this.gestionService.obtenerEstudiantes()  
      .subscribe((resp: any) =>{
        this.estudiantes = resp;
      }, (errorSrv)=> {
        console.log(errorSrv);
      });
   }

  //Formulario Reactivo de login
  informeForm = new FormGroup({

    titulo: new FormControl(''),
    cuerpo: new FormControl(''),
    observacion: new FormControl(''),
    id: new FormControl('')

  });

  registrarInforme(){
    console.warn(this.informeForm.value);
    this.gestionService.registrarInforme(this.informeForm.value)
      .subscribe(respu =>{
        console.log(respu)
      }, (errorSrv)=>{
        console.log(errorSrv);
      });
  }

}
