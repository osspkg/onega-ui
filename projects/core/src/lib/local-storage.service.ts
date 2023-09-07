import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage?: Storage;

  constructor(@Inject('WINDOW') private readonly win: Window) {
    this.storage = this.win.localStorage || undefined;
  }

  clear(): void {
    this.storage?.clear();
  }

  get(key: string): string | null {
    return this.storage?.getItem(key) || null;
  }

  del(key: string): void {
    this.storage?.removeItem(key);
  }

  set(key: string, value: string): void {
    this.storage?.setItem(key, value);
  }
}
