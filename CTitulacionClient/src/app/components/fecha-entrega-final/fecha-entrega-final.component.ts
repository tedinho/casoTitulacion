import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

@Component({
  selector: 'app-fecha-entrega-final',
  templateUrl: './fecha-entrega-final.component.html'
})
export class FechaEntregaFinalComponent {

  datos: any;
  nombres: any;

  fechaEntrega = new FormGroup({
    fechaEntrega: new FormControl('')
  });

  constructor(private documento: GestionProyectoService) {

    this.documento.obtenerDocumento()
      .subscribe(respu => {   
        this.datos = respu;                               
        this.documento.obtenerUsuarioId(this.datos[0]['user_id'])    
          .subscribe(respu2 =>{            
            this.nombres = respu2;
            console.log(this.nombres);
          });                   
      }, (errorSer) => {
        console.log(errorSer);
      });

      

      //this.documento.obtenerUsuarioId(this.datos['id']);
  }

  guardarFecha() {
    //console.warn(this.fechaEntrega.value);
    this.documento.registrarFechaEntrega(this.fechaEntrega.value)
      .subscribe(resp => {
        console.log(resp);
      }, (errorSrv) => {
        console.log(errorSrv);
      });
  }

}
