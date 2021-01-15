import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {

  private api:string = "http://localhost:8000/api/";

  constructor(private http: HttpClient) { }

  enviarArchivo(Archivo: any){
    return this.http.post(`${this.api}storefile`, Archivo);
  }
}
