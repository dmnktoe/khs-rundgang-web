import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ApiService } from '@app/core/api.service';
import { LimitPipe } from '@app/shared/pipes/LimitPipe';
import { SafeHtmlPipe } from '@app/shared/pipes/SafeHtmlPipe';
import { MomentPipe } from '@app/shared/pipes/MomentPipe';
import { TimeagoModule } from 'ngx-timeago';
import { PlayerComponent } from './player/player.component';
import { RouterModule } from '@angular/router';
import { LiveComponent } from './live/live.component';
import { TextSeperatorComponent } from './text-seperator/text-seperator.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import icons from '../../assets/svg/svg-icons';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SvgIconsModule.forRoot({
      icons,
    }),
    Ng5SliderModule,
  ],
  declarations: [
    LoaderComponent,
    SafeHtmlPipe,
    LimitPipe,
    MomentPipe,
    PlayerComponent,
    LiveComponent,
    TextSeperatorComponent,
    PageTitleComponent,
    DarkModeToggleComponent,
  ],
  exports: [
    LoaderComponent,
    SafeHtmlPipe,
    LimitPipe,
    MomentPipe,
    TimeagoModule,
    PlayerComponent,
    LiveComponent,
    TextSeperatorComponent,
    PageTitleComponent,
    DarkModeToggleComponent,
  ],
  providers: [ApiService],
})
export class SharedModule {}
