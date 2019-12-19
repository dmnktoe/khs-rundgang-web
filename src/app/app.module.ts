import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ShowsModule } from './shows/shows.module';
import { ShowDetailModule } from './show-detail/show-detail.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { SearchModule } from './search/search.module';
import { ScheduleModule } from '@app/schedule/schedule.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IconsModule } from '@app/shared/icons/icons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgAisModule } from 'angular-instantsearch';
import { NgxAnalyticsModule } from 'ngx-analytics';
import { NgxAnalyticsGoogleAnalytics } from 'ngx-analytics/ga';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { DataService } from '@app/shared/listen.service';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AudioContextModule } from 'angular-audio-context';
import { environment } from '@env/environment';
import * as Sentry from '@sentry/browser';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: environment.socketio,
  options: {}
};

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal'
};

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {
    Sentry.init({
      dsn: 'https://493ca8135c0c43719f7605e14a5d3c63@sentry.io/1862721',
      environment: environment.environment,
      release: environment.version,
      enabled: true,
      /* blacklistUrls: ['http://localhost:8080'],
      whitelistUrls: ['http://localhost:4200'], */
      beforeSend(event: any, hint: any) {
        // Check if it is an exception, and if so, show the report dialog
        if (event.exception) {
          Sentry.showReportDialog({ eventId: event.event_id });
        }
        return event;
      }
    });
  }

  handleError(error: any) {
    Sentry.captureException(error.originalError || error);
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production
    }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    ShowsModule,
    ShowDetailModule,
    AboutModule,
    SearchModule,
    ScheduleModule,
    LoginModule,
    SocketIoModule.forRoot(config),
    NgxAnalyticsModule.forRoot([NgxAnalyticsGoogleAnalytics]),
    SwiperModule,
    NgAisModule.forRoot(),
    IconsModule,
    NgxSkeletonLoaderModule,
    AudioContextModule.forRoot('balanced'),
    AppRoutingModule // must be imported as the last module as it contains the fallback route,
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    {
      provide: ErrorHandler,
      useClass: SentryErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
