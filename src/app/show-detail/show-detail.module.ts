import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ShowDetailRoutingModule } from './show-detail-routing.module';
import { ShowDetailComponent } from '@app/show-detail/show-detail.component';
import { ApiService } from '../core/api.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ShowDetailRoutingModule,
    NgxSkeletonLoaderModule
  ],
  declarations: [ShowDetailComponent],
  providers: [ApiService]
})
export class ShowDetailModule {}
