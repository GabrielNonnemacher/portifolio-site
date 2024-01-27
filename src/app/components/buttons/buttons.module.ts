import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainButtonComponent } from './main-button/main-button.component';

@NgModule({
  declarations: [
    MainButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainButtonComponent
  ]
})
export class ButtonsModule { }
