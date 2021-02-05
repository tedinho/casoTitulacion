import { Component, OnInit } from '@angular/core';
import { SolicitudProrroga } from 'src/app/models/solicitud-prorroga';
import { SolicitudProrrogaService } from 'src/app/Services/solicitud-prorroga.service';

@Component({
  selector: 'app-solicitud-prorroga-form',
  templateUrl: './solicitud-prorroga-form.component.html',
  styles: [
  ]
})
export class SolicitudProrrogaFormComponent implements OnInit {

  prorrogasLista: SolicitudProrroga[];
  solicitudProrroga: SolicitudProrroga; 
  errorMessage: string;
  txtNombre: string;

  

  constructor(private solicitudProrrogaServicio: SolicitudProrrogaService) { }

  ngOnInit(): void {
    this.txtNombre = "";
    this.getSolicitudesProrrogas();
     
  }

  getSolicitudesProrrogas(){
    console.log("2 Entra"+this.prorrogasLista); 
    this.solicitudProrrogaServicio
    .getSolicitudesProrrogas(this.txtNombre)
    .subscribe(
      prorrogas => {
        this.prorrogasLista = prorrogas
      }, (error) => {
        console.log(error);
      }
    );
  }

  buscar(){
    this.getSolicitudesProrrogas();
  }


}
