import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CarreraRequisitoSolicitudService } from '../../Services/carrera-requisito-solicitud.service';
import { CarreraRequisitoService } from '../../Services/carrera-requisito.service';
import { Carrera, Estudiante, Solicitud } from '../../models';
import { EstudianteCarrera } from '../../models/estudiante_carrera';
import { CarreraRequisitoSolicitud } from '../../models/requisitos-carrera-solicitud';
import { CarreraService } from '../../Services/carrera.service';
import { EstudianteCarreraService } from '../../Services/estudiante-carrera.service';
import { EstudianteService } from '../../Services/estudiante.service';
import { LoginService } from '../../Services/login.service';
import { SolicitudService } from '../../Services/solicitud.service';
import { GestionProyectoService } from 'src/app/Services/gestion-proyecto.service';

@Component({
  selector: 'app-estudiante-carrera',
  templateUrl: './estudiante-carrera.component.html',
  styleUrls: ['./estudiante-carrera.component.css']
})
export class EstudianteCarreraComponent implements OnInit {

  carreras: Carrera[];
  id: number;
  modalidades: string[];
  requisitos: CarreraRequisitoSolicitud[];
  solicitud: Solicitud;

  constructor(private archivos: GestionProyectoService, private carreraRequisitoSolicitudService: CarreraRequisitoSolicitudService, private carreraRequisitoService: CarreraRequisitoService, private solicitudServicio: SolicitudService, private estudianteServicio: EstudianteService, private carreraServicio: CarreraService, private estudianteCarreraServicio: EstudianteCarreraService, private router: Router, private authService: LoginService) { }

  dataUser: any;
  estudianteLogeado: any;
  mostrarPopDatos: boolean;
  errorMessage: string;
  mostrarForm: boolean = true;
  estudianteCarrera: EstudianteCarrera;
  mensajeEnvio: string;

  formularioEstudianteCarrera = new FormGroup({
    carrera_id: new FormControl(),
    modalidad: new FormControl(),
    fecha_comienzo: new FormControl(''),
    fecha_final: new FormControl(''),
    estudiante_id: new FormControl()
  });

  cargarDocumento = new FormGroup({
    arch: new FormControl(''),
    tipo_archivo: new FormControl('requisito'),
    email: new FormControl(localStorage.getItem('email')),
  });

  ngOnInit(): void {
    this.getEstudianteCarrera();
    this.getCarreras();
    this.getModalidades();
    this.mostrarActualizar();
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.cargarDocumento.get('arch').setValue(file);
    }
  }

  guardarEvidencia(crs: CarreraRequisitoSolicitud) {
    const formData = new FormData();
    formData.append('file', this.cargarDocumento.get('arch').value);
    formData.append('tipo_archivo', this.cargarDocumento.get('tipo_archivo').value);
    formData.append('email', this.cargarDocumento.get('email').value);
    formData.append('validar', 'false');
    const documentes = this.cargarDocumento.value;
    formData.append('nombre_archivo', documentes['arch']['name']);
    this.archivos.cargaDocumento(formData)
      .subscribe(respu => {
        this.cargarDocumento.reset();
        let stringJson = JSON.stringify(respu);
        let stringObject = JSON.parse(stringJson);
        crs.evidencia_id = stringObject.id;
        delete crs.requisito;
        delete crs.evidencia;
        this.carreraRequisitoSolicitudService.actualizarCarreraRequisitoSolicitud(crs, crs.id)
          .subscribe(crsAct => {
            this.getRequisitos();
          });
      }, (errorServer) => {
        this.cargarDocumento.reset();
        console.log(errorServer);
      });
  }

  getRequisitos() {

    this.solicitudServicio.buscarSolicitudPorIdEstudianteCarrera(this.estudianteCarrera.id)
      .subscribe(
        solicitudes => {
          this.solicitud = solicitudes[0];
          this.carreraRequisitoSolicitudService.buscarCarreraRequisitoPorIdSolicitud(this.solicitud.id)
            .subscribe(
              requi => {
                console.log(requi);
                this.requisitos = requi;
              }
            );
        }
      );
  }

  enviarSolicitud() {
    this.solicitud.estado = 'E';
    this.solicitud.fecha_envio = new Date();
    this.solicitudServicio
      .actualizarSolicitud(this.solicitud, this.solicitud.id)
      .subscribe(soli => {
        this.solicitud = soli as Solicitud;
        this.mensajeEnvio = "Se ha enviado la solicitud correctamente";
      });
  }

  getEstudianteCarrera() {
    this.estudianteCarreraServicio
      .buscarEstudianteCarreraPorIdEstudiante(+localStorage.getItem('id'))
      .subscribe(
        (estudiantesCarrera: any) => {
          console.log(estudiantesCarrera);
          if (estudiantesCarrera && estudiantesCarrera.length > 0) {
            this.mostrarForm = false;
            this.estudianteCarrera = estudiantesCarrera[0];
            this.getRequisitos();
          }
        }
      );
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
    if (this.formularioEstudianteCarrera.get('id') != null) {
      this.estudianteCarreraServicio.actualizarEstudianteCarrera(this.formularioEstudianteCarrera.value, this.formularioEstudianteCarrera.get('id').value)
        .subscribe(estuCarrera => {
          this.mostrarForm = false;
          this.estudianteCarrera = estuCarrera as EstudianteCarrera;
        });
    } else {
      this.formularioEstudianteCarrera.get('estudiante_id').setValue(+localStorage.getItem('id'));
      this.estudianteCarreraServicio
        .guardarEstudianteCarrera(this.formularioEstudianteCarrera.value)
        .subscribe(
          estuCarrera => {
            this.estudianteCarrera = estuCarrera as EstudianteCarrera;
            this.mostrarForm = false;
            var solicitud = new Solicitud;
            solicitud.fecha_creacion = new Date();
            solicitud.estado = 'C';
            solicitud.estudiante_carrera_id = this.estudianteCarrera.id;
            console.log(this.estudianteCarrera);
            this.solicitudServicio
              .guardarSolicitud(solicitud)
              .subscribe(soli => {
                console.log(soli);
                this.carreraRequisitoService.buscarCarreraRequisitoPorIdCarrera(this.estudianteCarrera.carrera_id)
                  .subscribe(requisitos => {
                    let solicit = soli as Solicitud;
                    for (let r of requisitos) {
                      var requiCrreraSoli = new CarreraRequisitoSolicitud;
                      requiCrreraSoli.cumple = false;
                      requiCrreraSoli.evidencia_id = null;
                      requiCrreraSoli.requisito_id = r.id;
                      requiCrreraSoli.solicitud_id = solicit.id;
                      this.carreraRequisitoSolicitudService
                        .guardarCarreraRequisitoSolicitud(requiCrreraSoli)
                        .subscribe(carrReSoli => {
                          console.log(carrReSoli);
                        });
                    }
                  });
              });
          }
        );
    }
  }

  mostrarActualizar() {
    if (this.isLogin()) {
      this.dataUser = this.authService.obtenerUsuario();
      if (this.dataUser.role == 'Estudiante') {
        this.estudianteServicio
          .buscarEstudiantePorId(+localStorage.getItem('id'))
          .subscribe(
            estudiante => {
              console.log(estudiante);
              if (estudiante == null) {
                var estudianteCrear = new Estudiante;
                estudianteCrear.id = +localStorage.getItem('id');
                estudianteCrear.fecha_ingreso = new Date();
                estudianteCrear.actualizar_datos = true;
                this.estudianteServicio
                  .guardarEstudiante(estudianteCrear)
                  .subscribe(
                    estudianteNuevo => {
                      this.estudianteLogeado = estudianteNuevo;
                      this.mostrarPopDatos = true;
                      document.getElementById("boton-abrir-datos").click();
                    }
                  );
              } else {
                this.estudianteLogeado = estudiante;
                if (this.estudianteLogeado.actualizar_datos) {
                  this.mostrarPopDatos = true;
                  document.getElementById("boton-abrir-datos").click();
                } else {
                  this.mostrarPopDatos = false;
                }
              }
            },
            error => this.errorMessage = <any>error
          );
      } else {
        this.mostrarPopDatos = false;
      }
    } else {
      this.mostrarPopDatos = false;
    }
  }

  isLogin() {
    return this.authService.estaLogeado();
  }

}