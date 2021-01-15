import { Component, OnInit } from '@angular/core';
import { Carrera } from '../models';
import { CarreraService } from '../Services/carrera.service';

@Component({
  selector: 'app-carrera-lista',
  templateUrl: './carrera-lista.component.html',
  styleUrls: ['./carrera-lista.component.css']
})
export class CarreraListaComponent implements OnInit {

  carreras: Carrera[];
  errorMessage: string;
  txtNombre: string;

  constructor(private carreraServicio: CarreraService) { }

  ngOnInit(): void {
    this.txtNombre = "";
    this.getCarreras();
  }

  getCarreras() {
    this.carreraServicio
      .getCarreras(this.txtNombre)
      .subscribe(
        carreras => {
          this.carreras = carreras
        }, (error) => {
          console.log(error);
        }
      );
  }

  buscar() {
    this.getCarreras();
  }

}
