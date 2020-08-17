import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [CommonModule, TranslateModule, PrivacyRoutingModule, SharedModule],
  declarations: [PrivacyComponent],
})
export class PrivacyModule {}
