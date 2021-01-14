import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/auth/register.service';

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
        console.log(resp);
      }, (errorServicio) => {
        console.log(errorServicio);
      });
  }

}