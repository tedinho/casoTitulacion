import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  //Formulario Reactivo de login
  loginForm = new FormGroup({

    email: new FormControl(''),
    password: new FormControl('')

  });

  ngOnInit(): void {
  }

  login(){
    // console.warn(this.loginForm.value);
    this.authService.postLogin(this.loginForm.value)
      .subscribe(resp=>{
        localStorage.setItem('token',resp.token);
        this.router.navigate(['/home']);
        console.log(resp);
      },
      err=>{
        if(err.status = 400){
          console.log('Usuario Contraseña Incorrecta');
        }
        else{
          console.log(err);
        }
       });
  }


}
