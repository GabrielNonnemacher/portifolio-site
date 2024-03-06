import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainButtonComponent } from './main-button/main-button.component';
import { SocialMediaButtonsComponent } from './social-media-buttons/social-media-buttons.component';
import { SubmitComponent } from './submit/submit.component';
import { NavigateInitComponent } from './navigate-init/navigate-init.component';

@NgModule({
  declarations: [
    MainButtonComponent,
    SocialMediaButtonsComponent,
    SubmitComponent,
    NavigateInitComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainButtonComponent,
    SocialMediaButtonsComponent,
    NavigateInitComponent
  ]
})
export class ButtonsModule {}
