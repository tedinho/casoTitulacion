import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

declare var Swal: any;

@Component({
  selector: 'app-asignacion-revisor',
  templateUrl: './asignacion-revisor.component.html',
})
export class AsignacionRevisorComponent {

  estudiantes: any;
  revisores: any;

  alu: Array<any> = [];

  revisorEstudianteArr: any;

  constructor(private revisor: GestionProyectoService) {
    this.revisor.obtenerRevisores().subscribe((respRxE) => {
      this.revisorEstudianteArr = respRxE;     
      console.log(respRxE);  
      this.revisorEstudianteArr.forEach((elemntos) => {
        this.revisor.fusion(elemntos['student_id'])
          .subscribe((re) => {
            this.alu.push(re);   
            console.log(re);
          });               
      });
    });

    this.revisor.getEstudiante().subscribe((respEst) => {
      this.estudiantes = respEst['users'];
    });

    this.revisor.getRevisor().subscribe((respRev) => {
      this.revisores = respRev['users'];
    });
  }

  revisorForm = new FormGroup({
    student_id: new FormControl(''),
    revisor_id: new FormControl(''),
  });

  registrarInforme() {
    this.revisor.registrarRevisor(this.revisorForm.value).subscribe((resp: any) => {      
      this.revisorForm.reset();
      Swal.fire({
        text: `${resp.message}`,
        icon: 'info',                  
      });
    }, (errorSvr)=>{
      console.log(errorSvr);
      this.revisorForm.reset();
      Swal.fire({
        icon: 'error',
        text: 'Error al asignar revisor',                
      });
    });
  }
}
