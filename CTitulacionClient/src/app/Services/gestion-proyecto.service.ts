import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL: string = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class GestionProyectoService {

  constructor(private http: HttpClient) { }

  enviarRubrica(Archivo: any){
    return this.http.post(`${API_URL}proyectoTitulacion`, Archivo);
  }
}
