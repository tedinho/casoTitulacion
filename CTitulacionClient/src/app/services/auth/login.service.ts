import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  roleAs:string;

  constructor(private http: HttpClient) { }

  login(Credenciales: Object){
    return this.http.post<any>(`${API_URL}login`, Credenciales)
  }

  obtenerToken():string{
    return localStorage.getItem('token');
  }

  obtenerUsuario(){
    let username = localStorage.getItem('email');
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

  getRole(){
    this.roleAs = localStorage.getItem('rol')
    return this.roleAs;
  }

}