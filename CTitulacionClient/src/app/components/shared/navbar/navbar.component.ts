import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent  {

  dataUser: any;  

  constructor(private routes:Router, private authService: AuthService){
    this.obtenerDatos();
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('rol');
    this.routes.navigate(['/login']);
  }

  obtenerDatos(){
    if(this.isLogin()){
      this.dataUser = this.authService.obtenerUsuario();      
    }
    else{
      this.dataUser = {};
    }
  }

  isLogin(){
    return this.authService.estaLogeado();
  }



}
