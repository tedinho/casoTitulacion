import { Component, OnInit } from '@angular/core';
import { ProyectoTitulacion } from 'src/app/models';
import { ProyectoTitulacionService } from 'src/app/Services/proyecto-titulacion.service';

@Component({
  selector: 'app-proyecto-titulacion-form',
  templateUrl: './proyecto-titulacion-form.component.html',
  styles: [
  ]
})
export class ProyectoTitulacionFormComponent implements OnInit {

  proyectoTitulacion: ProyectoTitulacion[];
  errorMessage: string;
  txtNombre: string;

  constructor(private proyectoTitulacionServicio: ProyectoTitulacionService) { }

  ngOnInit(): void {
    this.txtNombre = "";
  }

  getProyectoTitulacion(){
    this.proyectoTitulacionServicio
    .getProyectosTitulaciones(this.txtNombre)
    .subscribe(
      proyectoTitulacion => {
        this.proyectoTitulacion = proyectoTitulacion
      }, (error) => {
        console.log(error);
      }
    );
  }

  buscar(){
    this.getProyectoTitulacion();
  }

  aceptarProyectoTitulacion(id:any){
    this.proyectoTitulacionServicio
    .aceptarProyectoTitulacion(this.proyectoTitulacion,id)
    .subscribe(
      proyectoTitu => {
        this.getProyectoTitulacion();
      }, (error) => {
        console.log(error);
      }
    );
  }

  rechazarProyectoTitulacion(id:any){
    this.proyectoTitulacionServicio
    .aceptarProyectoTitulacion(this.proyectoTitulacion,id)
    .subscribe(
      proyectoTitu => {
        this.getProyectoTitulacion();
      }, (error) => {
        console.log(error);
      }
    );
  }

  anularProyectoTitulacion(id:any){
    this.proyectoTitulacionServicio
    .aceptarProyectoTitulacion(this.proyectoTitulacion,id)
    .subscribe(
      proyectoTitu => {
        this.getProyectoTitulacion();
      }, (error) => {
        console.log(error);
      }
    );
  }


}