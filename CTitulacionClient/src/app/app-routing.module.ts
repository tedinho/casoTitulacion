import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './authguard/auth-guard.service';
import { CarreraListaComponent } from './carrera-lista/carrera-lista.component';
import { CarreraFormComponent } from './carrera-form/carrera-form.component';
import { ActualizarDatosComponent } from './actualizar-datos/actualizar-datos.component';
const routes: Routes = [
   {
      path: 'login',
      component: LoginComponent,
   },
   {
      path: 'register',
      component: RegisterComponent
   },
   {
      path: 'carrera-lista',
      component: CarreraListaComponent,
      canActivate: [AuthGuardService]

   },
   {
      path: 'carrera-form',
      component: CarreraFormComponent,
      canActivate: [AuthGuardService]

   },
   {
      path: 'actualizar-datos',
      component: ActualizarDatosComponent,
      canActivate: [AuthGuardService]

   },
   {
      path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuardService]

   },
   {
      path: '**', redirectTo: 'home'
   }

];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
