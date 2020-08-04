import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  ErrorHandler,
  Injectable,
  APP_INITIALIZER,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@app/core';
import { TimeagoModule } from 'ngx-timeago';
import { SharedModule } from '@app/shared';
import { SvgIconsModule } from '@ngneat/svg-icon';
/* VIEWS */
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ImprintModule } from './imprint/imprint.module';
import { PrivacyModule } from './privacy/privacy.module';
import { ChangelogModule } from './changelog/changelog.module';
import { LicensesModule } from './licenses/licenses.module';
import { RecordingsModule } from './recordings/recordings.module';
import { ScheduleModule } from '@app/schedule/schedule.module';
import { SearchModule } from './search/search.module';
import { ShellModule } from './shell/shell.module';
import { ShowsModule } from './shows/shows.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgAisModule } from 'angular-instantsearch';
import { HttpCacheInterceptorModule } from '@ngneat/cashew';

/* Services */
import { UiStyleToggleService } from '@app/services/ui-style-toggle.service';
import { StorageService } from '@app/services/local-storage.service';

/* Analytics */
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { environment } from '@env/environment';
import * as Sentry from '@sentry/browser';

/* Icons */
import icons from '../assets/svg/svg-icons';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
};

export function themeFactory(themeService: UiStyleToggleService) {
  return () => themeService.setThemeOnStart();
}

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {
    Sentry.init({
      dsn: 'https://e0e35bbbc12a4eb8a6d6f04aa2481a1d@sentry.io/1724269',
      environment: environment.environment,
      release: environment.version,
      enabled: true,
      ignoreErrors: [
        'ERR_CONNECTION_REFUSED',
        'Es is',
        'Es ist ein Fehler aufgetreten',
      ],
    });
  }
  handleError(error: any) {
    Sentry.captureException(error.originalError || error);
    console.error(error);
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
    }),
    FormsModule,
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot(),
    TranslateModule.forRoot(),
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    ImprintModule,
    PrivacyModule,
    ChangelogModule,
    LicensesModule,
    RecordingsModule,
    ShowsModule,
    AboutModule,
    SearchModule,
    ScheduleModule,
    Angulartics2Module.forRoot(),
    SwiperModule,
    NgAisModule.forRoot(),
    TimeagoModule.forRoot(),
    LazyLoadImageModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route,
  ],
  declarations: [AppComponent],
  providers: [
    UiStyleToggleService,
    StorageService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    {
      provide: ErrorHandler,
      useClass: SentryErrorHandler,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: themeFactory,
      deps: [UiStyleToggleService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
