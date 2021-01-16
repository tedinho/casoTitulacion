import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models';
import { EstudianteService } from 'src/app/Services/estudiante.service';
import { LoginService } from 'src/app/Services/login.service';

declare var Swal: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  existenMensajes: boolean;
  mensaje: string;
  dataUser: any;
  errorMessage: string;
  estudianteLogeado: any;
  mostrarPopDatos: boolean;

  constructor(private estudianteServicio: EstudianteService, private authService: LoginService) {

  }
  ngOnInit(): void {
    this.mostrarActualizar();
  }
  showSuccess() {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }

  mostrarActualizar() {
    if (this.isLogin()) {
      this.dataUser = this.authService.obtenerUsuario();
      if (this.dataUser.role == 'Estudiante') {
        this.estudianteServicio
          .buscarEstudiantePorId(+localStorage.getItem('id'))
          .subscribe(
            estudiante => {
              console.log(estudiante);
              if (estudiante == null) {
                var estudianteCrear = new Estudiante;
                estudianteCrear.id = +localStorage.getItem('id');
                estudianteCrear.fecha_ingreso = new Date();
                estudianteCrear.actualizar_datos = true;
                this.estudianteServicio
                  .guardarEstudiante(estudianteCrear)
                  .subscribe(
                    estudianteNuevo => {
                      this.estudianteLogeado = estudianteNuevo;
                      this.mostrarPopDatos = true;
                      document.getElementById("boton-abrir-datos").click();
                    }
                  );
              } else {
                this.estudianteLogeado = estudiante;
                if (this.estudianteLogeado.actualizar_datos) {
                  this.mostrarPopDatos = true;
                  document.getElementById("boton-abrir-datos").click();
                } else {
                  this.mostrarPopDatos = false;
                }
              }
            },
            error => this.errorMessage = <any>error
          );
      } else {
        this.mostrarPopDatos = false;
      }
    } else {
      this.mostrarPopDatos = false;
    }
  }

  isLogin() {
    return this.authService.estaLogeado();
  }


}
