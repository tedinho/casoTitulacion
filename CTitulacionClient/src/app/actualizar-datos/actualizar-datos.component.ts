import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteService } from '../Services/estudiante.service';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.component.html',
  styleUrls: ['./actualizar-datos.component.css']
})
export class ActualizarDatosComponent implements OnInit {

  formularioEstudiante = new FormGroup({
    id: new FormControl(''),
    fecha_ingreso: new FormControl(''),
    actualizar_datos: new FormControl(true),
    nombre: new FormControl('A'),
    apellido: new FormControl('A'),
    correo: new FormControl(''),
    telefono: new FormControl(''),
    celular: new FormControl('')
  });
  id: number;

  constructor(private estudianteServicio: EstudianteService, private router: Router) { }

  ngOnInit(): void {
    this.getEstudiante();
  }

  getEstudiante() {
    this.id = +localStorage.getItem('id');
    this.estudianteServicio
      .buscarEstudiantePorId(this.id)
      .subscribe(
        estudiante => {
          this.formularioEstudiante = new FormGroup({
            id: new FormControl(''),
            fecha_ingreso: new FormControl(''),
            actualizar_datos: new FormControl(true),
            nombre: new FormControl('A'),
            apellido: new FormControl('A'),
            correo: new FormControl(''),
            telefono: new FormControl(''),
            celular: new FormControl('')
          });
          this.formularioEstudiante.setValue(estudiante);
          console.log(estudiante);
        }
      );
  }

  guardar() {
    this.formularioEstudiante.get('actualizar_datos').setValue(false);
    this.estudianteServicio
      .actualizarEstudiante(this.formularioEstudiante.value, this.id)
      .subscribe(estudiante => {
        console.log(estudiante);
        this.router.navigate(['/home']);
      });
  }

}
