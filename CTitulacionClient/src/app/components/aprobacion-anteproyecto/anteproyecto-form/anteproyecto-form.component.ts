import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Anteproyecto } from 'src/app/models/anteproyecto';
import { AnteproyectoService } from 'src/app/Services/anteproyecto.service';

@Component({
  selector: 'app-anteproyecto-form',
  templateUrl: './anteproyecto-form.component.html',
  styleUrls: ['./anteproyecto-form.component.css']
})

export class AnteproyectoFormComponent implements OnInit {
  anteproyecto:Anteproyecto;
  id: number;
  errorMessage: string;
  formularioAnteproyecto = new FormGroup({
    estado: new FormControl(''),
    fecha_inicio: new FormControl(''),
    fecha_fin: new FormControl(''),
    id_solicitud: new FormControl(1),
  });

  name = new FormControl('');

  constructor(private anteproyectoServicio:AnteproyectoService,private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.anteproyecto = new Anteproyecto();

    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
        if (this.id != null) {
          this.getAnteproyecto();
     }    
  });
  }

  guardar() {
    if (this.anteproyecto.id == null) {
      console.log(this.formularioAnteproyecto.value);
      this.anteproyectoServicio
        .guardarAnteproyecto(this.formularioAnteproyecto.value)
        .subscribe(
          anteproyecto => {
            console.log(anteproyecto);
            this.router.navigate(['/anteproyecto-list']);
          }
        );
    } else {
      this.anteproyectoServicio
        .actualizarAnteproyecto(this.formularioAnteproyecto.value, this.id)
        .subscribe(
          anteproyecto => {
            console.log(anteproyecto);
            this.router.navigate(['/anteproyecto-list']);
          },
          error => {
            this.errorMessage = error.json().errors;
          }
        );
    }
  }

  getAnteproyecto() {
    this.anteproyectoServicio
      .buscarAnteproyecto(this.id)
      .subscribe(
        anteproyecto => {
          this.formularioAnteproyecto = new FormGroup({
            id: new FormControl(null),
            estado: new FormControl(''),
            fecha_inicio: new FormControl(''),
            fecha_fin: new FormControl(''),
            id_solicitud: new FormControl(1),
          });
          console.log(anteproyecto);
          this.anteproyecto = anteproyecto;
          this.formularioAnteproyecto.setValue(anteproyecto);
        },
        error => this.errorMessage = <any>error
      );
  }
}
