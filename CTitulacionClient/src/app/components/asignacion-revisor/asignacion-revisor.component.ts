import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { element } from 'protractor';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

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
      this.revisorEstudianteArr.forEach((elemntos) => {
        this.revisor
          .fusion(elemntos['revisor_id'])
          .subscribe((re) => {
            this.alu.push(re);                          
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
    this.revisor.registrarRevisor(this.revisorForm.value).subscribe((resp) => {
      console.log(resp);
    });
  }
}
