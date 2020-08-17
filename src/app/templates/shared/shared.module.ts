import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ApiService } from '../../core/services/api.service';
import { LimitPipe } from '../../core/pipes/LimitPipe';
import { ReadingTimePipe } from '../../core/pipes/ReadingTimePipe';
import { SafeHtmlPipe } from '../../core/pipes/SafeHtmlPipe';
import { MomentPipe } from '../../core/pipes/MomentPipe';
import { TimeagoModule } from 'ngx-timeago';
import { PlayerComponent } from './player/player.component';
import { RouterModule } from '@angular/router';
import { LiveComponent } from './live/live.component';
import { TextSeperatorComponent } from './text-seperator/text-seperator.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import icons from '../../../assets/svg/svg-icons';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SvgIconsModule.forRoot({
      icons,
    }),
    LazyLoadImageModule,
  ],
  declarations: [
    LoaderComponent,
    SafeHtmlPipe,
    LimitPipe,
    ReadingTimePipe,
    MomentPipe,
    PlayerComponent,
    LiveComponent,
    TextSeperatorComponent,
    PageTitleComponent,
    DarkModeToggleComponent,
    PageBannerComponent,
  ],
  exports: [
    LoaderComponent,
    SafeHtmlPipe,
    LimitPipe,
    ReadingTimePipe,
    MomentPipe,
    TimeagoModule,
    PlayerComponent,
    LiveComponent,
    TextSeperatorComponent,
    PageTitleComponent,
    DarkModeToggleComponent,
    PageBannerComponent,
  ],
  providers: [ApiService],
})
export class SharedModule {}
