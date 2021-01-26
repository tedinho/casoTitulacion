import { Component } from '@angular/core';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

@Component({
  selector: 'app-informes-admin',
  templateUrl: './informes-admin.component.html'
})
export class InformesAdminComponent {

  informes: any;
  nombresArr: Array<any> = [];

  constructor(private informe: GestionProyectoService) { 

    this.informe.obtenerInforme()
      .subscribe(resp=>{
        this.informes = resp; 

        this.informes.forEach(nombres => {          
          this.informe.obtenerEstudiantesInformes(nombres['user_id'])
            .subscribe(resp2 => {
              this.nombresArr.push(resp2);
            });
          });           
              
      }, (errorSrv) =>{
        console.log(errorSrv);
      });
      
  }


}
