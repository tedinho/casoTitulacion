import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  //Formulario Reactivo de login
  loginForm = new FormGroup({

    email: new FormControl(''),
    password: new FormControl('')

  });

  ngOnInit(): void {
  }

  login(){
    //console.warn(this.loginForm.value);
    this.authService.postLogin(this.loginForm.value)
      .subscribe(resp=>{
        console.log(resp);
      });
  }


}
