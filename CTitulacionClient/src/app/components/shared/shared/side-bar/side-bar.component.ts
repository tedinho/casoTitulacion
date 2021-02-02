import { Component } from '@angular/core';
import { CarreraService } from 'src/app/Services/carrera.service';
import { DocenteCarreraService } from 'src/app/Services/docente-carrera.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent {

  dataUser: any;

  constructor(private authService: LoginService, private docenteCarreraServicio: DocenteCarreraService, private carreraServicio: CarreraService) {
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

  isMostrarMenuJunta() {
    if (this.isDocente()) {
      this.docenteCarreraServicio
        .buscarDocentesCarreraPorIdDocente(+localStorage.getItem('id'))
        .subscribe(
          docentes => {
            this.carreraServicio
              .buscarCarrera(docentes[0].carrera_id)
              .subscribe(
                carrera => {
                  if (carrera.id_usuario_junta == docentes[0].usuario_id) {
                    return true;
                  } else {
                    return false;
                  }
                }
              );
          }
        );
    }
    return false;
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

  isRevisor() {
    this.dataUser = this.authService.obtenerUsuario();
    return this.dataUser.role == 'Revisor';
  }

  isDocente() {
    this.dataUser = this.authService.obtenerUsuario();
    return this.dataUser.role == 'Docente';
  }

}
