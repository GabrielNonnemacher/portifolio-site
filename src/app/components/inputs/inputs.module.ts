import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextComponent } from './text/text.component';
import { TextAreaComponent } from './text-area/text-area.component';

@NgModule({
  declarations: [
    TextComponent,
    TextAreaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextComponent,
    TextAreaComponent
  ]
})
export class ButtonsModule {}
