import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { LoginService } from 'src/app/Services/login.service';
import { UsuarioService } from 'src/app/Services/usuario.service';
declare var Swal: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  existenMensajes: boolean;
  mensaje: string;

  constructor(private router: Router, private loginService: LoginService) {
    this.existenMensajes = false;
  }

  //Formulario Reactivo de login
  loginForm = new FormGroup({

    email: new FormControl(''),
    password: new FormControl('')

  });


  login() {
    // console.warn(this.loginForm.value);
    this.loginService.login(this.loginForm.value)
      .subscribe(resp => {
        console.log(resp.data);
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('rol', resp.data.rol);
        localStorage.setItem('username', resp.data.name);
        localStorage.setItem('id', resp.data.id);
        localStorage.setItem('email', resp.data.email);
        this.router.navigate(['/home']);
      }, (errorServer) => {
        Swal.fire({
          title: 'Error!',
          text: 'El usuario o contraseña no coinciden',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  }

}
