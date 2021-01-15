import { Component } from '@angular/core';
import { LoginService } from './services/auth/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CTitulacionClientCSS';

  constructor(private authService: LoginService){}

  isLogin(){
    return this.authService.estaLogeado();
  }

}
