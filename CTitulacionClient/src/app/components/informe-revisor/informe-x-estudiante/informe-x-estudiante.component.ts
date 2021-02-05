import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DirectorService } from 'src/app/Services/director.service';

@Component({
  selector: 'app-informe-x-estudiante',
  templateUrl: './informe-x-estudiante.component.html'
})
export class InformeXEstudianteComponent {

  informeData: any;
  hojaRuta: any;

  constructor(private activatedRoute: ActivatedRoute,
      private directorService: DirectorService) {

    let parame = this.activatedRoute.snapshot.params["id"];

    this.directorService.getInformeEstudiante(parame)
      .subscribe(resp => {
        this.informeData = resp['Informe'];  
        console.log(this.informeData);      
      });
    
    this.directorService.obtenerHojaTutorias(parame)
      .subscribe(resp =>{
        this.hojaRuta = resp;
      });

  }


}
