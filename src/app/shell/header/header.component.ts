import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { I18nService } from '@app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isNavVisible = false;

  constructor(private router: Router, private i18nService: I18nService) {}

  toggleNav() {
    this.isNavVisible = !this.isNavVisible;
  }

  ngOnInit() {}

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
}
