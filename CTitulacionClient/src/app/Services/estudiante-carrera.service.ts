import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstudianteCarrera } from '../models/estudiante_carrera';
const API_URL: string = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class EstudianteCarreraService {

  constructor(private http: HttpClient) { }

  guardarEstudianteCarrera(estudianteCarrera) {
    return this.http.post(API_URL + 'estudiante-carrera/', estudianteCarrera);
  }

  buscarEstudianteCarreraPorIdEstudiante(id: number): Observable<EstudianteCarrera[]> {
    return this.http.get<EstudianteCarrera[]>(API_URL + 'estudiante-carrera/buscar-por-id-estudiante/' + id + '');
  }

  actualizarEstudianteCarrera(estudiante, id) {
    return this.http.put(API_URL + 'estudiante-carrera/' + id, estudiante);
  }

}
