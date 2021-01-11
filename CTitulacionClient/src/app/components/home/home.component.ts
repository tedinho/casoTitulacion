import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Estudiante } from 'src/app/models';
import { ArchivosService } from 'src/app/Services/archivos.service';
import { AuthService } from 'src/app/Services/auth.service';
import { EstudianteService } from 'src/app/Services/estudiante.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  existenMensajes: boolean;
  mensaje: string;
  dataUser: any;
  errorMessage: string;
  estudianteLogeado: any;
  mostrarPopDatos: boolean;

  constructor(private archivos: ArchivosService, private estudianteServicio: EstudianteService, private authService: AuthService) {
    this.existenMensajes = false;
  }

  ngOnInit(): void {
    this.mostrarActualizar();
  }

  subirArchivosForm = new FormGroup({
    arch: new FormControl('')
  });

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.subirArchivosForm.get('arch').setValue(file);
    }
  }

  enviarArchivo() {
    const formData = new FormData();
    formData.append('file', this.subirArchivosForm.get('arch').value);

    this.archivos.enviarArchivo(formData)
      .subscribe((respu: any) => {
        this.mensaje = respu.message;
        this.existenMensajes = true;
      }, (errorServer) => {
        this.mensaje = errorServer;
        this.existenMensajes = true;
      });
  }

  mostrarActualizar() {
    console.log("entro");
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
