import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { CoreModule } from '../../core';
import { SharedModule } from '../shared';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { ScheduleDayListComponent } from './schedule-day-list/schedule-day-list.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ScheduleRoutingModule,
    CoreModule,
    SharedModule,
    LazyLoadImageModule,
  ],
  declarations: [ScheduleComponent, ScheduleDayListComponent],
  providers: [Title],
  exports: [ScheduleDayListComponent],
})
export class ScheduleModule {}
