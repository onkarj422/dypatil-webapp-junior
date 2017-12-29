import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})  
export class AcademicsComponent implements OnInit {
  
  constructor() {
    
   }

  ngOnInit() {
    
  }

  scrollTo(name: string) {
    let e;
    if (name == "bcom") {
      e = <HTMLElement>document.getElementById("bcom");
      e.scrollIntoView();
    } else if (name == "bsc") {
      e = <HTMLElement>document.getElementById("bsc");
      e.scrollIntoView();
    } else if (name == "bca") {
      e = <HTMLElement>document.getElementById("bca");
      e.scrollIntoView();
    }     
  }  
}

