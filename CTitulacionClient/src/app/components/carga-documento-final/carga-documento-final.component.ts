import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

declare var Swal: any;

@Component({
  selector: 'app-carga-documento-final',
  templateUrl: './carga-documento-final.component.html'
})
export class CargaDocumentoFinalComponent {

  fechaMaxima: Array<any> = [];
  tieneFecha: boolean;
  documentos: any;
  todayDate: any;
  dateComparar: any;
  

  constructor(private archivos: GestionProyectoService,
      private router: Router) {
        
      let date_ob = new Date();

      // adjust 0 before single digit date
      let date = ("0" + date_ob.getDate()).slice(-2);

      // current month
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

      // current year
      let year = date_ob.getFullYear();

      // prints date in YYYY-MM-DD format
      this.todayDate = year + "-" + month + "-" + date;

    this.archivos.obtenerUsuarioId(localStorage['email'])
      .subscribe(resp =>{
        this.archivos.obtenerDocumento(resp['id'])
          .subscribe(res =>{
            this.documentos = res;            
          });
        this.archivos.obtenerFechaEntrega(resp['id'])
          .subscribe(resp2 =>{            
            let i;
            for(i in resp2)
            {
              this.fechaMaxima.push(resp2[i]);
            }                
            this.dateComparar = this.fechaMaxima[2]['fecha'];
            this.tieneFecha = this.fechaMaxima[0];
          });
      });
   }

  cargarDocumento = new FormGroup({
    arch: new FormControl(''),
    tipo_archivo: new FormControl('Proyecto Final'),
    email: new FormControl(localStorage.getItem('email')),
  });


  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.cargarDocumento.get('arch').setValue(file);
    }
  }

  enviarArchivo() {
    const formData = new FormData();
    formData.append('file', this.cargarDocumento.get('arch').value);
    formData.append('tipo_archivo', this.cargarDocumento.get('tipo_archivo').value);
    formData.append('email', this.cargarDocumento.get('email').value);
    const documentes = this.cargarDocumento.value;
    formData.append('nombre_archivo', documentes['arch']['name']);

    this.archivos.cargaDocumento(formData)
      .subscribe((respu: any) => {        
        this.cargarDocumento.reset();
        this.redirigir();
        Swal.fire({
          text: `${respu.message}`,
          icon: 'info',                  
        });
      }, (errorServer) => {
        this.cargarDocumento.reset();
        console.log(errorServer);
        Swal.fire({
          text: 'Error al subir archivos',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  }

  redirigir(){
    this.router.navigate(['home']);
  }

}