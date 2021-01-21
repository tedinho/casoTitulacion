import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GestionProyecto } from 'src/app/models/gestion-proyecto';
const API_URL: string = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class GestionProyectoService {

  constructor(private http: HttpClient) { }

  enviarRubrica(Archivo: any){
    return this.http.post(`${API_URL}storefile`, Archivo);
  }

  getCronogramas(nombre: string): Observable<GestionProyecto[]> {
    return this.http.get<GestionProyecto[]>(API_URL + 'proyectoTitulacion');
  }

  buscarCronograma(llave: number): Observable<GestionProyecto> {
    return this.http.get<GestionProyecto>(API_URL + 'proyectoTitulacion/' + llave + '');
  }

  actualizarCronograma(gestionProyecto, id) {
    return this.http.put(API_URL + 'proyectoTitulacion/' + id, gestionProyecto);
  }

  guardarCronograma(gestionProyecto) {
    return this.http.post(API_URL + 'proyectoTitulacion/', gestionProyecto);
  }
}
