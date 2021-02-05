import { Component } from '@angular/core';
import { DirectorService } from 'src/app/Services/director.service';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html'
})
export class ListaEstudiantesComponent {

  estudiantes: Array<any> = [];

  constructor(private directorService: DirectorService) {         

    this.directorService.getDirectorXEstudiante()
      .subscribe(resp =>{
        let i;
        for(i in resp)
        {
          this.directorService.getEstudiantes(resp[i]['student_id'])
            .subscribe(respu =>{
              let f;
              for(f in respu)
              {
                this.estudiantes.push(respu[f]);
              }              
            });
        }        
      });


  }

}
