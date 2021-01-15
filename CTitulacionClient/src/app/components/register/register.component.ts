import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

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

  register()
  {
    this.authService.postRegister(this.registerForm.value)
      .subscribe(resp =>{        
        this.mensaje = resp.message;
        this.registerForm.reset();        
        this.existenMensajes = true;
      }, (errorServicio)=>{
        if(errorServicio.message == "Http failure response for http://localhost:8000/api/register: 0 Unknown Error"){
          this.mensaje = "Error con la conexión con el servidor, por favor contactese con el administrador";
        }      
        console.log(errorServicio);
        this.existenMensajes = true;
      });
  }

}
