import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

declare var Swal: any;

@Component({
  selector: 'app-fecha-entrega-final',
  templateUrl: './fecha-entrega-final.component.html'
})
export class FechaEntregaFinalComponent {

  notaDocumento = new FormGroup({
    nota_archivo: new FormControl(''),

  });

  nombres:any;
  datos: Array<any> = [];


  constructor(private documento: GestionProyectoService, 
      private router: Router) {

    this.documento.obtenerEstudiantes()
      .subscribe(respu => {
        this.nombres = respu;        
        this.nombres.forEach(nombr => {
          this.documento.obtenerDocumento(nombr['id'])
            .subscribe(respu2 => {                      
              let i;
              for (i in respu2) {
                this.datos.push(respu2[i]);
              }                   
            });      
        });

      });
  }

  guardarNota(user_id: any) {

    this.documento.registrarNota(this.notaDocumento.value, user_id)
      .subscribe(resp => {
        Swal.fire({
          title: 'Registro exitoso!',
          text: resp['message'],
          icon: 'info',
          confirmButtonText: 'Ok'
        });                
        location.reload();        
      }, (errorSrv) => {
        console.log(errorSrv);
      });
  }



}
