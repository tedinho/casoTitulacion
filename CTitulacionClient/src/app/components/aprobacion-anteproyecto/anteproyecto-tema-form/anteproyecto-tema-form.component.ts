import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anteproyecto-tema-form',
  templateUrl: './anteproyecto-tema-form.component.html',
  styleUrls: ['./anteproyecto-tema-form.component.css']
})
export class AnteproyectoTemaFormComponent implements OnInit {

  estado: string[];
  
  constructor() { }

  ngOnInit(): void {
  }

  getEstado() {
    this.estado = ['Aprobado', 'Rechazado'];
  }

}
