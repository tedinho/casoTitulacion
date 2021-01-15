import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent {

  dataUser: any;

  constructor(private authService: LoginService) { 
    this.obtenerDatos();
  }

  obtenerDatos(){
    if(this.isLogin()){
      this.dataUser = this.authService.obtenerUsuario();           
    }
    else{
      this.dataUser = {};
    }
  }

  isLogin(){
    return this.authService.estaLogeado();
  }

}
