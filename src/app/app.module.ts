import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ButtonHeaderComponent } from './components/button-header/button-header.component';
import { HomeComponent } from './components/home/home.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonFooterComponent } from './components/button-footer/button-footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BoxProjectsComponent } from './components/box-projects/box-projects.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonHeaderComponent,
    HomeComponent,
    CertificatesComponent,
    FooterComponent,
    ButtonFooterComponent,
    ProjectsComponent,
    BoxProjectsComponent,
    ImageSliderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
