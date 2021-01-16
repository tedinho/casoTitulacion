import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CarreraListaComponent } from './carrera-lista/carrera-lista.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarreraFormComponent } from './carrera-form/carrera-form.component';
import { IngresoProcesoComponent } from './components/ingreso-proceso/ingreso-proceso.component';
import { GestionAnteproyectoComponent } from './components/gestion-anteproyecto/gestion-anteproyecto.component';
import { AprobacionAnteproyectoComponent } from './components/aprobacion-anteproyecto/aprobacion-anteproyecto.component';
import { GestionProyectoComponent } from './components/gestion-proyecto/gestion-proyecto.component';
import { GestionProyecto2Component } from './components/gestion-proyecto2/gestion-proyecto2.component';
import { ProrrogaComponent } from './components/prorroga/prorroga.component';
import { DefensaComponent } from './components/defensa/defensa.component';
import { ActualizarDatosComponent } from './actualizar-datos/actualizar-datos.component';
import { EstudianteCarreraComponent } from './estudiante-carrera/estudiante-carrera.component';
import { NavBarComponent } from './components/shared/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './components/shared/shared/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideBarComponent } from './components/shared/shared/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    CarreraListaComponent,
    CarreraFormComponent,
    IngresoProcesoComponent,
    GestionAnteproyectoComponent,
    AprobacionAnteproyectoComponent,
    GestionProyectoComponent,
    GestionProyecto2Component,
    ProrrogaComponent,
    DefensaComponent,
    ActualizarDatosComponent, FooterComponent,
    EstudianteCarreraComponent,
    DashboardComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
