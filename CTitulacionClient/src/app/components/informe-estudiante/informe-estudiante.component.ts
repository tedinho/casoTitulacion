import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionProyectoService } from 'src/app/Services/gestion-proyecto.service';

@Component({
  selector: 'app-informe-estudiante',
  templateUrl: './informe-estudiante.component.html'
})
export class InformeEstudianteComponent {

  informeData: any;

  constructor(private activatedRoute: ActivatedRoute,
    private informe: GestionProyectoService) {

    let parame = this.activatedRoute.snapshot.params["id"];

    this.informe.getInformeEstudiante(parame)
      .subscribe(resp => {
        this.informeData = resp['Informe'];
        console.log(this.informeData);
      });

  }

}
