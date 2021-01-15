import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

@Component({
  selector: 'app-fecha-entrega-final',
  templateUrl: './fecha-entrega-final.component.html'
})
export class FechaEntregaFinalComponent {

  notaDocumento = new FormGroup({
    nota_archivo: new FormControl(''),

  });

  fechaEntrega = new FormGroup({
    fecha: new FormControl(''),

  });

  datos: Array<any> = [];
  nombres: any;



  constructor(private documento: GestionProyectoService) {

    this.documento.obtenerEstudiantes()
      .subscribe(respu => {
        this.nombres = respu;
        console.log(this.nombres);
        this.nombres.forEach(nombr => {
          this.documento.obtenerDocumento(nombr['id'])
            .subscribe(respu2 => {
              let i;
              for (i in respu2) {
                this.datos.push(respu2[i]);
              }
              console.log(this.datos);
            });
        });

      });


    //this.documento.obtenerUsuarioId(this.datos['id']);
  }

  guardarNota(user_id: any) {

    this.documento.registrarNota(this.notaDocumento.value, user_id)
      .subscribe(resp => {
        console.log(resp['message']);
        this.notaDocumento.reset();
      }, (errorSrv) => {
        console.log(errorSrv);
      });
  }

  guardarFecha(user_id: any) {
    console.warn(this.fechaEntrega.value);

    this.documento.registrarFechaEntrega(this.fechaEntrega.value, user_id)
      .subscribe(resp => {
        console.log(resp);
        this.fechaEntrega.reset();
      }, (errorSrv) => {
        console.log(errorSrv);
      });
  }

}
