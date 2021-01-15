import { Component } from '@angular/core';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

@Component({
  selector: 'app-modificacion-revisor',
  templateUrl: './modificacion-revisor.component.html'
})
export class ModificacionRevisorComponent  {

  revisores: any;

  constructor(private revisoresService: GestionProyectoService) { 

    this.revisoresService.obtenerRevisores()
      .subscribe(resp =>{        
        this.revisores = resp;
      }, (errorServicio)=>{
        console.log(errorServicio);
      });
  }

}
