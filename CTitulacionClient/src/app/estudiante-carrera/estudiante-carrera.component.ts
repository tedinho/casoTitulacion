import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Carrera } from '../models';
import { CarreraService } from '../Services/carrera.service';
import { EstudianteCarreraService } from '../Services/estudiante-carrera.service';

@Component({
  selector: 'app-estudiante-carrera',
  templateUrl: './estudiante-carrera.component.html',
  styleUrls: ['./estudiante-carrera.component.css']
})
export class EstudianteCarreraComponent implements OnInit {

  carreras: Carrera[];
  id: number;
  modalidades: string[];

  constructor(private carreraServicio: CarreraService, private estudianteCarreraServicio: EstudianteCarreraService, private router: Router) { }

  formularioEstudianteCarrera = new FormGroup({
    carrera_id: new FormControl(),
    modalidad: new FormControl(),
    fecha_comienzo: new FormControl(''),
    fecha_final: new FormControl(''),
    estudiante_id: new FormControl()
  });

  ngOnInit(): void {
    this.getCarreras();
    this.getModalidades();
  }

  getModalidades() {
    this.modalidades = ['Complexivo', 'Tesis'];
  }

  getCarreras() {
    this.carreraServicio
      .getCarreras(null)
      .subscribe(
        carreras => {
          this.carreras = carreras
        }, (error) => {
          console.log(error);
        }
      );
  }

  guardar() {
    this.formularioEstudianteCarrera.get('estudiante_id').setValue(+localStorage.getItem('id'));
    console.log(this.formularioEstudianteCarrera.value);
    this.estudianteCarreraServicio
      .guardarEstudianteCarrera(this.formularioEstudianteCarrera.value)
      .subscribe(
        estuCarrera => {
          this.router.navigate(['/home']);
        }
      );
  }

}
