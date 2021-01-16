import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DocenteCarrera } from './models/docente_carrera';
const API_URL: string = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class DocenteCarreraService {

  constructor(private http: HttpClient) { }

  guardarDocenteCarrera(docenteCarrera) {
    return this.http.post(API_URL + 'docente-carrera/', docenteCarrera);
  }

  buscarDocentesPorIdCarrera(idCarrera: number): Observable<DocenteCarrera[]> {
    return this.http.get<DocenteCarrera[]>(API_URL + 'docente-carrera/buscar-docente-id-carrera/' + idCarrera);
  }

}
