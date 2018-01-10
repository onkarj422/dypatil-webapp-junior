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
    if (name == "science") {
      e = <HTMLElement>document.getElementById("science");
      e.scrollIntoView();
    } else if (name == "commerce") {
      e = <HTMLElement>document.getElementById("commerce");
      e.scrollIntoView();
    } else if (name == "arts") {
      e = <HTMLElement>document.getElementById("arts");
      e.scrollIntoView();
    }
  }
}
