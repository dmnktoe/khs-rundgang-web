import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  AuthenticationService,
  CredentialsService,
  I18nService
} from '@app/core';
import { finalize } from 'rxjs/operators';
import { RadioDataService } from '@app/shared/radiodata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  currentShow = '';
  isLoading = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private i18nService: I18nService,
    private radioDataService: RadioDataService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.radioDataService
      .getCurrentShow()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(currentTrack => {
        console.log(currentTrack);
        this.currentShow = currentTrack;
      });
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService
      .logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }
}
