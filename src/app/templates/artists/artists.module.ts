import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsComponent } from './artists.component';
import { SharedModule } from '../shared';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ArtistsRoutingModule,
    SharedModule,
    LazyLoadImageModule,
  ],
  declarations: [ArtistsComponent],
})
export class ArtistsModule {}
