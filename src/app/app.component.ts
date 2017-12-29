import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  componentName: string; 
  constructor(private router: Router) {    
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        if (event.url == "" || event.url == "/" || event.url == "/home") {
          this.setTitle("HOME");
        } else if (event.url == "/about") {
          this.setTitle("ABOUT");
        } else if (event.url == "/academics") {
          this.setTitle("ACADEMICS");
        } else if (event.url == "/contact") {
          this.setTitle("REACH US");
        }
      }
    });
  }
  
  ngOnInit() {
    
  }
  
  setTitle(name: string) {
      this.componentName = name;
  }
}
