import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FechaEntregaFinalComponent } from './components/fecha-entrega-final/fecha-entrega-final.component';
import { CargaDocumentoFinalComponent } from './components/carga-documento-final/carga-documento-final.component';
import { ModificacionRevisorComponent } from './components/modificacion-revisor/modificacion-tutor.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    FechaEntregaFinalComponent,
    CargaDocumentoFinalComponent,
    ModificacionRevisorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
