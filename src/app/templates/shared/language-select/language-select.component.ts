import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { finalize } from 'rxjs/operators';
import { I18nService } from '@app/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit {
  availableLanguages: any;
  isLoading = false;

  constructor(
    private apiService: ApiService,
    private i18nService: I18nService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.apiService
      .getLanguages()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((languages) => {
        this.availableLanguages = languages;
      });
  }

  setLanguage(language: string) {
    language = language.toUpperCase();
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
}
