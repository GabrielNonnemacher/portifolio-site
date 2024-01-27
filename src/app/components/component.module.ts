import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule } from './buttons/buttons.module';
import { HeaderComponent } from './header/header.component';
import { NavHeaderDesktopComponent } from './nav-header-desktop/nav-header-desktop.component';
import { NavHeaderMobileComponent } from './nav-header-mobile/nav-header-mobile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavHeaderDesktopComponent,
    NavHeaderMobileComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports: [
    HeaderComponent,
    ButtonsModule
  ]
})
export class ComponentModule {}
