import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { NgAisModule } from 'angular-instantsearch';
import { RecordingsModule } from '@app/recordings/recordings.module';
import { ShowsModule } from '@app/shows/shows.module';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SearchRoutingModule,
    NgAisModule,
    RecordingsModule,
    ShowsModule,
    SharedModule,
  ],
  declarations: [SearchComponent],
})
export class SearchModule {}
