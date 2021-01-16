import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ObservacionAnteproyecto } from 'src/app/models/observacion-anteproyecto';
const API_URL: string = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class ObservacionAnteproyectoService {

  constructor(private http: HttpClient) { }

  getObservacionAnteproyectos(nombre: string): Observable<ObservacionAnteproyecto[]> {
    return this.http.get<ObservacionAnteproyecto[]>(API_URL + 'observacionAnteproyecto');
  }

  buscarObservacionAnteproyecto(llave: number): Observable<ObservacionAnteproyecto> {
    return this.http.get<ObservacionAnteproyecto>(API_URL + 'observacionAnteproyecto/' + llave + '');
  }

  actualizarObservacionAnteproyecto(observacion, id) {
    return this.http.put(API_URL + 'observacionAnteproyecto/' + id, observacion);
  }

  guardarObservacionAnteproyecto(observacion) {
    return this.http.post(API_URL + 'observacionAnteproyecto/', observacion);
  }
}
