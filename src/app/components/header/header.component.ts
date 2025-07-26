import { Component, inject, input, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { GLOBAL_TEXTS } from '../../assets/translation/pt-br';
import { InformationLink } from '../../interfaces/informationLink.interface';
import { LocalStorageService } from '../../services/local-storage.service';
import { LinkButtonComponent } from '../buttons/link-button/link-button.component';
import { ThemeModeComponent } from '../theme-mode/theme-mode.component';

@Component({
  selector: 'lp-header',
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    LinkButtonComponent,
    ThemeModeComponent,
    RouterLink,
  ],
  providers: [LocalStorageService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly texts = GLOBAL_TEXTS;

  localStorageService = inject(LocalStorageService);
  isOpenSidebar = input<boolean | undefined>();
  clickSidebar = output();

  listLinks = signal<InformationLink[]>([
    {
      url: 'about',
      description: 'Sobre mim',
      ariaLabel: 'Click here to go the About section',
    },
    {
      url: 'skills',
      description: 'Especialidades',
      ariaLabel: 'Click here to go the Skills section',
    },
    {
      url: 'tools',
      description: 'Ferramentas',
      ariaLabel: 'Click here to go the Tools section',
    },
    {
      url: 'experiences',
      description: 'Esperiências',
      ariaLabel: 'Click here to go the Experiences section',
    },
  ]);

  public openSidebar(): void {
    this.clickSidebar.emit();
  }
}
