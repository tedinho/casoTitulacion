import { Component, OnInit } from '@angular/core';
import { SolicitudProrroga } from 'src/app/models/solicitud-prorroga';
import { SolicitudProrrogaService } from 'src/app/Services/solicitud-prorroga.service';

@Component({
  selector: 'app-prorroga',
  templateUrl: './prorroga.component.html',
  styleUrls: ['./prorroga.component.css']
})
export class ProrrogaComponent implements OnInit {

  prorrogas: SolicitudProrroga[];
  solicitudProrroga: SolicitudProrroga; 
  errorMessage: string;
  txtNombre: string;

  

  constructor(private solicitudProrrogaServicio: SolicitudProrrogaService) { }

  ngOnInit(): void {
    this.txtNombre = "";
    this.getSolicitudesProrrogas();
     
  }

  getSolicitudesProrrogas(){
    console.log("1 Entra"+this.prorrogas); 
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

  aprobarSolPro(id:any){
    this.solicitudProrrogaServicio
    .aprobarSolicitudProrroga(this.prorrogas,id)
    .subscribe(
      solicitudPro => {
        this.getSolicitudesProrrogas();
      }, (error) => {
        console.log(error);
      }
    );
  }

  desaprobarSolPro(id:any){
    this.solicitudProrrogaServicio
    .desaprobarSolicitudProrroga(this.prorrogas,id)
    .subscribe(
      solicitudPro => {
        this.getSolicitudesProrrogas();
      }, (error) => {
        console.log(error);
      }
    );
  }




}
