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

  getAnteproyectos(nombre: string): Observable<Anteproyecto[]> {
    return this.http.get<Anteproyecto[]>(API_URL + 'anteproyectos');
  }

  buscarAnteproyecto(llave: number): Observable<Anteproyecto> {
    return this.http.get<Anteproyecto>(API_URL + 'anteproyectos/' + llave + '');
  }

  actualizarAnteproyecto(anteproyecto, id) {
    return this.http.put(API_URL + 'anteproyectos/' + id, anteproyecto);
  }

  guardarAnteproyecto(anteproyecto) {
    return this.http.post(API_URL + 'anteproyectos/', anteproyecto);
  }

}
