import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GestionProyectoService } from 'src/app/Services/gestion-proyecto.service';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent{

  existenMensajes: boolean;
  mensaje: string;

  constructor(private rubrica: GestionProyectoService) { 
    this.existenMensajes = false;
  }

  subirRubricaForm = new FormGroup({
    arch: new FormControl('')
  });

  onFileSelect(event)
  {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.subirRubricaForm.get('arch').setValue(file);
    }
  }

  enviarRubrica() {
    const formData = new FormData();
    formData.append('file', this.subirRubricaForm.get('arch').value);

    this.rubrica.enviarRubrica(formData)
      .subscribe((respu:any) =>{        
        this.mensaje = respu.message;
        this.existenMensajes = true;
      }, (errorServer)=>{
        this.mensaje = errorServer;
        this.existenMensajes = true;
      });
  }


}
