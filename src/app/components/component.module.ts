import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule } from './buttons/buttons.module';
import { HeaderComponent } from './header/header.component';
import { NavHeaderDesktopComponent } from './nav-header-desktop/nav-header-desktop.component';
import { NavHeaderMobileComponent } from './nav-header-mobile/nav-header-mobile.component';
import { FooterComponent } from './footer/footer.component';
import { CardSkillComponent } from './card-skill/card-skill.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { TextareaComponent } from './inputs/textarea/textarea.component';
import { TextComponent } from './inputs/text/text.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavHeaderDesktopComponent,
    NavHeaderMobileComponent,
    FooterComponent,
    CardSkillComponent,
    FormContactComponent,
    TextareaComponent,
    TextComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports: [
    HeaderComponent,
    ButtonsModule,
    FooterComponent,
    CardSkillComponent
  ]
})
export class ComponentModule {}
