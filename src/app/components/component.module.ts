import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule } from './buttons/buttons.module';
import { CardSkillComponent } from './card-skill/card-skill.component';
import { FooterComponent } from './footer/footer.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { HeaderComponent } from './header/header.component';
import { TextComponent } from './inputs/text/text.component';
import { NavHeaderDesktopComponent } from './nav-header-desktop/nav-header-desktop.component';
import { NavHeaderMobileComponent } from './nav-header-mobile/nav-header-mobile.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavHeaderDesktopComponent,
    NavHeaderMobileComponent,
    FooterComponent,
    CardSkillComponent,
    FormContactComponent,
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
