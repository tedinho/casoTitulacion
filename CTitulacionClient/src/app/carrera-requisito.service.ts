import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarreraRequisito } from './models/carrera-requisito';
const API_URL: string = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class CarreraRequisitoService {

  constructor(private http: HttpClient) { }

  guardarCarreraRequisito(carreraRequisito) {
    return this.http.post(API_URL + 'carrera-requisito/', carreraRequisito);
  }

  buscarCarreraRequisitoPorIdCarrera(idCarrera: number): Observable<CarreraRequisito[]> {
    return this.http.get<CarreraRequisito[]>(API_URL + 'carrera-requisito/buscar-requisito-id-carrera/' + idCarrera);
  }

}
