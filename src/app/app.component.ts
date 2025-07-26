import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  viewChild,
} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './pages/about/about.component';
import { ApresentationComponent } from './pages/apresentation/apresentation.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { LocalStorageService } from './services/local-storage.service';
import { THEME_MODE_KEY } from './utils/constants';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    SidebarComponent,
    AboutComponent,
    ApresentationComponent,
    ExperiencesComponent,
    SkillsComponent,
    ToolsComponent,
    FooterComponent,
    MatSidenavModule,
  ],
  providers: [LocalStorageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  localStorageService = inject(LocalStorageService);
  changesDetector = inject(ChangeDetectorRef);
  sidebar = viewChild<SidebarComponent>(SidebarComponent);

  public ngAfterViewInit(): void {
    this.changesDetector.detectChanges();
  }

  public getThemeMode(): string {
    return this.localStorageService.get(THEME_MODE_KEY) ?? '';
  }

  public openSidebar(): void {
    this.sidebar()?.toggle();
  }
}
