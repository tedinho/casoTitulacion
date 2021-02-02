import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Solicitud } from '../../models';
import { EstudianteCarrera } from '../../models/estudiante_carrera';
import { CarreraRequisitoSolicitud } from '../../models/requisitos-carrera-solicitud';
import { CarreraRequisitoSolicitudService } from '../../Services/carrera-requisito-solicitud.service';
import { EstudianteCarreraService } from '../../Services/estudiante-carrera.service';
import { SolicitudService } from '../../Services/solicitud.service';

@Component({
  selector: 'app-estudiantes-solicitud',
  templateUrl: './estudiantes-solicitud.component.html',
  styleUrls: ['./estudiantes-solicitud.component.css']
})
export class EstudiantesSolicitudComponent implements OnInit {

  constructor(private estudianteCarreraServicio: EstudianteCarreraService, private carreraRequisitoSolicitudService: CarreraRequisitoSolicitudService, private solicitudServicio: SolicitudService) { }
  id: number;
  estudiantes: EstudianteCarrera[];
  requisitos: CarreraRequisitoSolicitud[];
  solicitud: Solicitud;
  mensaje: string;


  formularioRechazo = new FormGroup({
    descripcion: new FormControl(''),
  });


  ngOnInit(): void {
    this.getEstudiantes();
  }

  getEstudiantes() {
    this.id = +localStorage.getItem('id');
    this.estudianteCarreraServicio.buscarPorIdDocente(this.id)
      .subscribe(
        estu => {
          this.estudiantes = estu;
        }, error => {
          console.log(error);
        }
      );
  }

  abrirPopRechazar(estudiante) {
    estudiante.solicitudes.forEach(soli => {
      this.solicitud = soli;
      this.formularioRechazo = new FormGroup({
        descripcion: new FormControl(''),
      });
    });
  }

  rechazarSolicitud() {
    this.solicitud.estado = 'R';
    this.solicitud.observacion = this.formularioRechazo.get('descripcion').value;
    this.solicitudServicio
      .actualizarSolicitud(this.solicitud, this.solicitud.id)
      .subscribe(
        soli => {
          this.mensaje = "La Solicitud se rechazó correctamente";
          this.requisitos = [];
          this.solicitud = null;
          this.getEstudiantes();
        }
      );
  }

  abrirPopVerRequisitos(estudiante) {
    estudiante.solicitudes.forEach(soli => {
      this.solicitud = soli;
      this.getRequisitos(soli.id);
    });
  }

  getRequisitos(id: number) {
    this.carreraRequisitoSolicitudService.buscarCarreraRequisitoPorIdSolicitud(id)
      .subscribe(
        requi => {
          console.log(requi);
          this.requisitos = requi;
        }
      );
  }

  aceptarSolicitud() {
    this.solicitud.estado = 'A';
    this.solicitudServicio
      .actualizarSolicitud(this.solicitud, this.solicitud.id)
      .subscribe(
        soli => {
          this.mensaje = "La Solicitud se aprobo correctamente";
          this.requisitos = [];
          this.solicitud = null;
          this.getEstudiantes();
        }
      );
  }

}
