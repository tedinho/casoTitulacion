import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Solicitud } from 'src/app/models';
import { EstudianteCarrera } from 'src/app/models/estudiante_carrera';
import { TemaAnteproyecto } from 'src/app/models/tema-anteproyecto';
import { EstudianteCarreraService } from 'src/app/Services/estudiante-carrera.service';
import { GestionProyectoService } from 'src/app/Services/gestion-proyecto.service';
import { SolicitudService } from 'src/app/Services/solicitud.service';
import { TemaAnteproyectoService } from 'src/app/Services/tema-anteproyecto.service';

@Component({
  selector: 'app-tema-anteproyecto',
  templateUrl: './tema-anteproyecto.component.html',
  styleUrls: ['./tema-anteproyecto.component.css']
})
export class TemaAnteproyectoComponent implements OnInit {

  temaAnteProyecto: TemaAnteproyecto;
  estudianteCarrera: EstudianteCarrera;
  solicitud: Solicitud;
  formTemaAnteproyecto: FormGroup;

  cargarDocumento = new FormGroup({
    arch: new FormControl(''),
    tipo_archivo: new FormControl('requisito'),
    email: new FormControl(localStorage.getItem('email'))
  });


  constructor(private temaAnteproyectoService: TemaAnteproyectoService, private solicitudServicio: SolicitudService, private estudianteCarreraServicio: EstudianteCarreraService, private archivos: GestionProyectoService) { }

  ngOnInit(): void {
    this.getTemaAnteProyecto();
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.cargarDocumento.get('arch').setValue(file);
    }
  }

  getTemaAnteProyecto() {
    this.estudianteCarreraServicio
      .buscarEstudianteCarreraPorIdEstudiante(+localStorage.getItem('id'))
      .subscribe(
        (estudiantes: any) => {
          if (estudiantes && estudiantes.length > 0) {
            this.estudianteCarrera = estudiantes[0];
            this.temaAnteproyectoService
              .buscarTemaAnteproyectoPorIdEstudiante(+localStorage.getItem('id'))
              .subscribe(
                (temas: any) => {
                  if (temas && temas.length > 0) {
                    this.temaAnteProyecto = temas[0];
                    this.formTemaAnteproyecto = new FormGroup({
                      id: new FormControl(),
                      estado: new FormControl('C'),
                      nombre: new FormControl(''),
                      evidencia_id: new FormControl(),
                      solicitud_id: new FormControl()
                    });
                    this.formTemaAnteproyecto.setValue(this.temaAnteProyecto);
                  } else {
                    this.solicitudServicio
                      .buscarSolicitudPorIdEstudianteCarrera(this.estudianteCarrera.id)
                      .subscribe(
                        (solitudes: any) => {
                          if (solitudes && solitudes.length > 0) {
                            this.solicitud = solitudes[0];
                            if (this.solicitud.estado == 'A') {
                              this.formTemaAnteproyecto = new FormGroup({
                                estado: new FormControl('C'),
                                nombre: new FormControl(''),
                                evidencia_id: new FormControl(),
                                solicitud_id: new FormControl(this.solicitud.id)
                              });
                            }
                          }
                        }
                      );
                  }
                }
              );
          }
        }
      );
  }

  guardarTema() {
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
        this.formTemaAnteproyecto.get('evidencia_id').setValue(stringObject.id);
        if (this.temaAnteProyecto.id == null) {
          this.temaAnteproyectoService
            .guardarTema(this.formTemaAnteproyecto.value)
            .subscribe(
              tema => {
                this.temaAnteProyecto = tema as TemaAnteproyecto;
              }
            );
        } else {
          this.temaAnteproyectoService.actualizarTemaAnteproyecto(this.formTemaAnteproyecto.value, this.temaAnteProyecto.id)
            .subscribe(
              tema => {
                this.temaAnteProyecto = tema as TemaAnteproyecto;
              }
            );
        }
      })
  }

  enviarAAprobacionTema() {
    this.formTemaAnteproyecto.get('estado').setValue('E');
    this.guardarTema();
  }


}
