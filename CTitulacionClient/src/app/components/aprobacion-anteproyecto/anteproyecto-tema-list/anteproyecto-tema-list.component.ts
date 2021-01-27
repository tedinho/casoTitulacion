import { Component, OnInit } from '@angular/core';
import { TemaAnteproyecto } from 'src/app/models/tema-anteproyecto';
import { AnteproyectoService } from 'src/app/Services/anteproyecto.service';


@Component({
  selector: 'app-anteproyecto-tema-list',
  templateUrl: './anteproyecto-tema-list.component.html',
  styleUrls: ['./anteproyecto-tema-list.component.css']
})
export class AnteproyectoTemaListComponent implements OnInit {

  temaAnteproyecto: TemaAnteproyecto[];
  nombresArr: Array<any> = [];
  errorMessage: string;
  txtNombre: string;

  constructor(private AnteproyectoServicio: AnteproyectoService) { }

  ngOnInit(): void {
    this.txtNombre = "";
    this.getTemaAnteproyectos();
  }

  getTemaAnteproyectos() {
    this.AnteproyectoServicio
      .getTemaAnteproyectos(this.txtNombre)
      .subscribe(
        temaAnteproyecto => {
          this.temaAnteproyecto = temaAnteproyecto

          this.temaAnteproyecto.forEach(nombres => {
            this.AnteproyectoServicio.obtenerEstudiantesInformes(nombres['user_id'])
              .subscribe(resp2 => {
                this.nombresArr.push(resp2);
              })
          })
        }, (error) => {
          console.log(error);
        }
      );
  }

}
