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
import { ProrrogaComponent } from './components/prorroga/prorroga.component';
import { DefensaComponent } from './components/defensa/defensa.component';
import { InformeRevisorComponent } from './components/gestion-proyecto2/informe-revisor/informe-revisor.component';
import { CargaDocsFinalProComponent } from './components/gestion-proyecto2/carga-docs-final-pro/carga-docs-final-pro.component';
import { RegistroNotasComponent } from './components/gestion-proyecto2/registro-notas/registro-notas.component';
import { ModificacionRevisorComponent } from './components/gestion-proyecto2/modificacion-revisor/modificacion-revisor.component';
import { FallaFechaEntregaComponent } from './components/gestion-proyecto2/falla-fecha-entrega/falla-fecha-entrega.component';
import { RegistroFechaComponent } from './components/gestion-proyecto2/registro-fecha/registro-fecha.component';

@NgModule({
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
    ProrrogaComponent,
    DefensaComponent,
    InformeRevisorComponent,
    CargaDocsFinalProComponent,
    RegistroNotasComponent,
    ModificacionRevisorComponent,
    FallaFechaEntregaComponent,
    RegistroFechaComponent
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
