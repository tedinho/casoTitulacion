import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

declare var Swal: any;

@Component({
  selector: 'app-modificacion-revisor',
  templateUrl: './modificacion-revisor.component.html'
})
export class ModificacionRevisorComponent  {

  estudiantes: Array<any> = [];  
  correo = localStorage['email'];

  constructor(private gestionService: GestionProyectoService) {     

      this.gestionService.pivotRevisor()
        .subscribe(re =>{
          let i;
          for(i in re){            
            this.gestionService.pivotEstudiante(re[i]['student_id'])
              .subscribe(res =>{
                let i;
                for(i in res){
                  this.estudiantes.push(res[i])
                }
              });
          }
        });

  }
  //Formulario Reactivo de login
  informeForm = new FormGroup({

    titulo: new FormControl(''),
    cuerpo: new FormControl(''),
    observacion: new FormControl(''),
    validacion: new FormControl(''),
    id: new FormControl(''),
    revisor_email: new FormControl(this.correo),

  });

  registrarInforme(){        
    this.gestionService.registrarInforme(this.informeForm.value)
      .subscribe(respu =>{        
        Swal.fire({          
          text: `${respu['message']}`,
          icon: 'info',
          confirmButtonText: 'Ok'
        });
        this.informeForm.reset();          
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
