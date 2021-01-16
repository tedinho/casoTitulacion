import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent {

  dataUser: any;

  constructor(private authService: LoginService) {
    console.log("sdfs");
    this.obtenerDatos();
  }

  obtenerDatos() {
    if (this.isLogin()) {
      this.dataUser = this.authService.obtenerUsuario();
    }
    else {
      this.dataUser = {};
    }
  }

  isLogin() {
    return this.authService.estaLogeado();
  }

  isEstudiante() {
    this.dataUser = this.authService.obtenerUsuario();
    return this.dataUser.role == 'Estudiante';
  }

  isAdministrador() {
    this.dataUser = this.authService.obtenerUsuario();
    return this.dataUser.role == 'Administrator';
  }

}
