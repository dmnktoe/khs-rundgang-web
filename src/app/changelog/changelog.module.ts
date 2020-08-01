import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ChangelogRoutingModule } from './changelog-routing.module';
import { ChangelogComponent } from './changelog.component';
import { IconsModule } from '@app/shared/icons/icons.module';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ChangelogRoutingModule,
    IconsModule,
    SharedModule,
  ],
  declarations: [ChangelogComponent],
})
export class ChangelogModule {}
