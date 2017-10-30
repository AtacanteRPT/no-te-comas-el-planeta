import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import {Alternativa} from '../alternativa'
import {AlternativaService} from '../alternativa.service'
import {GeneralService} from '../general.service'
@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  alternativa: Alternativa;
  constructor(
    private alternativaService: AlternativaService,
    private route: ActivatedRoute,
    private generalService : GeneralService,
    private location: Location

  ) {this.generalService.cargarScript();}

  ngOnInit(){

    this.generalService.cargarScript();
    console.log('entrnado a receta ')
    this.alternativaService.alternativas.forEach(element => {
      // if(element.id == ){

      // }

    });

    this.route.params
      .switchMap((params: Params) => {
        console.log(params['id'])
        return this.alternativaService.getAlterativa(params['id'])})
      .subscribe(data =>{
        this.generalService.cargarScript();
         this.alternativa = data
         console.log('parametro nav : '+ data);});
  }

  // save(): void {
  //   this.heroService.update(this.hero)
  //     .then(() => this.goBack());
  // }

  goBack(): void {
    this.location.back();
  }

}

