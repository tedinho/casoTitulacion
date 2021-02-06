import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EstudianteCarrera } from 'src/app/models/estudiante_carrera';
import { TemaAnteproyecto } from 'src/app/models/tema-anteproyecto';
import { Anteproyecto } from 'src/app/models/anteproyecto';
import { EstudianteCarreraService } from 'src/app/Services/estudiante-carrera.service';
import { TemaAnteproyectoService } from 'src/app/Services/tema-anteproyecto.service';
import { GestionProyectoService } from 'src/app/Services/gestion-proyecto.service';
import { AnteproyectoService } from 'src/app/Services/anteproyecto.service';
import { SolicitudService } from 'src/app/Services/solicitud.service';

@Component({
  selector: 'app-anteproyecto',
  templateUrl: './anteproyecto.component.html',
  styleUrls: ['./anteproyecto.component.css']
})
export class AnteproyectoComponent implements OnInit {

  anteproyecto: Anteproyecto;
  estudianteCarrera: EstudianteCarrera;
  temaAnteproyecto: TemaAnteproyecto;
  formAnteproyecto: FormGroup = new FormGroup({
    estado: new FormControl('C'),
    evidencia_id: new FormControl(),
    tema_ante_proyecto_id: new FormControl(),
    cargarDocumento: new FormGroup({
      arch: new FormControl(''),
      tipo_archivo: new FormControl('requisito'),
      email: new FormControl(localStorage.getItem('email'))
    })
  });


  mensajeAntepro: string;

  constructor(private AnteproyectoServicio: AnteproyectoService, private temaAnteproyectoServicio: TemaAnteproyectoService, private estudianteCarreraServicio: EstudianteCarreraService, private archivos: GestionProyectoService, private solicitudServicio: SolicitudService, private EstudianteCarreraServicio: EstudianteCarreraService) { }

  ngOnInit(): void {
    this.getAnteproyecto();
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formAnteproyecto.get('cargarDocumento').get('arch').setValue(file);
    }
  }

  getAnteproyecto() {
    this.EstudianteCarreraServicio
      .buscarEstudianteCarreraPorIdEstudiante(+localStorage.getItem('id'))
      .subscribe(
        estuCa => {
          this.solicitudServicio
            .buscarSolicitudPorIdEstudianteCarrera(estuCa[0].id)
            .subscribe(
              solicitud => {
                this.temaAnteproyectoServicio
                  .buscarTemaAnteproyectoPorIdSolicitud(solicitud[0].id)
                  .subscribe(
                    tema => {
                      this.temaAnteproyecto = tema[0];
                      this.AnteproyectoServicio
                        .buscarAnteproyectoPorIdTema(tema[0].id)
                        .subscribe(
                          ante => {
                            this.anteproyecto = ante[0];
                          }
                        );
                    }
                  );
              }
            );
        }
      );
  }

  guardarAnteproyecto() {
    const formData = new FormData();
    formData.append('file', this.formAnteproyecto.get('cargarDocumento').get('arch').value);
    formData.append('tipo_archivo', this.formAnteproyecto.get('cargarDocumento').get('tipo_archivo').value);
    formData.append('email', this.formAnteproyecto.get('cargarDocumento').get('email').value);
    formData.append('validar', 'false');
    const documentes = this.formAnteproyecto.get('cargarDocumento').value;
    formData.append('nombre_archivo', documentes['arch']['name']);
    this.archivos.cargaDocumento(formData)
      .subscribe(respu => {
        console.log(respu);
        this.formAnteproyecto.get('cargarDocumento').reset();
        let stringJson = JSON.stringify(respu);
        let stringObject = JSON.parse(stringJson);
        this.anteproyecto.evidencia_id = stringObject.id;
        this.anteproyecto.estado = 'E';
        let ante: any = this.anteproyecto;
        delete ante.evidencia;
        this.AnteproyectoServicio.actualizarAnteproyecto(ante, this.anteproyecto.id)
          .subscribe(
            antepro => {
              this.anteproyecto = antepro as Anteproyecto;
              this.mensajeAntepro = "Se ha enviado correctamente el documento";
            }
          );
      })
  }

  enviarAnteproyecto() {
    this.formAnteproyecto.get('estado').setValue('E');
    this.guardarAnteproyecto();
  }

}
