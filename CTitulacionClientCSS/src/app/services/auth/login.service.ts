import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(Credenciales: Object){
    return this.http.post<any>(`${API_URL}login`, Credenciales)
  }

  obtenerToken():string{
    return localStorage.getItem('token');
  }

  obtenerUsuario(){
    let username = localStorage.getItem('username');
    let rol = localStorage.getItem('rol');
    return {
      user: username,
      role: rol
    };
  }

  estaLogeado():boolean{
    let tokenId = this.obtenerToken();
    if(!tokenId){
      return false;
    }
    return true;
  }
}