import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

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
        console.log(resp);
        this.router.navigate(['/home']);
      }, (errorServer) => {
        console.log(errorServer);
      });
  }

  fom() {
    console.warn(this.loginForm.value);
  }


}