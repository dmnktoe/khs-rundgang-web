import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { ShowsComponent } from '@app/shows/shows.component';
import { ShowsSingleComponent } from './shows-single/shows-single.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'shows',
      component: ShowsComponent,
      data: { title: extract('BROWSER_TITLE_SHOWS') }
    },
    {
      path: 'shows/:id',
      component: ShowsSingleComponent,
      data: { title: extract('SHOW_DETAIL') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ShowsRoutingModule {}
