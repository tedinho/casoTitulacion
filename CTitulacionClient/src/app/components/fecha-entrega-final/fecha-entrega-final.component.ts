import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GestionProyectoService } from 'src/app/Services/gestion-proyecto.service';

declare var Swal: any;

@Component({
  selector: 'app-fecha-entrega-final',
  templateUrl: './fecha-entrega-final.component.html'
})
export class FechaEntregaFinalComponent {

  notaDocumento = new FormGroup({
    nota_archivo: new FormControl(''),

  });

  nombres: any;
  datos: Array<any> = [];


  constructor(private documento: GestionProyectoService) {

    this.documento.obtenerEstudiantes()
      .subscribe(respu => {
        this.nombres = respu;
        this.nombres.forEach(nombr => {
          this.documento.obtenerDocumento(nombr['id'])
            .subscribe(respu2 => {
              let i;
              for (i in respu2) {
                this.datos.push(respu2[i]);
              }
            });
        });

      });
  }

  guardarNota(user_id: any) {
    console.log(user_id);
    console.log(this.notaDocumento.value);
    this.documento.registrarNota(this.notaDocumento.value, user_id)
      .subscribe(resp => {
        Swal.fire({
          title: 'Registro exitoso!',
          text: resp['message'],
          icon: 'info',
          confirmButtonText: 'Ok'
        });
        this.notaDocumento.reset();
      }, (errorSrv) => {
        console.log(errorSrv);
      });
  }


}
