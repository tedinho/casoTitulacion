import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

declare var Swal: any;

@Component({
  selector: 'app-modificacion-revisor',
  templateUrl: './modificacion-revisor.component.html'
})
export class ModificacionRevisorComponent  {

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
        console.log(respu['message']);
        Swal.fire({          
          text: `${respu['message']}`,
          icon: 'info',
          confirmButtonText: 'Ok'
        });        
      }, (errorSrv)=>{
        console.log(errorSrv);
        Swal.fire({
          title: 'Error',
          text: 'Error al guardar informe',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  }

}
