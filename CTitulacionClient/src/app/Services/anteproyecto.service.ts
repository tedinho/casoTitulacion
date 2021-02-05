import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Anteproyecto } from 'src/app/models/anteproyecto';
const API_URL: string = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class AnteproyectoService {

  constructor(private http: HttpClient) { }

  guardarAnteproyecto(anteproyecto) {
    return this.http.post(API_URL + 'anteproyectos/', anteproyecto);
  }

  buscarAnteproyectoPorIdTema(id: number): Observable<Anteproyecto[]> {
    return this.http.get<Anteproyecto[]>(API_URL + 'anteproyectos/buscar-por-id-tema/' + id + '');
  }

  actualizarAnteproyecto(anteproyecto, id) {
    return this.http.put(API_URL + 'anteproyectos/' + id, anteproyecto);
  }

  buscarAnteproyectosPorAprobarPorIdCarrera(idCarrea: number): Observable<Anteproyecto[]> {
    return this.http.get<Anteproyecto[]>(API_URL + 'anteproyectos/buscar-por-aprobar-id-carrera/' + idCarrea + '');
  }

  obtenerRevisores() {
    return this.http.get(API_URL + 'anteproyectos-revisor');
  }

}
