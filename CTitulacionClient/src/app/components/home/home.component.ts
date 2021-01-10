import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArchivosService } from 'src/app/Services/archivos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  existenMensajes: boolean;
  mensaje: string;

  constructor(private archivos: ArchivosService) { 
    this.existenMensajes = false;
  }

  subirArchivosForm = new FormGroup({
    arch: new FormControl('')
  });

  onFileSelect(event)
  {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.subirArchivosForm.get('arch').setValue(file);
    }
  }

  enviarArchivo() {
    const formData = new FormData();
    formData.append('file', this.subirArchivosForm.get('arch').value);

    this.archivos.enviarArchivo(formData)
      .subscribe((respu:any) =>{        
        this.mensaje = respu.message;
        this.existenMensajes = true;
      }, (errorServer)=>{
        this.mensaje = errorServer;
        this.existenMensajes = true;
      });
  }

}
