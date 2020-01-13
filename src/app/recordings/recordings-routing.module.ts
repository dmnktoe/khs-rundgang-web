import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { RecordingsComponent } from '@app/recordings/recordings.component';
import { RecordingsSingleComponent } from '@app/recordings/recordings-single/recordings-single.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: 'recordings', pathMatch: 'full' },
    {
      path: 'recordings',
      component: RecordingsComponent,
      data: { title: extract('BROWSER_TITLE_RECORDINGS') }
    },
    {
      path: 'recordings/:id',
      component: RecordingsSingleComponent,
      data: { title: extract('RECORDING_DETAIL') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RecordingsRoutingModule {}
