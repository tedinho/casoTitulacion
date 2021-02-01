import { Component } from '@angular/core';
import { GestionProyectoService } from 'src/app/Services/gestion-proyecto.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html'
})
export class InformesComponent {

  informes: any;
  nombresArr: Array<any> = [];
  correo = localStorage['email'];

  constructor(private informe: GestionProyectoService) {

    this.informe.obtenerInformeRevisor(this.correo)
      .subscribe(resp => {
        this.informes = resp;

        this.informes.forEach(nombres => {
          this.informe.obtenerEstudiantesInformes(nombres['user_id'])
            .subscribe(resp2 => {
              this.nombresArr.push(resp2);
            });
        });

      }, (errorSrv) => {
        console.log(errorSrv);
      });

  }

}
