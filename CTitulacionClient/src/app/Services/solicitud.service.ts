import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../models';
const API_URL: string = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http: HttpClient) { }

  guardarEstudianteCarrera(solicitud) {
    return this.http.post(API_URL + 'solicitud/', solicitud);
  }

  buscarEstudianteCarreraPorIdEstudiante(id: number): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(API_URL + 'solicitud/buscar-por-id-estudiante-carrera/' + id + '');
  }

  actualizarEstudianteCarrera(solicitud, id) {
    return this.http.put(API_URL + 'solicitud/' + id, solicitud);
  }

}
