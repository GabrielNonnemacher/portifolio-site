import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainButtonComponent } from './main-button/main-button.component';
import { SocialMediaButtonsComponent } from './social-media-buttons/social-media-buttons.component';
import { SubmitComponent } from './submit/submit.component';

@NgModule({
  declarations: [
    MainButtonComponent,
    SocialMediaButtonsComponent,
    SubmitComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainButtonComponent,
    SocialMediaButtonsComponent
  ]
})
export class ButtonsModule {}
