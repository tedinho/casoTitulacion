import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ObservacionAnteproyecto } from 'src/app/models/observacion-anteproyecto';
import { ObservacionAnteproyectoService } from 'src/app/Services/observacion-anteproyecto.service';

@Component({
  selector: 'app-observacion-anteproyecto',
  templateUrl: './observacion-anteproyecto.component.html',
  styleUrls: ['./observacion-anteproyecto.component.css']
})
export class ObservacionAnteproyectoComponent implements OnInit {
  observacionAnteproyecto:ObservacionAnteproyecto;
  id: number;
  errorMessage: string;
  formularioObservacionAnteproyecto = new FormGroup({
    observacion: new FormControl(''),
    fecha: new FormControl(''),
    id_anteproyecto: new FormControl(1),
  });

  name = new FormControl('');

  constructor(private observacionAnteproyectoServicio:ObservacionAnteproyectoService,private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.observacionAnteproyecto = new ObservacionAnteproyecto();

    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
        if (this.id != null) {
          this.getObservacionAnteproyecto();
     }    
    });
  }

  guardar() {
    if (this.observacionAnteproyecto.id == null) {
      console.log(this.formularioObservacionAnteproyecto.value);
      this.observacionAnteproyectoServicio
        .guardarObservacionAnteproyecto(this.formularioObservacionAnteproyecto.value)
        .subscribe(
          observacionAnteproyecto => {
            console.log(observacionAnteproyecto);
            this.router.navigate(['/anteproyecto-list']);
          }
        );
    } else {
      this.observacionAnteproyectoServicio
        .actualizarObservacionAnteproyecto(this.formularioObservacionAnteproyecto.value, this.id)
        .subscribe(
          observacionAnteproyecto => {
            console.log(observacionAnteproyecto);
            this.router.navigate(['/anteproyecto-list']);
          },
          error => {
            this.errorMessage = error.json().errors;
          }
        );
    }
  }

  getObservacionAnteproyecto() {
    this.observacionAnteproyectoServicio
      .buscarObservacionAnteproyecto(this.id)
      .subscribe(
        observacionAnteproyecto => {
          this.formularioObservacionAnteproyecto = new FormGroup({
            id: new FormControl(null),
            observacion: new FormControl(''),
            fecha: new FormControl(''),
            id_anteproyecto: new FormControl(1),
          });
          console.log(observacionAnteproyecto);
          this.observacionAnteproyecto = observacionAnteproyecto;
          this.formularioObservacionAnteproyecto.setValue(observacionAnteproyecto);
        },
        error => this.errorMessage = <any>error
      );
  }

}
