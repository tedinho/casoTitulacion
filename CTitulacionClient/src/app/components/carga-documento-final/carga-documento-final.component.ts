import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GestionProyectoService } from 'src/app/services/gestion-proyecto.service';

@Component({
  selector: 'app-carga-documento-final',
  templateUrl: './carga-documento-final.component.html'
})
export class CargaDocumentoFinalComponent {

  constructor(private archivos: GestionProyectoService) { }

  cargarDocumento = new FormGroup({
    arch: new FormControl(''),    
    tipo_archivo: new FormControl('Proyecto Final'),
    email: new FormControl(localStorage.getItem('email')),
  });


  onFileSelect(event)
  {
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
      .subscribe((respu:any) =>{      
        console.log(respu);
      }, (errorServer)=>{
        console.log(errorServer);        
      });
  }

}
