import { Component, OnInit } from '@angular/core';
import { GeneralService } from "app/general.service";

@Component({
  selector: 'app-app-contactanos',
  templateUrl: './app-contactanos.component.html',
  styleUrls: ['./app-contactanos.component.css']
})
export class AppContactanosComponent implements OnInit {

   constructor(private generalService: GeneralService) {

  }

  ngOnInit() {
    this.generalService.cargarScript();
  }

   onNavigate(){
        //this.router.navigateByUrl("https://www.google.com");
        //window.location.href="https://www.google.com";

        window.open("https://www.google.com", "_blank");
    }

    goFacebook(){
        //this.router.navigateByUrl("https://www.google.com");
        //window.location.href="https://www.google.com";

        window.open("https://www.facebook.com/noTeComasElPlaneta/?ref=br_rs", "_blank");
    }

    goTwiter(){
        //this.router.navigateByUrl("https://www.google.com");
        //window.location.href="https://www.google.com";

        window.open("https://twitter.com/noComasLplaneta", "_blank");
    }

}

