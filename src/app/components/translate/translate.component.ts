import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Language } from '../../interfaces/language.interface';
import { LocalStorageService } from '../../services/local-storage.service';
import {
  LANGUAGE_KEY,
  TRANSLATION_KEY,
  TRANSLATIONS_STRINGS,
} from '../../utils/constants';

@Component({
  selector: 'lp-translate',
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule],
  providers: [LocalStorageService],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.scss',
})
export class TranslateComponent implements OnInit {
  localStorageService = inject(LocalStorageService);
  listLanguages = signal<Language[]>([
    {
      id: 'USA',
      text: 'English',
    },
    {
      id: 'BRL',
      text: 'Português',
    },
  ] as Language[]);

  defaultLanguage = {
    id: 'BRL',
    text: 'Português',
  };

  language = signal<string>(this.defaultLanguage.id);

  public ngOnInit(): void {
    this.language.set(this.getLanguage()?.id ?? this.defaultLanguage.id);
    this.localStorageService.set(LANGUAGE_KEY, this.language());
    this.localStorageService.set(
      TRANSLATION_KEY,
      JSON.stringify(TRANSLATIONS_STRINGS[this.language()])
    );
  }

  public onClick(id: string): void {
    this.language.set(id);
    this.localStorageService.set(LANGUAGE_KEY, id);
    this.localStorageService.set(
      TRANSLATION_KEY,
      JSON.stringify(TRANSLATIONS_STRINGS[this.language()])
    );
    window.location.reload();
  }

  public getLanguage(): Language | undefined {
    return this.listLanguages()?.find(
      (item) => this.localStorageService.get(LANGUAGE_KEY) === item.id
    );
  }
}
