import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor(private http: HttpClient) { }

  guardarInformeDirector(Informe: Object)
  {
    return this.http.post(`${API_URL}directores`, Informe);
  }

  obtenerHojaTutorias(User_id: number)
  {
    return this.http.get(`${API_URL}informeEstudiante/${User_id}`);
  }

  getInformeEstudiante(userId: number) {
    return this.http.get(`${API_URL}informe/${userId}`);
  }
}
