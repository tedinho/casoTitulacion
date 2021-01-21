import { Component, OnInit } from '@angular/core';
import { Anteproyecto } from 'src/app/models/anteproyecto';
import { AnteproyectoService } from 'src/app/Services/anteproyecto.service';


@Component({
  selector: 'app-anteproyecto-list',
  templateUrl: './anteproyecto-list.component.html',
  styleUrls: ['./anteproyecto-list.component.css']
})
export class AnteproyectoListComponent implements OnInit {

  anteproyectos: Anteproyecto[];
  errorMessage: string;
  txtNombre: string;

  constructor(private AnteproyectoServicio: AnteproyectoService) { }

  ngOnInit(): void {
    this.txtNombre = "";
    this.getAnteproyectos();
  }

  findDetails(a) {
    return this.anteproyectos.filter(x => x.id === a.id);
  }

  getAnteproyectos() {
    this.AnteproyectoServicio
      .getAnteproyectos(this.txtNombre)
      .subscribe(
        anteproyectos => {
          this.anteproyectos = anteproyectos
        }, (error) => {
          console.log(error);
        }
      );
  }

  buscar() {
    this.getAnteproyectos();
  }

}
