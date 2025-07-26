import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GLOBAL_TEXTS } from '../../assets/translation/pt-br';
import { InformationLink } from '../../interfaces/informationLink.interface';
import { LinkButtonComponent } from '../buttons/link-button/link-button.component';
import { ThemeModeComponent } from '../theme-mode/theme-mode.component';

@Component({
  selector: 'lp-sidebar',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
    LinkButtonComponent,
    ThemeModeComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  private readonly document = inject(DOCUMENT);
  private platformId: Object = inject(PLATFORM_ID);
  protected readonly texts = GLOBAL_TEXTS;
  open = signal<boolean>(false);
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

  ngOnInit(): void {
    this.checkWindowSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkWindowSize();
  }

  checkWindowSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      const width = window?.innerWidth;

      if (width > 960) {
        this.open.set(false);
        this.document.body.style.overflow = '';
      }
    }
  }

  public toggle(): void {
    this.open.update((state) => !state);

    if (this.open()) {
      this.document.body.style.overflow = 'hidden';
    } else {
      this.document.body.style.overflow = '';
    }
  }
}
