import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

import { CoreModule } from '@app/core';
import { SharedModule } from '../shared';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { ApiService } from '@app/core/services/api.service';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Angulartics2Module } from 'angulartics2';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SvgIconsModule } from '@ngneat/svg-icon';
import icons from '../../../assets/svg/svg-icons';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    BlogRoutingModule,
    SwiperModule,
    LazyLoadImageModule,
    Angulartics2Module,
    TooltipModule,
    SvgIconsModule.forRoot({
      icons,
    }),
  ],
  declarations: [BlogComponent, BlogSingleComponent, BlogListComponent],
  exports: [BlogListComponent],
  providers: [ApiService, Title],
})
export class BlogModule {}
