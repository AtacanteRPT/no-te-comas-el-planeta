import { Component, OnInit } from '@angular/core';
import { GeneralService } from "app/general.service";

@Component({
  selector: 'app-cordero',
  templateUrl: './cordero.component.html',
  styleUrls: ['./cordero.component.css']
})
export class CorderoComponent implements OnInit {

   constructor(private generalService: GeneralService) {

  }

  ngOnInit() {
    this.generalService.cargarScript();
  }

}

