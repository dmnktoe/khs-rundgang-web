import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ImprintRoutingModule } from './imprint-routing.module';
import { ImprintComponent } from './imprint.component';
import { IconsModule } from '@app/shared/icons/icons.module';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ImprintRoutingModule,
    IconsModule,
    SharedModule,
  ],
  declarations: [ImprintComponent],
})
export class ImprintModule {}
