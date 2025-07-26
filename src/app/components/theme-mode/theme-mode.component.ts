import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LocalStorageService } from '../../services/local-storage.service';
import { THEME_MODE_KEY } from '../../utils/constants';
import { ThemeModeEnum } from '../../utils/themeMode.enum';

@Component({
  selector: 'lp-theme-mode',
  imports: [MatButtonModule, MatIconModule, MatDividerModule],
  providers: [LocalStorageService],
  templateUrl: './theme-mode.component.html',
  styleUrl: './theme-mode.component.scss',
})
export class ThemeModeComponent implements OnInit {
  localStorageService = inject(LocalStorageService);
  themeMode = signal<string>(ThemeModeEnum.darkTheme);
  isLightMode = ThemeModeEnum.lightTheme;

  @HostListener('window:resize')
  onResize() {
    this.ngOnInit();
  }

  public ngOnInit(): void {
    this.themeMode.set(this.getThemeMode() ?? this.themeMode());
    this.localStorageService.set(THEME_MODE_KEY, this.themeMode());
  }

  public onClick(): void {
    this.themeMode.update((currentValue) =>
      currentValue === ThemeModeEnum.lightTheme
        ? ThemeModeEnum.darkTheme
        : ThemeModeEnum.lightTheme
    );

    this.localStorageService.set(THEME_MODE_KEY, this.themeMode());
  }

  public getThemeMode(): string | null {
    return this.localStorageService.get(THEME_MODE_KEY);
  }
}
