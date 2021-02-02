import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitudProrroga } from 'src/app/models/solicitud-prorroga';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudProrrogaService } from 'src/app/Services/solicitud-prorroga.service';

@Component({
  selector: 'app-solicitud-prorroga',
  templateUrl: './solicitud-prorroga.component.html',
  styleUrls: ['./solicitud-prorroga.component.css'],

})

export class SolicitudProrrogaComponent implements OnInit {

  solicitudProrroga: SolicitudProrroga;
  id: number;
  solisPro: SolicitudProrroga[];
  errorMessage: string;
  isLoading: boolean = true;
  txtNombre: string;

  title = 'angulartoastr';
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  formadata;

  formularioSolicitudPro = new FormGroup({
    fecha: new FormControl(''),
    duracion: new FormControl(''),
    motivo: new FormControl(''),
    observacion: new FormControl(''),
  });

  name = new FormControl('');

  constructor(private formBuilder: FormBuilder, private solicitudProrrogaServicio: SolicitudProrrogaService) { }

  onClickSubmit(data) {
    if (this.formadata.invalid) {

      this.formadata.get('description').markAsTouched();

    }
  }

  show() {
    this.showModal = true;

  }

  hide() {
    this.showModal = false;
  }
  ngOnInit() {
    this.txtNombre = "";
    this.getSolicitudesProrrogas();

  }

  // getSolicitudesProrrogas() {
  //   this.solicitudProrrogaService
  //   .buscarSolicitudProrroga(this.id)
  //   .subscribe(
  //     solicitudProrroga => {
  //       this.formularioSolicitudPro = new FormGroup({
  //         id: new FormControl(null),
  //         fecha: new FormControl(''),
  //         duracion: new FormControl(''),
  //         motivo: new FormControl(''),
  //         observacion: new FormControl(''),
  //       });
  //       console.log(solicitudProrroga);
  //       this.solicitudProrroga = solicitudProrroga;
  //       this.formularioSolicitudPro.setValue(solicitudProrroga);
  //     },
  //     error => this.errorMessage = <any>error
  //   );
  // }

  getSolicitudesProrrogas(){
    this.solicitudProrrogaServicio
    .getSolicitudesProrrogas(this.txtNombre)
    .subscribe(
      prorrogas => {
        this.solisPro = prorrogas
      }, (error) => {
        console.log(error);
      }
    );
  }

  buscar() {
    this.getSolicitudesProrrogas();
  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.getSolicitudesProrrogas();

    if (this.registerForm.invalid) {
      return;
    }
    if (this.submitted) {
      this.showModal = false;
    }

  }


  getSolicitudes() {
    this.solicitudProrrogaServicio
      .getSolicitudesProrrogas(this.txtNombre)
      .subscribe(
        solicitudPro => {
          this.solisPro = solicitudPro
        }, (error) => {
          console.log(error);
        }
      );
  }

  findSolicitudProrroga(id): SolicitudProrroga {
    return this.solisPro.find(solicitudProrroga => solicitudProrroga.id === id);
  }

  // isUpdating(id): boolean {
  //   return this.findSolicitudProrroga(id).isUpdating;
  // }

  guardar() {
    if (this.solicitudProrroga.id == null) {
      console.log(this.formularioSolicitudPro.value);
      this.solicitudProrrogaServicio
        .guardarSolicitudProrroga(this.formularioSolicitudPro.value)
        .subscribe(
          anteproyecto => {
            console.log(anteproyecto);
            // this.router.navigate(['/solicitud-list']);
          }
        );
    } else {
      this.solicitudProrrogaServicio
        .actualizarSolicitudProrroga(this.formularioSolicitudPro.value, this.id)
        .subscribe(
          anteproyecto => {
            console.log(anteproyecto);
            // this.router.navigate(['/solicitud-list']);
          },
          error => {
            this.errorMessage = error.json().errors;
          }
        );
    }
  }

}