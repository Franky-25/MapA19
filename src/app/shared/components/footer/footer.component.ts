import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styles: [
    `
    cursor: pointer;

    `
  ]
})
export class FooterComponent {

  fecha = new Date().getFullYear();

  redirectToFacebook() {
    window.open('https://es-la.facebook.com/', '_blank');
  }

  redirecToYouToBe() {
    window.open('https://www.youtube.com/', '_blank');
  }

  redircToTwiter() {
    window.open('https://twitter.com/', '_blank');
  }
}


