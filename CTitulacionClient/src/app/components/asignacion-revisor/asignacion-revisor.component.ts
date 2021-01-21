import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

@Component({
  selector: 'app-asignacion-revisor',
  templateUrl: './asignacion-revisor.component.html'
})
export class AsignacionRevisorComponent {

  estudiantes: any;
  revisores: any;

  constructor(private revisor: GestionProyectoService) {
    
    this.revisor.getEstudiante()
      .subscribe(respEst => {
        this.estudiantes =respEst['users'];
      });

    this.revisor.getRevisor()
      .subscribe(respRev =>{
        this.revisores = respRev['users'];
      });

   }

  revisorForm = new FormGroup({
    student_id: new FormControl(''),
    revisor_id: new FormControl(''),
    id: new FormControl(''),
  });


  registrarInforme(){

  }

}
