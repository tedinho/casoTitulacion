import { Component, OnInit } from '@angular/core';
import { SolicitudProrroga } from 'src/app/models/solicitud-prorroga';
import { SolicitudProrrogaService } from 'src/app/Services/solicitud-prorroga.service';

@Component({
  selector: 'app-prorroga',
  templateUrl: './prorroga.component.html',
  styleUrls: ['./prorroga.component.css']
})
export class ProrrogaComponent implements OnInit {

  prorrogas:SolicitudProrroga[];
  errorMessage: string;
  txtNombre: string;

  

  constructor(private solicitudProrrogaServicio: SolicitudProrrogaService) { }

  ngOnInit(): void {
    this.txtNombre = "";
    this.getSolicitudesProrrogas();
    console.log("listado"+this.prorrogas);
    
  }

  getSolicitudesProrrogas(){
    this.solicitudProrrogaServicio
    .getSolicitudesProrrogas(this.txtNombre)
    .subscribe(
      prorrogas => {
        this.prorrogas = prorrogas
      }, (error) => {
        console.log(error);
      }
    );
  }

  buscar(){
    this.getSolicitudesProrrogas();
  }

}
