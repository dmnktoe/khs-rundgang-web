import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { RecordingsRoutingModule } from './recordings-routing.module';
import { RecordingsComponent } from './recordings.component';
import { ApiService } from '../core/api.service';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    RecordingsRoutingModule,
    SwiperModule,
    NgxSkeletonLoaderModule
  ],
  declarations: [RecordingsComponent],
  providers: [ApiService, Title]
})
export class RecordingsModule {}
