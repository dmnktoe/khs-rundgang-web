import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ChangelogRoutingModule } from './changelog-routing.module';
import { ChangelogComponent } from './changelog.component';
import { SharedModule } from '../../shared';
import { SvgIconsModule } from '@ngneat/svg-icon';
import icons from '../../../assets/svg/svg-icons';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ChangelogRoutingModule,
    SharedModule,
    SvgIconsModule.forRoot({
      icons,
    }),
  ],
  declarations: [ChangelogComponent],
})
export class ChangelogModule {}
