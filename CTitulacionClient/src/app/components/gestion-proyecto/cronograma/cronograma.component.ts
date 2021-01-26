import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { GestionProyecto } from 'src/app/models/gestion-proyecto';
import { GestionProyectoService } from 'src/app/Services/gestion-proyecto.service';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})

export class CronogramaComponent implements OnInit {
  gestionProyecto: GestionProyecto;
  id: number;
  errorMessage: string;
  gestionProyectos: GestionProyecto[];
  txtNombre: string;
  formularioGestionProyecto = new FormGroup({
    fecha: new FormControl(''),
    asunto: new FormControl(''),
  });

  name = new FormControl();

  constructor(private GestionProyectoServicio: GestionProyectoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.gestionProyecto = new GestionProyecto();
    this.txtNombre = "";
    this.getCronogramas();
  }

  exit() {
    location.reload();
  }

  guardar() {
    if (this.gestionProyecto.id == null) {
      console.log(this.formularioGestionProyecto.value);
      this.GestionProyectoServicio
        .guardarCronograma(this.formularioGestionProyecto.value)
        .subscribe(
          gestionProyecto => {
            console.log(gestionProyecto);
            this.formularioGestionProyecto.reset();
            this.getCronogramas();
          }
        );
    } else {
      this.GestionProyectoServicio
        .actualizarCronograma(this.formularioGestionProyecto.value, this.id)
        .subscribe(
          gestionProyecto => {
            console.log(gestionProyecto);
            this.router.navigate(['/cronograma']);
          },
          error => {
            this.errorMessage = error.json().errors;
          }
        );
    }
  }

  getCronogramas() {
    this.GestionProyectoServicio
      .getCronogramas(this.txtNombre)
      .subscribe(
        gestionProyecto => {
          this.gestionProyectos = gestionProyecto
        }, (error) => {
          console.log(error);
        }
      );
  }

  buscar() {
    this.getCronogramas();
  }


}
