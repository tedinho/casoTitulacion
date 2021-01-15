import { Injectable } from '@angular/core';
import { Estudiante } from '../models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
const API_URL: string = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  buscarEstudiantePorId(llave: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(API_URL + 'estudiantes/' + llave + '');
  }

  guardarEstudiante(estudiante) {
    return this.http.post(API_URL + 'estudiantes/', estudiante);
  }

  actualizarEstudiante(estudiante, id) {
    return this.http.put(API_URL + 'estudiantes/' + id, estudiante);
  }

}
