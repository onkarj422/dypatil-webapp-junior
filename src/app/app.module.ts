import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AcademicsComponent } from './academics/academics.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { ContactComponent } from './contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { AdmissionComponent } from './admission/admission.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AcademicsComponent,
    ContactComponent,
    AdmissionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    RouterModule.forRoot(routes),
    NgxGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARiZMGTkY--D6GzAL4RaT3ChMaqylcBlY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
