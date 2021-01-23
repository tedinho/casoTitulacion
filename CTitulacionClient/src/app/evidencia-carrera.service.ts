import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodoLectivo } from './models';
import { EvidenciaCarrera } from './models/evidencia-carrera';
const API_URL: string = 'http://localhost:8000/api/';


@Injectable({
  providedIn: 'root'
})
export class EvidenciaCarreraService {

  constructor(private http: HttpClient) { }

  guardarEvidenciaCarrera(evidencia) {
    return this.http.post(API_URL + 'evidencia-carrera/', evidencia);
  }

  buscarEvidenciasPorIdCarrera(idCarrera: number): Observable<EvidenciaCarrera[]> {
    return this.http.get<EvidenciaCarrera[]>(API_URL + 'evidencia-carrera/buscar-evidencia-por-id-carrera/' + idCarrera);
  }
}
