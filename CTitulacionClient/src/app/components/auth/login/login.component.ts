import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

declare var Swal:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private loginService: LoginService,
    private router: Router) { }

  //Formulario Reactivo de login
  loginForm = new FormGroup({

    email: new FormControl(''),
    password: new FormControl('')

  });


  login() {
    //console.warn(this.loginForm.value);
    this.loginService.login(this.loginForm.value)
      .subscribe(resp => {
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('rol', resp.data.rol);
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

  fom() {
    console.warn(this.loginForm.value);
  }


}