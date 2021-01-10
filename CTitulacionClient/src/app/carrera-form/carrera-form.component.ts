import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Carrera } from '../models/carrera';
import { CarreraService } from '../Services/carrera.service';

@Component({
  selector: 'app-carrera-form',
  templateUrl: './carrera-form.component.html',
  styleUrls: ['./carrera-form.component.css']
})

export class CarreraFormComponent implements OnInit {
  carrera:Carrera;
  id: number;
  errorMessage: string;
  formularioCarrera = new FormGroup({
    nombre: new FormControl(''),
    codigo: new FormControl(''),
    tipo_carrera: new FormControl('Hola'),
    estado: new FormControl('A'),
    id_coordinador: new FormControl(1),
  });

  name = new FormControl('');

  constructor(private carreraServicio:CarreraService,private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.carrera = new Carrera();

    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
        if (this.id != null) {
          this.getCarrera();
     }    
  });
  }


  guardar() {
    if (this.carrera.id == null) {
      console.log(this.formularioCarrera.value);
      this.carreraServicio
        .guardarCarrera(this.formularioCarrera.value)
        .subscribe(
          carrera => {
            console.log(carrera);
            this.router.navigate(['/carrera-lista']);
          }
        );
    } else {
      this.carreraServicio
        .actualizarCarrera(this.formularioCarrera.value, this.id)
        .subscribe(
          carrera => {
            console.log(carrera);
            this.router.navigate(['/carrera-lista']);
          },
          error => {
            this.errorMessage = error.json().errors;
          }
        );
    }
  }

  getCarrera() {
    this.carreraServicio
      .buscarCarrera(this.id)
      .subscribe(
        carrera => {
          this.formularioCarrera = new FormGroup({
            id: new FormControl(null),
            nombre: new FormControl(''),
            codigo: new FormControl(''),
            tipo_carrera: new FormControl('Hola'),
            estado: new FormControl('A'),
            id_coordinador: new FormControl(1),
          });
          console.log(carrera);
          this.carrera = carrera;
          this.formularioCarrera.setValue(carrera);
        },
        error => this.errorMessage = <any>error
      );
  }

}
