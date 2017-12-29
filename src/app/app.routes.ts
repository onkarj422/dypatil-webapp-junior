import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AcademicsComponent } from './academics/academics.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'academics', component: AcademicsComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' }
];
