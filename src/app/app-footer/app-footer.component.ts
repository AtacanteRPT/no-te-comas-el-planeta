import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onNavigate() {
    //this.router.navigateByUrl("https://www.google.com");
    //window.location.href="https://www.google.com";

    window.open("https://www.google.com", "_blank");
  }

  goFacebook() {
    //this.router.navigateByUrl("https://www.google.com");
    //window.location.href="https://www.google.com";

    window.open("https://www.facebook.com/noTeComasElPlaneta/?ref=br_rs", "_blank");
  }

  goTwiter() {
    //this.router.navigateByUrl("https://www.google.com");
    //window.location.href="https://www.google.com";

    window.open("https://twitter.com/noComasLplaneta", "_blank");
  }

}

