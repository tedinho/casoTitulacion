import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitudProrroga } from 'src/app/models/solicitud-prorroga';
import { SolicitudProrrogaService } from 'src/app/Services/solicitud-prorroga.service';

@Component({
  selector: 'app-solicitud-prorroga',
  templateUrl: './solicitud-prorroga.component.html',
  styleUrls: ['./solicitud-prorroga.component.css'],

})

export class SolicitudProrrogaComponent implements OnInit {


  solisPro: SolicitudProrroga[];
  errorMessage: string;
  isLoading: boolean = true;
  txtNombre: string;

  title = 'angulartoastr';
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  formadata;

  constructor(private formBuilder: FormBuilder, private solicitudProrrogaService: SolicitudProrrogaService) { }

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
    this.registerForm = this.formBuilder.group({
      fecha: ['', [Validators.required]],
      motivo: ['', [Validators.required, Validators.minLength(100)]]
    });

    this.formadata = this.formBuilder.group({
      observacion: ['', [Validators.required,
      Validators.maxLength(400), Validators.minLength(100)]]
    });

    this.txtNombre = "";
    this.getSolicitudesProrroga();


  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.getSolicitudesProrroga();

    if (this.registerForm.invalid) {
      return;
    }
    if (this.submitted) {
      this.showModal = false;
    }

  }


  getSolicitudesProrroga() {
    this.solicitudProrrogaService
      .getSolicitudesProrroga(this.txtNombre)
      .subscribe(
        solisPro => {
          // this.solisPro = solisPro
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


}