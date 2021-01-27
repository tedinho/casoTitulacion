import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TemaAnteproyecto } from 'src/app/models/tema-anteproyecto';
import { AnteproyectoService } from 'src/app/Services/anteproyecto.service';

@Component({
  selector: 'app-anteproyecto-tema-form',
  templateUrl: './anteproyecto-tema-form.component.html',
  styleUrls: ['./anteproyecto-tema-form.component.css']
})
export class AnteproyectoTemaFormComponent implements OnInit {
  temaAnteproyecto:TemaAnteproyecto;
  id: number;
  errorMessage: string;
  formularioTemaAnteproyecto = new FormGroup({
    estado: new FormControl(''),
    tema: new FormControl(''),
    user_id: new FormControl('')
  });

  estado: string[];
  estudiantes: any;

  name = new FormControl('');
  
  constructor(private anteproyectoServicio:AnteproyectoService,private route:ActivatedRoute, private router: Router) {
    this.anteproyectoServicio.obtenerEstudiantes()
      .subscribe((resp: any) => {
        this.estudiantes = resp;
      }, (errorSrv) => {
        console.log(errorSrv);
      });
  }

  ngOnInit(): void {
    this.getEstado();
    this.temaAnteproyecto = new TemaAnteproyecto();
  }

  getEstado() {
    this.estado = ['Aprobado', 'Rechazado'];
  }

  guardar() {
    if (this.temaAnteproyecto.id == null) {
      console.log(this.formularioTemaAnteproyecto.value);
      this.anteproyectoServicio
        .guardarTemaAnteproyecto(this.formularioTemaAnteproyecto.value)
        .subscribe(
          temaAnteproyecto => {
            console.log(temaAnteproyecto);
            this.router.navigate(['/anteproyecto-list']);
          }
        );
    } else {
      this.anteproyectoServicio
        .actualizarTemaAnteproyecto(this.formularioTemaAnteproyecto.value, this.id)
        .subscribe(
          temaAnteproyecto => {
            console.log(temaAnteproyecto);
            this.router.navigate(['/anteproyecto-list']);
          },
          error => {
            this.errorMessage = error.json().errors;
          }
        );
    }
  }

  /* getAnteproyecto() {
    this.anteproyectoServicio
      .buscarAnteproyecto(this.id)
      .subscribe(
        temaAnteproyecto => {
          this.formularioTemaAnteproyecto = new FormGroup({
            id: new FormControl(null),
            estado: new FormControl(''),
            fecha_inicio: new FormControl(''),
            fecha_fin: new FormControl(''),
            observacion: new FormControl(''),
            id_solicitud: new FormControl(1),
          });
          console.log(temaAnteproyecto);
          this.temaAnteproyecto = temaAnteproyecto;
          this.formularioTemaAnteproyecto.setValue(temaAnteproyecto);
        },
        error => this.errorMessage = <any>error
      );
  } */

}
