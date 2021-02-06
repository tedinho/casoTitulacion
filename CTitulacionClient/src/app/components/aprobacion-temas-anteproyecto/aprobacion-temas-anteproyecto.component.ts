import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Anteproyecto } from 'src/app/models';
import { TemaAnteproyecto } from 'src/app/models/tema-anteproyecto';
import { AnteproyectoService } from 'src/app/Services/anteproyecto.service';
import { CarreraService } from 'src/app/Services/carrera.service';
import { DocenteCarreraService } from 'src/app/Services/docente-carrera.service';
import { TemaAnteproyectoService } from 'src/app/Services/tema-anteproyecto.service';

@Component({
  selector: 'app-aprobacion-temas-anteproyecto',
  templateUrl: './aprobacion-temas-anteproyecto.component.html',
  styleUrls: ['./aprobacion-temas-anteproyecto.component.css']
})
export class AprobacionTemasAnteproyectoComponent implements OnInit {

  constructor(private docenteCarreraServicio: DocenteCarreraService, private temaAteproyectoServicio: TemaAnteproyectoService, private antePoryectoServicio: AnteproyectoService) { }

  id: number;
  temas: TemaAnteproyecto[];
  tema: any;
  mensaje: string;

  formularioNuevo = new FormGroup({
    fecha_inicio: new FormControl(''),
    fecha_fin: new FormControl(''),
  });


  formularioRechazo = new FormGroup({
    descripcion: new FormControl(''),
  });

  ngOnInit(): void {
    this.getTemas();
  }

  getTemas() {
    this.docenteCarreraServicio
      .buscarDocentesCarreraPorIdDocente(+localStorage.getItem('id'))
      .subscribe(
        docentes => {
          this.temaAteproyectoServicio
            .buscarTemasPorAprobarPorIdCarrera(docentes[0].carrera_id)
            .subscribe(tema => {
              console.log(tema);
              this.temas = tema;
            });
        }
      );
  }

  abrirPopRechazar(tema) {
    this.tema = tema;
    this.formularioRechazo = new FormGroup({
      descripcion: new FormControl(''),
    });
  }

  rechazarTema() {
    document.getElementById("loading-imagen").style.display = "block";
    this.tema.estado = 'R';
    this.tema.observacion = this.formularioRechazo.get('descripcion').value;
    delete this.tema.evidencia;
    delete this.tema.solicitud;
    this.temaAteproyectoServicio
      .actualizarTemaAnteproyecto(this.tema, this.tema.id)
      .subscribe(
        soli => {
          this.mensaje = "El tema se rechazó correctamente";
          this.tema = null;
          this.getTemas();
          document.getElementById("loading-imagen").style.display = "none";
        }
      );

  }

  abrirPopVerRequisitos(tema) {
    this.tema = tema;
  }

  aceptarTema() {
    document.getElementById("loading-imagen").style.display = "block";
    this.tema.estado = 'A';
    delete this.tema.evidencia;
    delete this.tema.solicitud;
    this.temaAteproyectoServicio
      .actualizarTemaAnteproyecto(this.tema, this.tema.id)
      .subscribe(
        soli => {
          let antePro = new Anteproyecto();
          antePro.fecha_inicio = this.formularioNuevo.get('fecha_inicio').value;
          antePro.fecha_fin = this.formularioNuevo.get('fecha_fin').value;
          antePro.tema_anteproyecto_id = this.tema.id;
          antePro.estado = 'C';
          this.antePoryectoServicio
            .guardarAnteproyecto(antePro)
            .subscribe(ante => {
              this.mensaje = "El Tema se aprobo correctamente y se creo el lapso del anteProyecto";
              this.tema = null;
              this.getTemas();
              document.getElementById("loading-imagen").style.display = "none";
            })
        }
      );
  }
}
