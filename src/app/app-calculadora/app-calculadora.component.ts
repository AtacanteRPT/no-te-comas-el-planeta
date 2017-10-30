import { Component, OnInit } from '@angular/core';
import { AlternativaService } from "app/alternativa.service";
import { Alternativa } from "app/alternativa";
import { GeneralService } from '../general.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-app-calculadora',
  templateUrl: './app-calculadora.component.html',
  styleUrls: ['./app-calculadora.component.css']
})

export class AppCalculadoraComponent implements OnInit {

  private nroRango:number=50;
  agua=2000;

  valor=0;

  tierra:number=0;
  metano:number=0;
//  arboles:number;

  litrosPorVaca=94125;
  gramosPorVaca=100000;
  litrosPorPollo=2;
  gramosPorPollo=750;
  litrosPorCerdo=3000;
  gramosPorCerdo=90000;
  litrosPorCordero=900;
  gramosPorCordero=50000;

  metanoEmitidoVaca=530.6;
  metanoEmitidoPollo=110.17;
  metanoEmitidoCerdo=177.82;
  metanoEmitidoCordero=316.69;

  territorioOcupadoVaca=0.002500;
  territorioOcupadoCerdo=0.000800;
  territorioOcupadoCordero=0.000500;
  territorioOcupadoPollo=0.000100;

    // devices = 'one two three'.split(' ');
    animal = 'res';

deviceObjects = [{name: 1}, {name: 2}, {name: 3}];
  selectedDeviceObj = this.deviceObjects[1];
  //constructor() { console.clear(); }

  onChange(newValue) {
    console.log(newValue);
    this.animal = newValue;
    // ... do other stuff here ...
  }

  onChangeObj(newObj) {
    console.log(newObj);
    this.selectedDeviceObj = newObj;
    // ... do other stuff here ...
  }

//onChange(value: string) {
//    console.log(value);

//}

  alternativas: Alternativa[];
  otras: Alternativa[];
   constructor(private generalService : GeneralService, private router: Router, private alternativaSerive:AlternativaService){}

  ngOnInit() {
    this.generalService.cargarScript();

    this.alternativaSerive.cargarAlternativas().subscribe(data => {
      this.alternativas = data as Alternativa[]
    });

  }

  goReceta(alternativa: Alternativa){
    this.router.navigate(['/receta', alternativa.id]);
  }

  cambioBuscar(dato){
    console.log(dato)
  }

    cambioRango(value: number) { 

      this.valor=value;

    if (this.animal=='res') {
      this.agua=(this.litrosPorVaca*value)/this.gramosPorVaca;
      this.metano=(this.metanoEmitidoVaca*(value/1000))
      this.tierra=(this.territorioOcupadoVaca*(value/1000))

    } else 
    {
      if (this.animal=='pollo') {
      this.agua=(this.litrosPorPollo*value)/this.gramosPorPollo;
      this.metano=(this.metanoEmitidoPollo*(value/1000))
      this.tierra=(this.territorioOcupadoPollo*(value/1000))
      }

      else {
        if (this.animal=='cerdo') 
        {
        this.agua=(this.litrosPorCerdo*value)/this.gramosPorCerdo;
        this.metano=(this.metanoEmitidoCerdo*(value/1000))
        this.tierra=(this.territorioOcupadoCerdo*(value/1000))  
        }

        else 
        {
          if (this.animal=='cordero')
           {
            this.agua=(this.litrosPorCordero*value)/this.gramosPorCordero
            this.metano=(this.metanoEmitidoCordero*(value/1000))
            this.tierra=(this.territorioOcupadoCordero*(value/1000))
           }

         }

      }

    }

  }

}

