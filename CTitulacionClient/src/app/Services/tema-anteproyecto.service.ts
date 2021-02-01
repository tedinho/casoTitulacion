import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TemaAnteproyecto } from '../models/tema-anteproyecto';
const API_URL: string = 'http://localhost:8000/api/';
@Injectable({
  providedIn: 'root'
})
export class TemaAnteproyectoService {

  constructor(private http: HttpClient) { }

  guardarTema(temaAnte) {
    return this.http.post(API_URL + 'estudiante-carrera/', temaAnte);
  }

  buscarTemaAnteproyectoPorIdEstudiante(id: number): Observable<TemaAnteproyecto[]> {
    return this.http.get<TemaAnteproyecto[]>(API_URL + 'estudiante-carrera/buscar-por-id-estudiante/' + id + '');
  }

  actualizarTemaAnteproyecto(temaAnte, id) {
    return this.http.put(API_URL + 'estudiante-carrera/' + id, temaAnte);
  }

}
