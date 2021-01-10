import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/environments/environment';

API_URL;

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {


  constructor(private http: HttpClient) { }

  enviarArchivo(Archivo: any){
    return this.http.post(`${API_URL}storefile`, Archivo);
  }
}
