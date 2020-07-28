import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { RecordingsRoutingModule } from './recordings-routing.module';
import { RecordingsComponent } from '@app/recordings/recordings.component';
import { RecordingsGalleryComponent } from './recordings-gallery/recordings-gallery.component';
import { RecordingsSingleComponent } from './recordings-single/recordings-single.component';
import { ApiService } from '../core/api.service';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Angulartics2Module } from 'angulartics2';
import { TooltipModule } from 'ng2-tooltip-directive';
import { FeatherModule } from 'angular-feather';
import { RecordingsSlideshowComponent } from './recordings-slideshow/recordings-slideshow.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    RecordingsRoutingModule,
    SwiperModule,
    LazyLoadImageModule,
    Angulartics2Module,
    TooltipModule,
    FeatherModule,
  ],
  declarations: [
    RecordingsComponent,
    RecordingsGalleryComponent,
    RecordingsSingleComponent,
    RecordingsSlideshowComponent,
  ],
  exports: [RecordingsGalleryComponent, RecordingsSlideshowComponent],
  providers: [ApiService, Title],
})
export class RecordingsModule {}
