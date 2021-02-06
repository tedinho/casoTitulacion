import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Anteproyecto } from 'src/app/models/anteproyecto';
import { AnteproyectoService } from 'src/app/Services/anteproyecto.service';
import { DocenteCarreraService } from 'src/app/Services/docente-carrera.service';

@Component({
  selector: 'app-aprobacion-anteproyecto',
  templateUrl: './aprobacion-anteproyecto.component.html',
  styleUrls: ['./aprobacion-anteproyecto.component.css']
})
export class AprobacionAnteproyectoComponent implements OnInit {

  revisores: any;

  constructor(private anteproyectoServicio: AnteproyectoService, private docenteCarreraServicio: DocenteCarreraService) {
    this.anteproyectoServicio.obtenerRevisores().subscribe((respRev) => {
      console.log('');
    })
  }

  id: number;
  anteproyectos: Anteproyecto[];
  anteproyecto: any;
  mensaje: string;

  formAnteproyectoAprobado = new FormGroup({
    fecha_inicio: new FormControl(''),
    fecha_fin: new FormControl(''),
    revisor_id: new FormControl(''),
  });

  formAnteproyectoRechazado = new FormGroup({
    observacion: new FormControl(''),
  });

  ngOnInit(): void {
    this.getAntepro();
  }

  getAntepro() {
    this.docenteCarreraServicio
      .buscarDocentesCarreraPorIdDocente(+localStorage.getItem('id'))
      .subscribe(
        docentes => {
          this.anteproyectoServicio
            .buscarAnteproyectosPorAprobarPorIdCarrera(docentes[0].carrera_id)
            .subscribe(antepro => {
              console.log(antepro);
              this.anteproyectos = antepro;
            });
        }
      );
  }

  abrirPopRechazar(anteproyecto) {
    this.anteproyecto = anteproyecto;
    this.formAnteproyectoRechazado = new FormGroup({
      observacion: new FormControl(''),
    });
  }

  rechazarAnteproyecto() {
    this.anteproyecto.estado = 'R';
    this.anteproyecto.observacion = this.formAnteproyectoRechazado.get('observacion').value;
    this.anteproyectoServicio
      .actualizarAnteproyecto(this.anteproyecto, this.anteproyecto.id)
      .subscribe(
        soli => {
          this.mensaje = "Se rechazó correctamente el anteproyecto";
          this.anteproyecto = null;
          // this.getAntepro();
        }
      )
  }

  abrirPopApro(anteproyecto) {
    this.anteproyecto = anteproyecto;
  }

  aprobarAnteproyecto() {
    this.anteproyecto.estado = 'A';
    this.anteproyectoServicio
      .guardarAnteproyecto(this.formAnteproyectoAprobado.value)
      .subscribe(
        anteproyecto => {
          this.mensaje = "Se aprobo correctamente";
          console.log(anteproyecto);
          // this.getAntepro();
        }
      );
  }
}
