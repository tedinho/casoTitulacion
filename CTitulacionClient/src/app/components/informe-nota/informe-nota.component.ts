import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DirectorService } from 'src/app/Services/director.service';

declare var Swal: any;

@Component({
  selector: 'app-informe-nota',
  templateUrl: './informe-nota.component.html'
})
export class InformeNotaComponent {

  correo = localStorage['email'];
  documentos: Array<any> = [];

  constructor(private directoreService: DirectorService, 
        private activatedRoute: ActivatedRoute) {

      let param = this.activatedRoute.snapshot.params["id"];

      this.directoreService.getDocumetoEstudiante(param)
        .subscribe(resp => {
          let i;
          for(i in resp)
          {
            this.documentos.push(resp[i]);
          }          
        });
    }

  informeNotaForm = new FormGroup({
    titulo: new FormControl(''),
    arch: new FormControl(''),
    validacion: new FormControl(''),
    cuerpo: new FormControl(''),
    observacion: new FormControl(''),
    calificacion_proyecto: new FormControl(''),
    director_email: new FormControl(this.correo),
    user_id: new FormControl(''),
  });
  
  onFileSelect(event)
  {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.informeNotaForm.get('arch').setValue(file);
    }
  }

  registrarInforme()
  {    
    const formData = new FormData();
    formData.append('file', this.informeNotaForm.get('arch').value);
    formData.append('validacion', this.informeNotaForm.get('validacion').value);
    formData.append('cuerpo', this.informeNotaForm.get('cuerpo').value);
    formData.append('observacion', this.informeNotaForm.get('observacion').value);
    formData.append('titulo', this.informeNotaForm.get('titulo').value);
    formData.append('calificacion_proyecto', this.informeNotaForm.get('calificacion_proyecto').value);
    formData.append('director_email', this.informeNotaForm.get('director_email').value);
    formData.append('user_id', this.documentos[0]['user_id']);
    const documentos = this.informeNotaForm.value;
    formData.append('nombre_archivo', documentos['arch']['name']);
    
    this.directoreService.guardarInformeDirector(formData)
      .subscribe(resp =>{
        Swal.fire({
          text: `${resp['message']}`,
          icon: 'info',
          confirmButtonText: 'Ok'
        });
        this.informeNotaForm.reset();
      }, (errorSVR)=>{
        console.log(errorSVR);
        Swal.fire({
          title: 'Error',
          text: 'Error al guardar informe',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });

  }
    

}
