import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodoLectivo } from '../models';
const API_URL: string = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class PeriodoLectivoService {

  constructor(private http: HttpClient) { }

  guardarPeriodoLectivo(periodoLectivo) {
    return this.http.post(API_URL + 'periodo-lectivo/', periodoLectivo);
  }

  buscarPeriodoLectivoPorIdCarrera(idCarrera: number): Observable<PeriodoLectivo[]> {
    return this.http.get<PeriodoLectivo[]>(API_URL + 'periodo-lectivo/buscar-periodo-lectivo-id-carrera/' + idCarrera);
  }

}
