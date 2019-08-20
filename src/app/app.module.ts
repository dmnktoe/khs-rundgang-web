import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { environment } from '@env/environment';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: environment.socketio,
  options: {}
};

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal'
};

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
    AppRoutingModule // must be imported as the last module as it contains the fallback route,
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
