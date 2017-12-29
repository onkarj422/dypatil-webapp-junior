import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  scrollTo(name: string) {
    let e;
    if (name == "about-sanstha") {
      e = <HTMLElement>document.getElementById("about-sanstha");
      e.scrollIntoView();
    } else if (name == "principal-desk") {
      e = <HTMLElement>document.getElementById("principal-desk");
      e.scrollIntoView();
    } else if (name == "about-college") {
      e = <HTMLElement>document.getElementById("about-college");
      e.scrollIntoView(); 
    } else if (name == "infrastructure") {
      e = <HTMLElement>document.getElementById("infrastructure");
      e.scrollIntoView();
    }       
  }
}
