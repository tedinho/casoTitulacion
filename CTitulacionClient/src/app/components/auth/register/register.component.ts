import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/auth/register.service';

declare var Swal: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  constructor(private authService: RegisterService) { }

  //Formulario Reactivo de register
  registerForm = new FormGroup({

    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password_repeat: new FormControl('')

  });

  register() {
    this.authService.postRegister(this.registerForm.value)
      .subscribe(resp => {
        this.registerForm.reset();
        Swal.fire({
          title: 'Registro exitoso!',
          text: 'Se ha registrado de forma exitosa, por favor inicia sesión',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      }, (errorServicio) => {
        Swal.fire({
          title: 'Registro fallido!',
          text: 'No se a podido registrar, es posible que el usuario ya tenga una cuenta asignada',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  }

}