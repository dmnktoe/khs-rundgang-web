import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';
import { IconsModule } from '@app/shared/icons/icons.module';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    PrivacyRoutingModule,
    IconsModule,
    SharedModule,
  ],
  declarations: [PrivacyComponent],
})
export class PrivacyModule {}
