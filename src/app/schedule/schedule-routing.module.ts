import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { ScheduleComponent } from './schedule.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'schedule',
      component: ScheduleComponent,
      data: { title: extract('BROWSER_TITLE_SCHEDULE') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ScheduleRoutingModule {}
