import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarreraRequisitoSolicitud } from '../models/requisitos-carrera-solicitud';
const API_URL: string = 'http://localhost:8000/api/';


@Injectable({
  providedIn: 'root'
})
export class CarreraRequisitoSolicitudService {

  constructor(private http: HttpClient) { }

  guardarCarreraRequisitoSolicitud(carreraRequisitoSolicitud) {
    return this.http.post(API_URL + 'carrera-requisito-solicitud/', carreraRequisitoSolicitud);
  }

  buscarCarreraRequisitoPorIdSolicitud(idSolicitud: number): Observable<CarreraRequisitoSolicitud[]> {
    return this.http.get<CarreraRequisitoSolicitud[]>(API_URL + 'carrera-requisito-solicitud/buscar-requisito-carrera-solicitud-id-solicitud/' + idSolicitud);
  }
}
