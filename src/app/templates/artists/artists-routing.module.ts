import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { ArtistsComponent } from './artists.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'artists',
      component: ArtistsComponent,
      data: { title: 'Radio Rasclat • Artists' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ArtistsRoutingModule {}
