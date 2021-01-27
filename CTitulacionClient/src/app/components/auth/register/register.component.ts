import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

declare var Swal: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  existenMensajes: boolean;
  mensaje: string;

  constructor(private authService: AuthService) {
    this.existenMensajes = false;
  }

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
