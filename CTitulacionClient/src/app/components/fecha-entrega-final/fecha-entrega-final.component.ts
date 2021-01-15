import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

@Component({
  selector: 'app-fecha-entrega-final',
  templateUrl: './fecha-entrega-final.component.html'
})
export class FechaEntregaFinalComponent {
  
  documentos: any;

  fechaEntrega = new FormGroup({
    fechaEntrega: new FormControl('')
  });

  constructor(private documento: GestionProyectoService) {

    this.documento.obtenerDocumento()
    .subscribe(respu => {      
      this.documentos = respu;
    }, (errorSer) => {
      console.log(errorSer);
    });
  }

  guardarFecha()
  {
    //console.warn(this.fechaEntrega.value);
    this.documento.registrarFechaEntrega(this.fechaEntrega.value)
      .subscribe(resp =>{
        console.log(resp);
      }, (errorSrv)=>{
        console.log(errorSrv);
      });
  }

}
