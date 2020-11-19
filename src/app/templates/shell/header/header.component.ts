import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { I18nService } from '@app/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isNavVisible = false;
  isLanguagePickerVisible = false;
  now: number;
  status: any;
  isLoading = false;

  constructor(
    private router: Router,
    private i18nService: I18nService,
    private apiService: ApiService
  ) {
    setInterval(() => {
      this.now = Date.now();
    }, 10);
  }

  toggleNav() {
    this.isNavVisible = !this.isNavVisible;
  }

  closeNav() {
    this.isNavVisible = false;
  }

  toggleLanguagePicker() {
    this.isLanguagePickerVisible = !this.isLanguagePickerVisible;
  }

  ngOnInit() {
    this.apiService
      .getStatus()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((status) => {
        this.status = status.status;
      });
  }

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
