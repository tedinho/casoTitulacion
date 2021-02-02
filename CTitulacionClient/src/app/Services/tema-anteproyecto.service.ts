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
    return this.http.post(API_URL + 'tema-anteproyecto/', temaAnte);
  }

  buscarTemaAnteproyectoPorIdSolicitud(id: number): Observable<TemaAnteproyecto[]> {
    return this.http.get<TemaAnteproyecto[]>(API_URL + 'tema-anteproyecto/buscar-por-id-solicitud/' + id + '');
  }

  actualizarTemaAnteproyecto(temaAnte, id) {
    return this.http.put(API_URL + 'tema-anteproyecto/' + id, temaAnte);
  }

  buscarTemasPorAprobarPorIdCarrera(idCarrea: number): Observable<TemaAnteproyecto[]> {
    return this.http.get<TemaAnteproyecto[]>(API_URL + 'tema-anteproyecto/buscar-por-aprobar-id-carrera/' + idCarrea + '');
  }

}
