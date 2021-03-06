import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  existenMensajes: boolean;
  mensaje: string;

  constructor(private authService: AuthService, private router: Router) {
    this.existenMensajes = false;
   }

  //Formulario Reactivo de login
  loginForm = new FormGroup({

    email: new FormControl(''),
    password: new FormControl('')

  });


  login(){
    // console.warn(this.loginForm.value);
    this.authService.postLogin(this.loginForm.value)
      .subscribe(resp=>{
        console.log(resp.data);
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('rol', resp.data.rol);
        localStorage.setItem('username', resp.data.name);  
        localStorage.setItem('id', resp.data.id);        
        this.router.navigate(['/home']);        
      }, (errorServer) =>{
        this.mensaje = errorServer;
        console.log(errorServer);
        this.existenMensajes = true;
      });
  }


}
