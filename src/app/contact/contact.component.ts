import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat: number = 18.621148;
  lng: number = 73.822776;
  
  constructor() { }

  ngOnInit() {
  }

}
