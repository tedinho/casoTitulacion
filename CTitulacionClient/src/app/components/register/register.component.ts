import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  //Formulario Reactivo de register
  registerForm = new FormGroup({

    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),

  });

  ngOnInit(): void {
  }

  register()
  {
    // console.warn(this.registerForm.value);
    this.authService.postRegister(this.registerForm.value)
      .subscribe(resp =>{
        console.log(resp);
      });
  }

}
