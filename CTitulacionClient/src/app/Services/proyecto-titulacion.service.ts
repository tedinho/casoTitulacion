import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ProyectoTitulacion } from '../models';
const API_URL: string = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class ProyectoTitulacionService {

  constructor(private http: HttpClient) { }

  getProyectosTitulaciones(nombre: string): Observable<ProyectoTitulacion[]>{
    return this.http.get<ProyectoTitulacion[]>(API_URL + 'proyectoTitulacion');
  }

  aceptarProyectoTitulacion(proyectoTitulacion, id){
    return this.http.patch(API_URL + 'aceptarProyectoTitulacion/' + id, proyectoTitulacion);
  }

  rechazarProyectoTitulacion(proyectoTitulacion, id){
    return this.http.patch(API_URL + 'rechazarProyectoTitulacion/' + id, proyectoTitulacion);
  }

  anularProyectoTitulacion(proyectoTitulacion, id){
    return this.http.patch(API_URL + 'anularProyectoTitulacion/' + id, proyectoTitulacion);
  }


}
