import { Component, OnInit } from '@angular/core';
import { GeneralService } from "app/general.service";
import {UsuarioService} from 'app/usuario.service';
import {Usuario} from '../usuario'

@Component({
  selector: 'app-app-conocenos',
  templateUrl: './app-conocenos.component.html',
  styleUrls: ['./app-conocenos.component.css']
})
export class AppConocenosComponent implements OnInit {

  usuarios : Usuario[];
  constructor(private generalService: GeneralService, private usuarioService:UsuarioService) {

  }

  isLoged = 'falsehth';
  ngOnInit() {
    this.generalService.cargarScript();

  }

  mostrarUsuarios(){
    this.usuarioService.getUsuarios().subscribe(data=>this.usuarios = data);
  }

}

