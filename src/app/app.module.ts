import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { AppCalculadoraComponent } from './app-calculadora/app-calculadora.component';
import { AppAcercaNosotrosComponent } from './app-acerca-nosotros/app-acerca-nosotros.component';
import { AppConocenosComponent } from './app-conocenos/app-conocenos.component';
import { AppContactanosComponent } from './app-contactanos/app-contactanos.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppMapaComponent } from './app-mapa/app-mapa.component';

// ********  servicios

import {GeneralService } from './general.service'
import {UsuarioService} from './usuario.service'
import {AlternativaService} from './alternativa.service';
import {UsuarioGuard} from './usuario.guard';

import { CrearRecetaComponent } from './crear-receta/crear-receta.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component'

// ************ otros *******
import { ReactiveFormsModule } from '@angular/forms';

import { CerdoComponent } from './cerdo/cerdo.component';
import { CorderoComponent } from './cordero/cordero.component';
import { PolloComponent } from './pollo/pollo.component';
import { ResComponent } from './res/res.component';
import { RecetaComponent } from './receta/receta.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCalculadoraComponent,
    AppAcercaNosotrosComponent,
    AppConocenosComponent,
    AppContactanosComponent,
    AppFooterComponent,

    AppMapaComponent,
    CrearRecetaComponent,
    LoginComponent,
    RegistroComponent,

    CerdoComponent,
    CorderoComponent,
    PolloComponent,
    ResComponent,
    RecetaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
     ReactiveFormsModule, 
     JsonpModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    ReactiveFormsModule
  ],
  providers: [
    GeneralService,
    UsuarioService,
    AlternativaService,
    UsuarioGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

