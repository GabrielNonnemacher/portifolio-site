import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentModule } from '../components/component.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    AboutComponent,
    HomeComponent
  ]
})
export class ScreenModule {}
