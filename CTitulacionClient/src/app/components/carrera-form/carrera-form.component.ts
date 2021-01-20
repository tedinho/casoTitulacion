import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarreraRequisitoService } from '../../Services/carrera-requisito.service';
import { DocenteCarreraService } from '../../Services/docente-carrera.service';
import { PeriodoLectivo } from '../../models';
import { Carrera } from '../../models/carrera';
import { CarreraRequisito } from '../../models/carrera-requisito';
import { DocenteCarrera } from '../../models/docente_carrera';
import { User } from '../../models/user';
import { PeriodoLectivoService } from '../../Services/periodo-lectivo.service';
import { AuthService } from '../../Services/auth.service';
import { CarreraService } from '../../Services/carrera.service';

@Component({
  selector: 'app-carrera-form',
  templateUrl: './carrera-form.component.html',
  styleUrls: ['./carrera-form.component.css']
})

export class CarreraFormComponent implements OnInit {
  carrera: Carrera;
  id: number;
  errorMessage: string;
  tipos: string[];
  opcionesGraduacion: String[];
  mensajeDatosGenerales: string;
  mensajeDocentes: string;
  mensajePeriodoLectivo: string;
  mensajeRequisito: string;
  userDocente: User;
  docentesCarreras: DocenteCarrera[];
  periodosLista: PeriodoLectivo[];
  requisitosLista: CarreraRequisito[];

  formularioCarrera = new FormGroup({
    nombre: new FormControl(''),
    codigo: new FormControl(''),
    tipo_carrera: new FormControl(),
    estado: new FormControl('A'),
    id_coordinador: new FormControl(1),
    opcion_graduacion: new FormControl('')
  });

  formularioDocente = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password_repeat: new FormControl('')
  });

  formularioPeriodoLectivo = new FormGroup({
    nombre: new FormControl(''),
    fecha_inicio: new FormControl(''),
    fecha_fin: new FormControl(''),
    carrera_id: new FormControl('')
  });

  formularioCarreraRequisito = new FormGroup({
    nombre: new FormControl(''),
    descripccion: new FormControl(''),
    numero_horas: new FormControl(''),
    carrera_id: new FormControl('')
  });

  constructor(private carreraRequisitoService: CarreraRequisitoService, private periodoLectivoServicio: PeriodoLectivoService, private docenteCarreraService: DocenteCarreraService, private carreraServicio: CarreraService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.mensajeDatosGenerales = '';
    this.mensajeDocentes = '';
    this.carrera = new Carrera();
    this.getModalidades();
    this.getOpcionesGraduacion();
    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
        if (this.id != null) {
          this.getCarrera();
        }
      });
  }

  getOpcionesGraduacion() {
    this.opcionesGraduacion = ['Complexivo', 'Tesis', 'Complexivo y Tesis'];
  }

  getModalidades() {
    this.tipos = ['Tecnológico Superior', 'Técnico'];
  }


  guardar() {
    if (this.carrera.id == null) {
      console.log(this.formularioCarrera.value);
      this.carreraServicio
        .guardarCarrera(this.formularioCarrera.value)
        .subscribe(
          carrera => {
            this.carrera = carrera as Carrera;
            this.id = this.carrera.id;
            console.log(carrera);
            this.mensajeDatosGenerales = "La carrera ha sido creada correctamente";
          }
        );
    } else {
      this.carreraServicio
        .actualizarCarrera(this.formularioCarrera.value, this.id)
        .subscribe(
          carrera => {
            this.carrera = carrera as Carrera;
            this.id = this.carrera.id;
            console.log(carrera);
            this.mensajeDatosGenerales = "La carrera ha sido actualizada correctamente";
          },
          error => {
            this.errorMessage = error.json().errors;
          }
        );
    }
  }

  getCarrera() {
    this.carreraServicio
      .buscarCarrera(this.id)
      .subscribe(
        carrera => {
          this.formularioCarrera = new FormGroup({
            id: new FormControl(null),
            nombre: new FormControl(''),
            codigo: new FormControl(''),
            tipo_carrera: new FormControl(),
            estado: new FormControl('A'),
            id_coordinador: new FormControl(1),
            opcion_graduacion: new FormControl('')
          });
          console.log(carrera);
          this.carrera = carrera;
          this.formularioCarrera.setValue(carrera);
          this.getListaDocentes();
          this.getPeriodosLectivos();
          this.getRequisitos();
        },
        error => this.errorMessage = <any>error
      );
  }

  guardarDocente() {
    let pass = this.makeRandom();
    this.formularioDocente.get('password').setValue(pass);
    this.formularioDocente.get('password_repeat').setValue(pass);
    this.authService.guardarDocente(this.formularioDocente.value)
      .subscribe(docente => {
        this.userDocente = docente as User;
        var doca = new DocenteCarrera();
        doca.carrera_id = this.carrera.id;
        doca.usuario_id = this.userDocente.id;
        this.docenteCarreraService.guardarDocenteCarrera(doca)
          .subscribe(docenteCarrera => {
            this.mensajeDocentes = "Se ha registrado el docente correctamente";
            this.docenteCarreraService.buscarDocentesPorIdCarrera(this.carrera.id)
              .subscribe(docentesCarrera => {
                this.docentesCarreras = docentesCarrera;
                this.formularioDocente = new FormGroup({
                  name: new FormControl(''),
                  email: new FormControl(''),
                  password: new FormControl(''),
                  password_repeat: new FormControl('')
                });
              });
          }, error => {
            console.log(error);
          });
      }, error => {
        console.log(error);
        this.userDocente = null;
      });
  }

  getListaDocentes() {
    this.docenteCarreraService.buscarDocentesPorIdCarrera(this.carrera.id)
      .subscribe(docntes => {
        console.log(docntes);
        this.docentesCarreras = docntes;
      });
  }

  makeRandom() {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.";
    let text = "";
    for (let i = 0; i < 8; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  guardarPeriodoLectivo() {
    this.formularioPeriodoLectivo.get('carrera_id').setValue(this.carrera.id);
    this.periodoLectivoServicio.guardarPeriodoLectivo(this.formularioPeriodoLectivo.value)
      .subscribe(periodoLe => {
        this.formularioPeriodoLectivo = new FormGroup({
          nombre: new FormControl(''),
          fecha_inicio: new FormControl(''),
          fecha_fin: new FormControl(''),
          carrera_id: new FormControl('')
        });
        this.mensajePeriodoLectivo = "Se ha guardado el Periodo Lectivo correctamente";
        this.getPeriodosLectivos();
      });
  }

  getPeriodosLectivos() {
    this.periodoLectivoServicio.buscarPeriodoLectivoPorIdCarrera(this.carrera.id)
      .subscribe(listaPeriodos => {
        this.periodosLista = listaPeriodos;
      });
  }

  guardarRequisito() {
    this.formularioCarreraRequisito.get('carrera_id').setValue(this.carrera.id);
    this.carreraRequisitoService.guardarCarreraRequisito(this.formularioCarreraRequisito.value)
      .subscribe(carreraRe => {
        this.formularioCarreraRequisito = new FormGroup({
          nombre: new FormControl(''),
          descripccion: new FormControl(''),
          numero_horas: new FormControl(''),
          carrera_id: new FormControl('')
        });
        this.mensajeRequisito = "Se ha guardado el Requisito correctamente";
        this.getRequisitos();
      });
  }

  getRequisitos() {
    this.carreraRequisitoService.buscarCarreraRequisitoPorIdCarrera(this.carrera.id)
      .subscribe(listaRequisitos => {
        this.requisitosLista = listaRequisitos;
      });
  }


}
