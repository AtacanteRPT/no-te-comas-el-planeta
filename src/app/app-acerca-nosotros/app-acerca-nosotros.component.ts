import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { GeneralService } from '../general.service'
import { Usuario } from '../usuario';
@Component({
  selector: 'app-app-acerca-nosotros',
  templateUrl: './app-acerca-nosotros.component.html',
  styleUrls: ['./app-acerca-nosotros.component.css']
})
export class AppAcercaNosotrosComponent implements OnInit {

  estaLogueado: boolean =false;
  usuario: Usuario;
  constructor(private generalService: GeneralService) {

  }

  ngOnInit() {
    this.generalService.cargarScript();

    this.generalService.estaAuntetificado().subscribe(data=> this.usuario = data)
    this.estaLogueado= this.generalService.estaLogueado;
    console.log('acerca de nosotros : '+ this.generalService.estaLogueado);
    console.log('acerca de nosotros : '+ this.estaLogueado);

  }

}

