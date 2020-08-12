import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

import { CoreModule } from '../../core';
import { SharedModule } from '../../shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ApiService } from '../../core/services/api.service';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { RecordingsModule } from '../recordings/recordings.module';
import { ShowsModule } from '../shows/shows.module';
import { ScheduleModule } from '../schedule/schedule.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    SwiperModule,
    RecordingsModule,
    ShowsModule,
    ScheduleModule,
  ],
  declarations: [HomeComponent],
  providers: [ApiService, Title],
})
export class HomeModule {}
