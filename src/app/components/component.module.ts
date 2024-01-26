import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonsModule } from './buttons/buttons.module';
import { MainButtonComponent } from './buttons/main-button/main-button.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ButtonsModule
  ]
})
export class ComponentModule {}
