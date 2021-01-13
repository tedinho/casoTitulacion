import { Component } from '@angular/core';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

@Component({
  selector: 'app-fecha-entrega-final',
  templateUrl: './fecha-entrega-final.component.html'
})
export class FechaEntregaFinalComponent {
  
  documentos: any;

  constructor(private documento: GestionProyectoService) {

    this.documento.obtenerDocumento()
    .subscribe(respu => {
      console.log(respu);
      this.documentos = respu;
    }, (errorSer) => {
      console.log(errorSer);
    });
  }

}
