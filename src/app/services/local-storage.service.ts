import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly localStorageHasValue = () =>
    typeof window === 'undefined' || !window?.localStorage;

  public get(key: string): string | null {
    if (this.localStorageHasValue()) return '';
    return localStorage.getItem(key);
  }

  public set(key: string, param: string): void {
    if (this.localStorageHasValue()) return;
    localStorage.setItem(key, param);
  }
}
