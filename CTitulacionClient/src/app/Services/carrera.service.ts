import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Carrera } from 'src/app/models/carrera';
import { API_URL } from 'src/environments/environment';

API_URL;

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http: HttpClient) { }

  getCarreras(nombre: string): Observable<Carrera[]> {
    if (nombre != '') {
      return this.http.get<Carrera[]>(API_URL + 'carreras/porNombre/' + nombre);
    } else {
      return this.http.get<Carrera[]>(API_URL + 'carreras');
    }
  }

  buscarCarrera(llave: number): Observable<Carrera> {
    return this.http.get<Carrera>(API_URL + 'carreras/' + llave + '');
  }

  actualizarCarrera(carrera, id) {
    return this.http.put(API_URL + 'carreras/' + id, carrera);
  }

  guardarCarrera(carrera) {
    return this.http.post(API_URL + 'carreras/', carrera);
  }

}
