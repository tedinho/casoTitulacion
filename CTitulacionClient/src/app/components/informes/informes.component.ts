import { Component } from '@angular/core';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html'
})
export class InformesComponent {

  informes: any;

  constructor(private informe: GestionProyectoService) { 

    this.informe.obtenerInforme()
      .subscribe(resp=>{
        this.informes = resp;        
      }, (errorSrv) =>{
        console.log(errorSrv);
      });

  }

}
