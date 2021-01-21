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
import { NavbarComponent } from './components/shared/navbar/navbar.component';
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
import { AnteproyectoFormComponent } from './components/aprobacion-anteproyecto/anteproyecto-form/anteproyecto-form.component';
import { AnteproyectoListComponent } from './components/aprobacion-anteproyecto/anteproyecto-list/anteproyecto-list.component';
import { RubricaComponent } from './components/gestion-proyecto/rubrica/rubrica.component';
import { GuiasProyectoComponent } from './components/gestion-proyecto/guias-proyecto/guias-proyecto.component';
import { CronogramaComponent } from './components/gestion-proyecto/cronograma/cronograma.component';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');


@NgModule({
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    CarreraListaComponent,
    CarreraFormComponent,
    IngresoProcesoComponent,
    GestionAnteproyectoComponent,
    AprobacionAnteproyectoComponent,
    GestionProyectoComponent,
    GestionProyecto2Component,
    ProrrogaComponent,
    DefensaComponent,
    AnteproyectoFormComponent,
    AnteproyectoListComponent,
    RubricaComponent,
    GuiasProyectoComponent,
    CronogramaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
